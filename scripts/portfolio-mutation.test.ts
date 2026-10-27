import assert from "node:assert/strict";
import { test } from "node:test";
import { requirePortfolioMutation } from "../src/lib/portfolioMutation";

test("RLS-filtered updates with zero rows are reported as failures", () => {
  assert.throws(() => requirePortfolioMutation({ data: null, error: null }), /Nu s-a modificat niciun proiect/);
});
test("RLS insert errors explain which permissions need checking", () => {
  assert.throws(() => requirePortfolioMutation({ data: null, error: { code: "42501", message: "new row violates row-level security policy" } }), /portfolio_projects/);
});
test("other database failures retain their actual message", () => {
  assert.throws(() => requirePortfolioMutation({ data: null, error: { code: "23505", message: "duplicate slug" } }), /duplicate slug/);
});
test("only a returned row confirms success and supplies the new project id", () => {
  assert.deepEqual(requirePortfolioMutation({ data: { id: "new-id" }, error: null }), { id: "new-id" });
});
