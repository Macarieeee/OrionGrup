import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";
import { readRecoveryUrl } from "../src/lib/recoveryUrl";

const tokenHash = "#type=recovery&access_token=test-access&refresh_token=test-refresh";

test("recovery is recognized on any landing route, including the homepage", () => {
  for (const path of ["/", "/admin", "/admin/reset", "/OrionGrup"]) {
    assert.equal(readRecoveryUrl(`https://oriongrup.ro${path}${tokenHash}`).isRecovery, true);
  }
  assert.equal(readRecoveryUrl("https://oriongrup.ro/admin/reset").tokens, null);
  assert.equal(readRecoveryUrl("https://oriongrup.ro/#type=signup&access_token=a&refresh_token=b").isRecovery, false);
  assert.equal(readRecoveryUrl("https://oriongrup.ro/admin/reset#access_token=a&refresh_token=b").tokens, null);
});

async function boot(href: string, logoutFails = false) {
  const calls: string[] = [];
  const clients: any[] = [];
  const source = readFileSync(new URL("../src/lib/supabaseClient.ts", import.meta.url), "utf8")
    .replaceAll("import.meta.env", "({ VITE_SUPABASE_URL: 'https://example.supabase.co', VITE_SUPABASE_ANON_KEY: 'test' })");
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const exports: any = {};
  vm.runInNewContext(output, {
    exports, console,
    window: { location: { href }, history: { replaceState: () => { calls.push("scrub-url"); } } },
    require: (name: string) => name === "./recoveryUrl" ? { readRecoveryUrl } : {
      createClient: (_url: string, _key: string, options: any) => {
        const id = clients.length;
        calls.push(`create-${id}`);
        const client = { options, auth: {
          signOut: async () => { calls.push(`logout-${id}`); return { error: logoutFails ? new Error("offline") : null }; },
          setSession: async (tokens: any) => {
            calls.push(`session-${id}`);
            assert.equal(tokens.access_token, "test-access");
            return { data: { session: {} }, error: null };
          },
        } };
        clients.push(client);
        return client;
      },
    },
  });
  const ready = await exports.recoveryReady;
  return { exports, clients, calls, ready };
}

test("recovery credentials are scrubbed before normal auth initializes and only enter the isolated client", async () => {
  const { clients, calls, ready } = await boot(`https://oriongrup.ro/${tokenHash}`);
  assert.equal(ready, true);
  assert.deepEqual(calls, ["scrub-url", "create-0", "create-1", "logout-0", "session-1"]);
  assert.equal(clients[0].options.auth.detectSessionInUrl, false);
  assert.equal(clients[1].options.auth.persistSession, false);
  assert.equal(clients[1].options.auth.autoRefreshToken, false);
  assert.equal(clients[1].options.auth.detectSessionInUrl, false);
  assert.notEqual(clients[1].options.auth.storageKey, clients[0].options.auth.storageKey);
});

test("a reset page without recovery credentials cannot reuse an existing login", async () => {
  const { ready, calls } = await boot("https://oriongrup.ro/admin/reset");
  assert.equal(ready, false);
  assert.equal(calls.some(call => call.startsWith("session-")), false);
});

test("recovery fails closed if the existing login cannot be signed out", async () => {
  const { ready, calls } = await boot(`https://oriongrup.ro/${tokenHash}`, true);
  assert.equal(ready, false);
  assert.equal(calls.includes("session-1"), false);
});

test("ordinary visits retain normal authentication and do not create a recovery client", async () => {
  const { clients, calls, exports } = await boot("https://oriongrup.ro/");
  assert.equal(clients.length, 1);
  assert.equal(clients[0].options.auth.detectSessionInUrl, true);
  assert.equal(exports.isPasswordRecovery, false);
  assert.deepEqual(calls, ["create-0"]);
});
