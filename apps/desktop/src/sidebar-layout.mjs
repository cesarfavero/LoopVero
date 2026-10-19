export const sidebarLayoutStorageKeys = Object.freeze({
  expandedWidth: 'sand.sidebar.width',
  collapsed: 'sand.sidebar.collapsed',
});

export const sidebarWidthBounds = Object.freeze({ min: 240, max: 400, initial: 280, collapsed: 88 });

export function clampSidebarWidth(value) {
  return Math.min(sidebarWidthBounds.max, Math.max(sidebarWidthBounds.min, value));
}

export function readSidebarLayout(storage) {
  try {
    const value = Number(storage.getItem(sidebarLayoutStorageKeys.expandedWidth));
    return {
      expandedWidth: Number.isFinite(value) && value > 0 ? clampSidebarWidth(value) : sidebarWidthBounds.initial,
      isCollapsed: storage.getItem(sidebarLayoutStorageKeys.collapsed) === 'true',
    };
  } catch {
    return { expandedWidth: sidebarWidthBounds.initial, isCollapsed: false };
  }
}

export function writeSidebarLayout(storage, layout) {
  try {
    storage.setItem(sidebarLayoutStorageKeys.expandedWidth, String(clampSidebarWidth(layout.expandedWidth)));
    storage.setItem(sidebarLayoutStorageKeys.collapsed, String(layout.isCollapsed === true));
    return true;
  } catch {
    return false;
  }
}
