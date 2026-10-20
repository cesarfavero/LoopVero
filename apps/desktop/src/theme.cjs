const THEME_PREFERENCES = new Set(['system', 'light', 'dark']);

function sanitizeThemePreference(value) {
  return THEME_PREFERENCES.has(value) ? value : 'system';
}

function resolveTheme(preference, systemUsesDarkColors) {
  const safePreference = sanitizeThemePreference(preference);
  return safePreference === 'system' ? (systemUsesDarkColors ? 'dark' : 'light') : safePreference;
}

function getThemeState(preference, systemUsesDarkColors) {
  const safePreference = sanitizeThemePreference(preference);
  return { preference: safePreference, resolved: resolveTheme(safePreference, systemUsesDarkColors) };
}

module.exports = { getThemeState, resolveTheme, sanitizeThemePreference };
