const test = require('node:test');
const assert = require('node:assert/strict');
const { getThemeState, resolveTheme, sanitizeThemePreference } = require('../src/theme.cjs');

test('system theme follows the operating system while explicit preferences win', () => {
  assert.equal(resolveTheme('system', true), 'dark');
  assert.equal(resolveTheme('system', false), 'light');
  assert.equal(resolveTheme('light', true), 'light');
  assert.equal(resolveTheme('dark', false), 'dark');
});

test('invalid theme preferences safely fall back to system', () => {
  assert.equal(sanitizeThemePreference('sepia'), 'system');
  assert.deepEqual(getThemeState('sepia', false), { preference: 'system', resolved: 'light' });
});
