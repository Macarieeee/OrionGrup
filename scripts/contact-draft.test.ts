import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readContactDraft, saveContactDraft, clearContactDraft, CONTACT_DRAFT_KEY, CONTACT_DRAFT_TTL } from '../src/lib/contactDraft';

test('contact draft survives remounts, expires, clears, and tolerates unavailable storage', () => {
  const values = new Map<string, string>();
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
    removeItem: (key: string) => values.delete(key),
  } });
  const draft = { ...readContactDraft(), name: 'Test', email: 'test@example.com', phone: '123', cui: '456', message: 'My request', acceptedTerms: true };
  saveContactDraft(draft);
  const restored = readContactDraft();
  assert.deepEqual({ ...restored, updatedAt: 0 }, draft);
  const raw = values.get(CONTACT_DRAFT_KEY);
  readContactDraft();
  assert.equal(values.get(CONTACT_DRAFT_KEY), raw, 'reading must not extend expiry');
  values.set(CONTACT_DRAFT_KEY, JSON.stringify({ ...draft, updatedAt: Date.now() - CONTACT_DRAFT_TTL }));
  assert.equal(readContactDraft().message, '');
  assert.equal(values.has(CONTACT_DRAFT_KEY), false);
  saveContactDraft(draft);
  clearContactDraft();
  assert.equal(readContactDraft().name, '');
  values.set(CONTACT_DRAFT_KEY, '{broken');
  assert.equal(readContactDraft().message, '');
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, get: () => { throw new Error('Blocked'); } });
  assert.doesNotThrow(() => saveContactDraft(draft));
  assert.doesNotThrow(clearContactDraft);
  assert.equal(readContactDraft().name, '');
  Reflect.deleteProperty(globalThis, 'localStorage');
});
