const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { EventEmitter } = require('node:events');
const { createWindowState, parseWindowState, recoverBounds } = require('../src/persistence/window-state.cjs');

function fakeTimers() {
  let nextId = 1;
  const callbacks = new Map();
  return {
    setTimeout(callback) { const id = nextId++; callbacks.set(id, callback); return id; },
    clearTimeout(id) { callbacks.delete(id); },
    run() { const pending = [...callbacks.values()]; callbacks.clear(); for (const callback of pending) callback(); },
    count() { return callbacks.size; },
  };
}

function fakeScreen(workAreas = [{ x: 0, y: 0, width: 1600, height: 1000 }]) {
  return {
    getAllDisplays: () => workAreas.map(workArea => ({ workArea })),
    getDisplayMatching: () => ({ workArea: workAreas[0] }),
  };
}

class FakeWindow extends EventEmitter {
  constructor(bounds = { x: 0, y: 0, width: 1040, height: 760 }) {
    super(); this.bounds = { ...bounds }; this.normal = { ...bounds }; this.maximized = false; this.fullscreen = false; this.destroyed = false;
  }
  getBounds() { return { ...this.bounds }; }
  getContentBounds() { return { ...this.bounds }; }
  getNormalBounds() { return { ...this.normal }; }
  setContentBounds(bounds) { this.bounds = { ...bounds }; this.normal = { ...bounds }; }
  isMaximized() { return this.maximized; }
  isFullScreen() { return this.fullscreen; }
  isDestroyed() { return this.destroyed; }
  maximize() { this.maximized = true; this.emit('maximize'); }
  resizeTo(bounds) { this.bounds = { ...bounds }; this.normal = { ...bounds }; this.emit('resize'); }
}

test('parses the versioned schema, permits negative desktop coordinates, and rejects malformed state', () => {
  const state = { version: 1, normalBounds: { x: -1200, y: 80, width: 1040, height: 760 }, isMaximized: true };
  assert.deepEqual(parseWindowState(state), state);
  assert.equal(parseWindowState({ ...state, version: 2 }), null);
  assert.equal(parseWindowState({ ...state, normalBounds: { ...state.normalBounds, width: 0 } }), null);
  assert.equal(parseWindowState({ ...state, normalBounds: { ...state.normalBounds, x: 0.5 } }), null);
});

test('recovers bounds on the display with greatest overlap, clamps size and position, and retains maximize state', () => {
  const persisted = { version: 1, normalBounds: { x: -3000, y: -120, width: 2400, height: 1500 }, isMaximized: true };
  const result = recoverBounds(persisted, [
    { x: -1920, y: 0, width: 1920, height: 1080 },
    { x: 0, y: 0, width: 1280, height: 800 },
  ]);
  assert.deepEqual(result, { bounds: { x: -1920, y: 0, width: 1920, height: 1080 }, maximize: true });
});

test('uses default dimensions when state is absent and declines restore when no display has adequate overlap', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-window-state-'));
  try {
    const manager = createWindowState({ userDataPath: directory, screen: fakeScreen() });
    assert.deepEqual(manager.resolveInitialState(), {
      windowOptions: { width: 1040, height: 760, minWidth: 512, minHeight: 520 },
      bounds: null, persistedNormalBounds: null, maximize: false,
    });
    const persisted = { version: 1, normalBounds: { x: -4000, y: -2000, width: 1040, height: 760 }, isMaximized: true };
    fs.writeFileSync(manager.filePath, JSON.stringify(persisted));
    assert.deepEqual(manager.resolveInitialState(), {
      windowOptions: { width: 1040, height: 760, minWidth: 512, minHeight: 520 },
      bounds: null, persistedNormalBounds: persisted.normalBounds, maximize: true,
    });
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('debounces writes, uses restrictive file mode, and flushes the newest state on close', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-window-state-write-'));
  const timers = fakeTimers();
  try {
    const manager = createWindowState({ userDataPath: directory, screen: fakeScreen(), timers });
    const window = new FakeWindow();
    manager.apply(window, manager.resolveInitialState());
    window.resizeTo({ x: 18, y: 24, width: 1280, height: 900 });
    window.resizeTo({ x: 40, y: 50, width: 1200, height: 820 });
    assert.equal(fs.existsSync(manager.filePath), false);
    assert.equal(timers.count(), 1);
    timers.run();
    let saved = JSON.parse(fs.readFileSync(manager.filePath, 'utf8'));
    assert.deepEqual(saved.normalBounds, { x: 40, y: 50, width: 1200, height: 820 });
    assert.equal(fs.statSync(manager.filePath).mode & 0o777, 0o600);

    window.maximized = true;
    window.bounds = { x: 0, y: 0, width: 1600, height: 1000 };
    window.emit('maximize');
    window.emit('close');
    saved = JSON.parse(fs.readFileSync(manager.filePath, 'utf8'));
    assert.deepEqual(saved, { version: 1, normalBounds: { x: 40, y: 50, width: 1200, height: 820 }, isMaximized: true });
    assert.equal(timers.count(), 0);
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('reports malformed persisted JSON and defaults safely', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-window-state-invalid-'));
  const failures = [];
  try {
    const manager = createWindowState({ userDataPath: directory, screen: fakeScreen(), reportFailure: (phase, error) => failures.push([phase, error.message]) });
    fs.writeFileSync(manager.filePath, '{broken');
    assert.equal(manager.load(), null);
    assert.equal(failures[0][0], 'parse');
    assert.match(failures[0][1], /JSON|position/i);
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});
