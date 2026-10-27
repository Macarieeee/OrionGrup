"""Extract and deduplicate email columns; does not access Supabase or send mail."""
import csv
import io
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]
sources = sorted((root / "src/data").glob("*.csv"))
output = root / "src/data/newsletter-import.local"
output.mkdir(exist_ok=True)
emails = set()
invalid = []
report = []
valid_occurrences = 0
for source in sources:
    raw = source.read_bytes()
    encoding = "utf-16" if raw.startswith((b"\xff\xfe", b"\xfe\xff")) else "utf-8-sig"
    content = raw.decode(encoding)
    dialect = csv.Sniffer().sniff(content[:8192], delimiters="\t,;")
    reader = csv.DictReader(io.StringIO(content), dialect=dialect)
    columns = [name for name in (reader.fieldnames or []) if name.strip().lower() in ("e-mail", "email")]
    if len(columns) != 1:
        raise ValueError(f"Expected one email column in {source.name}")
    counts = {"file": source.name, "rows": 0, "valid": 0, "empty": 0, "invalid": 0}
    for row in reader:
        counts["rows"] += 1
        email = (row.get(columns[0]) or "").strip().lower()
        if not email:
            counts["empty"] += 1
        elif len(email) > 254 or not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", email):
            counts["invalid"] += 1
            invalid.append([source.name, reader.line_num, email])
        else:
            counts["valid"] += 1
            valid_occurrences += 1
            emails.add(email)
    report.append(counts)

with (output / "newsletter-subscribers.csv").open("w", encoding="utf-8", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["email"])
    writer.writerows([email] for email in sorted(emails))
with (output / "invalid-emails.csv").open("w", encoding="utf-8", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["source", "line", "value"])
    writer.writerows(invalid)

sql = ["-- Import extracted addresses. Existing subscribers and unsubscribes are preserved.", "begin;"]
ordered = sorted(emails)
for start in range(0, len(ordered), 500):
    values = ",\n".join("('" + email.replace("'", "''") + "')" for email in ordered[start:start + 500])
    sql.append("insert into public.newsletter_subscribers (email) values\n" + values + "\non conflict (email) do nothing;")
sql.append("commit;\n")
(output / "import-newsletter.sql").write_text("\n\n".join(sql), encoding="utf-8")
summary = {"sources": report, "unique_emails": len(emails), "duplicates_removed": valid_occurrences - len(emails)}
(output / "report.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")

# Verify the generated import file contains exactly the normalized unique set.
with (output / "newsletter-subscribers.csv").open(encoding="utf-8", newline="") as file:
    exported = [row["email"] for row in csv.DictReader(file)]
assert exported == ordered and len(exported) == len(set(exported))
print(json.dumps(summary, ensure_ascii=True, indent=2))
