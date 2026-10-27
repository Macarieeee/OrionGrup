export function readRecoveryUrl(href: string) {
  const url = new URL(href);
  const hash = new URLSearchParams(url.hash.slice(1));
  const get = (key: string) => hash.get(key) ?? url.searchParams.get(key);
  const isRecovery = get("type") === "recovery" || url.pathname === "/admin/reset";
  return {
    isRecovery,
    tokens: isRecovery && get("type") === "recovery" && get("access_token") && get("refresh_token")
      ? { access_token: get("access_token")!, refresh_token: get("refresh_token")! }
      : null,
  };
}
