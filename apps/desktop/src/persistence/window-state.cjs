const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');

const DEFAULT_BOUNDS = Object.freeze({ width: 1040, height: 760 });
const MIN_BOUNDS = Object.freeze({ width: 512, height: 520 });
const WRITE_DEBOUNCE_MS = 300;

function parseWindowState(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value) || value.version !== 1 || typeof value.isMaximized !== 'boolean') return null;
  const bounds = value.normalBounds;
  if (!bounds || typeof bounds !== 'object' || Array.isArray(bounds)) return null;
  for (const key of ['x', 'y', 'width', 'height']) {
    if (!Number.isFinite(bounds[key]) || !Number.isInteger(bounds[key])) return null;
  }
  if (bounds.width <= 0 || bounds.height <= 0) return null;
  return { version: 1, normalBounds: { x: bounds.x, y: bounds.y, width: bounds.width, height: bounds.height }, isMaximized: value.isMaximized };
}

function recoverBounds(persisted, workAreas) {
  if (!persisted || !Array.isArray(workAreas) || workAreas.length === 0) return { bounds: null, maximize: false };
  let best = null;
  for (const area of workAreas) {
    if (!area || ![area.x, area.y, area.width, area.height].every(Number.isFinite) || area.width <= 0 || area.height <= 0) continue;
    const overlapWidth = Math.max(0, Math.min(persisted.normalBounds.x + persisted.normalBounds.width, area.x + area.width) - Math.max(persisted.normalBounds.x, area.x));
    const overlapHeight = Math.max(0, Math.min(persisted.normalBounds.y + persisted.normalBounds.height, area.y + area.height) - Math.max(persisted.normalBounds.y, area.y));
    const overlapArea = overlapWidth * overlapHeight;
    if (!best || overlapArea > best.overlapArea) best = { area, overlapWidth, overlapHeight, overlapArea };
  }
  if (!best || best.overlapWidth < 100 || best.overlapHeight < 40 || best.area.width < MIN_BOUNDS.width || best.area.height < MIN_BOUNDS.height) {
    return { bounds: null, maximize: persisted.isMaximized };
  }
  const { area } = best;
  const width = Math.min(Math.max(persisted.normalBounds.width, MIN_BOUNDS.width), area.width);
  const height = Math.min(Math.max(persisted.normalBounds.height, MIN_BOUNDS.height), area.height);
  const x = Math.min(Math.max(persisted.normalBounds.x, area.x), area.x + area.width - width);
  const y = Math.min(Math.max(persisted.normalBounds.y, area.y), area.y + area.height - height);
  return { bounds: { x, y, width, height }, maximize: persisted.isMaximized };
}

function createWindowState(options = {}) {
  const { userDataPath, screen, fsImpl = fs, reportFailure = () => {}, debounceMs = WRITE_DEBOUNCE_MS, timers = globalThis } = options;
  if (typeof userDataPath !== 'string' || !path.isAbsolute(userDataPath)) throw new TypeError('userDataPath must be an absolute path');
  if (!screen || typeof screen.getAllDisplays !== 'function' || typeof screen.getDisplayMatching !== 'function') throw new TypeError('screen adapter is required');
  const filePath = path.join(userDataPath, 'window-state.json');
  let pendingText = null;
  let timer = null;

  function load() {
    let text;
    try { text = fsImpl.readFileSync(filePath, 'utf8'); }
    catch (error) {
      if (error.code !== 'ENOENT') reportFailure('read', error);
      return null;
    }
    try {
      const state = parseWindowState(JSON.parse(text));
      if (!state) reportFailure('parse', new Error('window state schema validation failed'));
      return state;
    } catch (error) {
      reportFailure('parse', error);
      return null;
    }
  }

  function flush() {
    if (timer !== null) { timers.clearTimeout(timer); timer = null; }
    const text = pendingText;
    if (text === null) return;
    pendingText = null;
    try {
      fsImpl.mkdirSync(userDataPath, { recursive: true, mode: 0o700 });
      if (fsImpl.lstatSync(userDataPath).isSymbolicLink()) throw new Error('Window state directory is a symlink');
      try { if (fsImpl.lstatSync(filePath).isSymbolicLink()) throw new Error('Window state file is a symlink'); }
      catch (error) { if (error.code !== 'ENOENT') throw error; }
      const tempPath = `${filePath}.${randomUUID()}.tmp`;
      try {
        const fd = fsImpl.openSync(tempPath, 'wx', 0o600);
        try {
          fsImpl.writeFileSync(fd, text, 'utf8');
          fsImpl.fchmodSync(fd, 0o600);
          fsImpl.fsyncSync(fd);
        } finally { fsImpl.closeSync(fd); }
        fsImpl.renameSync(tempPath, filePath);
      } finally {
        try { fsImpl.unlinkSync(tempPath); }
        catch (error) { if (error.code !== 'ENOENT') throw error; }
      }
    } catch (error) {
      reportFailure('write', error);
    }
  }

  function note(state) {
    const parsed = parseWindowState(state);
    if (!parsed) { reportFailure('write', new Error('window state schema validation failed')); return; }
    pendingText = JSON.stringify(parsed, null, 2);
    if (timer !== null) timers.clearTimeout(timer);
    timer = timers.setTimeout(flush, debounceMs);
  }

  function resolveInitialState(isExpanded = false) {
    const persisted = load();
    const recovered = recoverBounds(persisted, screen.getAllDisplays().map(display => display.workArea));
    return {
      windowOptions: { ...(recovered.bounds ?? { width: isExpanded ? 1440 : DEFAULT_BOUNDS.width, height: isExpanded ? 960 : DEFAULT_BOUNDS.height }), minWidth: MIN_BOUNDS.width, minHeight: MIN_BOUNDS.height },
      bounds: recovered.bounds,
      persistedNormalBounds: persisted?.normalBounds ?? null,
      maximize: recovered.maximize,
    };
  }

  function attach(window, initial = {}) {
    let normalBounds = initial.bounds ?? initial.persistedNormalBounds ?? window.getContentBounds();
    const capture = () => {
      if (window.isDestroyed()) return;
      if (!window.isMaximized() && !window.isFullScreen()) {
        const current = window.getBounds();
        const normal = window.getNormalBounds();
        if (current.x === normal.x && current.y === normal.y && current.width === normal.width && current.height === normal.height) normalBounds = window.getContentBounds();
      }
      note({ version: 1, normalBounds, isMaximized: window.isMaximized() });
    };
    for (const eventName of ['resize', 'move', 'maximize', 'unmaximize']) window.on(eventName, capture);
    window.on('close', () => { capture(); flush(); });
    return () => { for (const eventName of ['resize', 'move', 'maximize', 'unmaximize']) window.removeListener(eventName, capture); };
  }

  return {
    filePath,
    load,
    recover(workAreas) { return recoverBounds(load(), workAreas); },
    resolveInitialState,
    workAreaFor(window) { return screen.getDisplayMatching(window.getBounds()).workArea; },
    apply(window, initial) {
      if (initial.bounds) window.setContentBounds(initial.bounds);
      attach(window, initial);
      if (initial.maximize) window.maximize();
    },
    attach,
    note,
    flush,
  };
}

module.exports = { createWindowState, parseWindowState, recoverBounds, DEFAULT_BOUNDS, MIN_BOUNDS, WRITE_DEBOUNCE_MS };
