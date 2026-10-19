const test = require('node:test');
const assert = require('node:assert/strict');

test('uses Grok Bot sidebar width defaults and clamps persisted widths', async () => {
  const { readSidebarLayout, sidebarWidthBounds, writeSidebarLayout } = await import('../src/sidebar-layout.mjs');
  const values = new Map();
  const storage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };

  assert.deepEqual(readSidebarLayout(storage), { expandedWidth: 280, isCollapsed: false });
  assert.equal(writeSidebarLayout(storage, { expandedWidth: 425, isCollapsed: true }), true);
  assert.deepEqual(readSidebarLayout(storage), { expandedWidth: sidebarWidthBounds.max, isCollapsed: true });
  values.set('sand.sidebar.width', '200');
  assert.equal(readSidebarLayout(storage).expandedWidth, sidebarWidthBounds.min);
});

test('falls back to the default sidebar layout when client storage is unavailable', async () => {
  const { readSidebarLayout, writeSidebarLayout } = await import('../src/sidebar-layout.mjs');
  const unavailableStorage = { getItem() { throw new Error('storage unavailable'); }, setItem() { throw new Error('storage unavailable'); } };

  assert.deepEqual(readSidebarLayout(unavailableStorage), { expandedWidth: 280, isCollapsed: false });
  assert.equal(writeSidebarLayout(unavailableStorage, { expandedWidth: 300, isCollapsed: true }), false);
});
