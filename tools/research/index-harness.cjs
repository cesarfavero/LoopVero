'use strict';
// Parse reference files as data. Never require/import/execute a reference bundle.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const acorn = require('acorn');
const root = path.resolve(__dirname, '../..');
const output = path.join(root, 'mapped/inventory');
const specs = [
  { id: 'host', path: 'reference/runtime/host-main.cjs' },
  { id: 'evaluation', path: 'reference/runtime/sand-eval-runner.cjs' },
  { id: 'state-worker', path: 'reference/runtime/workers/state/agent-store-worker.cjs' }
];
const selectedPackages = new Set(['grok-bot-harness', 'chat-inference', 'agent-core', 'agent-summarization', 'agent-transcript', 'agent-kv', 'context', 'prompt-jsx']);
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const moduleKey = name => {
  const m = name.match(/^\.\.\/packages\/([^/]+)\/(?:src|dist)\/(.+)$/);
  if (m && selectedPackages.has(m[1])) return (m[1] === 'grok-bot-harness' ? 'core' : m[1]) + '/' + m[2];
  if (/^src\/(host|shared|sand-eval-runner)\//.test(name)) return name.slice(4).replace(/^sand-eval-runner\//, 'evaluation/');
  // Agent loop primitives are a separate dependency of the harness.
  if (/^\.\.\/packages\/agent\/dist\/(?:agent|run|loop|stream|session|step|inference|prompt|summar)/.test(name)) return 'agent-engine/' + name.split('/dist/')[1];
  return null;
};
const isFunction = n => /^(FunctionDeclaration|FunctionExpression|ArrowFunctionExpression)$/.test(n.type);
const children = n => Object.entries(n).flatMap(([k, v]) => {
  if (k === 'start' || k === 'end') return [];
  if (Array.isArray(v)) return v.filter(x => x && typeof x.type === 'string');
  return v && typeof v.type === 'string' ? [v] : [];
});
function expressionName(n) {
  if (!n) return '';
  if (n.type === 'Identifier' || n.type === 'PrivateIdentifier') return n.name;
  if (n.type === 'ThisExpression') return 'this';
  if (n.type === 'Super') return 'super';
  if (n.type === 'Literal') return typeof n.value === 'string' ? n.value : String(n.value);
  if (n.type === 'ChainExpression') return expressionName(n.expression);
  if (n.type === 'MemberExpression') return expressionName(n.object) + (n.computed ? '[computed]' : '.' + expressionName(n.property));
  return '';
}
function functionName(n, parent, className) {
  if (parent && parent.type === 'MethodDefinition') return (className || '<class>') + '.' + expressionName(parent.key);
  if (n.id) return n.id.name;
  if (parent && parent.type === 'VariableDeclarator') return expressionName(parent.id);
  if (parent && parent.type === 'AssignmentExpression') return expressionName(parent.left);
  if (parent && parent.type === 'Property' && !parent.computed) return expressionName(parent.key);
  if (parent && parent.type === 'PropertyDefinition') return (className || '<class>') + '.' + expressionName(parent.key);
  return null;
}
function inspectBody(fn, source) {
  const calls = new Set(), writes = new Set(), throwKinds = new Set();
  const control = { branches: 0, loops: 0, awaits: 0, returns: 0, throws: 0, catches: 0 };
  const pending = [fn.body];
  while (pending.length) {
    const n = pending.pop();
    if (isFunction(n)) continue;
    if (n.type === 'CallExpression' || n.type === 'NewExpression') {
      const name = expressionName(n.callee); if (name) calls.add((n.type === 'NewExpression' ? 'new ' : '') + name);
    }
    if (n.type === 'AssignmentExpression' || n.type === 'UpdateExpression') {
      const name = expressionName(n.left || n.argument); if (name) writes.add(name);
    }
    if (n.type === 'IfStatement' || n.type === 'ConditionalExpression' || n.type === 'SwitchCase') control.branches++;
    if (/^(ForStatement|ForOfStatement|ForInStatement|WhileStatement|DoWhileStatement)$/.test(n.type)) control.loops++;
    if (n.type === 'AwaitExpression') control.awaits++;
    if (n.type === 'ReturnStatement') control.returns++;
    if (n.type === 'CatchClause') control.catches++;
    if (n.type === 'ThrowStatement') { control.throws++; throwKinds.add(expressionName(n.argument.callee || n.argument) || n.argument.type); }
    pending.push(...children(n));
  }
  return { calls: [...calls].sort(), writes: [...writes].sort(), throw_targets: [...throwKinds].sort(), control };
}
const artifacts = [], modules = new Map(), symbols = [];
let anonymous = 0;
for (const spec of specs) {
  const filename = path.join(root, spec.path);
  if (!fs.existsSync(filename)) throw new Error('Missing reference file: ' + spec.path);
  const source = fs.readFileSync(filename, 'utf8');
  const lineStarts = [0];
  for (let i = 0; i < source.length; i++) if (source.charCodeAt(i) === 10) lineStarts.push(i + 1);
  const lineAt = offset => { let lo = 0, hi = lineStarts.length; while (lo + 1 < hi) { const mid = (lo + hi) >>> 1; if (lineStarts[mid] <= offset) lo = mid; else hi = mid; } return lo + 1; };
  const markers = [];
  let ast = acorn.parse(source, { ecmaVersion: 'latest', sourceType: 'script', allowReturnOutsideFunction: true, onComment(block, value, start, end) {
    const name = value.trim();
    if (!block && /^(?:\.\.?\/|src\/).*\.[cm]?[jt]sx?$/.test(name)) markers.push({ name, start, end, key: moduleKey(name) });
  }});
  const artifact = { ...spec, bytes: fs.statSync(filename).size, sha256: hash(source), lines: lineStarts.length, module_markers: markers.length, selected_sections: 0, named_callables: 0 };
  for (let i = 0; i < markers.length; i++) {
    const m = markers[i]; m.stop = markers[i + 1] ? markers[i + 1].start : source.length;
    if (!m.key) continue;
    artifact.selected_sections++;
    if (!modules.has(m.key)) modules.set(m.key, { id: m.key, sections: [], symbols: [] });
    modules.get(m.key).sections.push({ artifact: spec.id, path: spec.path, start_line: lineAt(m.start), end_line: lineAt(Math.max(m.end, m.stop - 1)) });
  }
  const markerAt = offset => { let lo = -1, hi = markers.length; while (lo + 1 < hi) { const mid = (lo + hi) >>> 1; if (markers[mid].start <= offset) lo = mid; else hi = mid; } return lo >= 0 ? markers[lo] : null; };
  function walk(n, parent, enclosing, className) {
    let currentClass = className;
    if (n.type === 'ClassDeclaration' || n.type === 'ClassExpression') currentClass = n.id ? n.id.name : parent && parent.type === 'VariableDeclarator' ? expressionName(parent.id) : className;
    let nextEnclosing = enclosing;
    if (isFunction(n)) {
      const marker = markerAt(n.start);
      if (marker && marker.key) {
        const name = functionName(n, parent, currentClass);
        if (name) {
          const qualified = enclosing ? enclosing + '/' + name : name;
          const record = { id: spec.id + ':' + lineAt(n.start) + ':' + n.start, artifact: spec.id, module: marker.key, name, qualified_name: qualified, path: spec.path, start_line: lineAt(n.start), end_line: lineAt(Math.max(n.start, n.end - 1)), async: !!n.async, generator: !!n.generator, implicit_return: n.body.type !== 'BlockStatement', kind: parent && parent.type === 'MethodDefinition' ? 'method' : n.type, parameters: n.params.map(p => source.slice(p.start, p.end)), body_sha256: hash(source.slice(n.start, n.end)), ...inspectBody(n, source) };
          symbols.push(record); modules.get(marker.key).symbols.push(record.id); artifact.named_callables++; nextEnclosing = qualified;
        } else { anonymous++; nextEnclosing = enclosing ? enclosing + '/<callback>' : '<callback>'; }
      }
    }
    for (const child of children(n)) walk(child, n, nextEnclosing, currentClass);
  }
  walk(ast, null, '', '');
  ast = null;
  artifacts.push(artifact);
  if (global.gc) global.gc();
  console.log(spec.id + ': ' + artifact.named_callables + ' named callables, ' + artifact.selected_sections + ' module sections');
}
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'modules.json'), JSON.stringify([...modules.values()].sort((a,b)=>a.id.localeCompare(b.id)), null, 2) + '\n');
const symbolDir = path.join(output, 'symbols');
fs.rmSync(symbolDir, { recursive: true, force: true });
const groupedSymbols = new Map();
for (const symbol of symbols) {
  if (!groupedSymbols.has(symbol.module)) groupedSymbols.set(symbol.module, []);
  groupedSymbols.get(symbol.module).push(symbol);
}
const shards = [];
for (const [key, records] of [...groupedSymbols].sort((a,b)=>a[0].localeCompare(b[0]))) {
  const relative = 'mapped/inventory/symbols/' + key + '.json';
  const target = path.join(root, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, JSON.stringify(records, null, 2) + '\n');
  shards.push({ module: key, path: relative, count: records.length });
}
fs.writeFileSync(path.join(output, 'symbols.json'), JSON.stringify({ schema: 1, named_callable_occurrences: symbols.length, shards }, null, 2) + '\n');
fs.writeFileSync(path.join(output, 'analysis.json'), JSON.stringify({ schema: 1, parser: 'acorn@' + acorn.version, source_commit: '655acca99bff0d17466547611108f94ed6a8a5e7', method: 'Static AST; LF-based source lines; named callables only; calls unresolved; no reference execution', artifacts, modules: modules.size, named_callable_occurrences: symbols.length, anonymous_callbacks_excluded: anonymous }, null, 2) + '\n');
console.log('Indexed ' + modules.size + ' modules and ' + symbols.length + ' callable occurrences.');
