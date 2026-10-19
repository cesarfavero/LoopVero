const test = require('node:test');
const assert = require('node:assert/strict');
const { createElement, Fragment } = require('react');
const { plainTextToComposerDocument, renderComposerDocument, sanitizeComposerDocument, serializeComposerDocument } = require('../src/composer-document.mjs');

test('plain drafts map to editable paragraph nodes and preserve line breaks', () => {
  const document = plainTextToComposerDocument('first\n\nthird');
  assert.equal(document.content.length, 3);
  assert.equal(serializeComposerDocument(document), 'first\n\nthird\n');
});

test('rich text serializes supported marks and block structure to model-readable markdown', () => {
  const document = { type: 'doc', content: [
    { type: 'paragraph', content: [{ type: 'text', text: 'hello', marks: [{ type: 'bold' }] }] },
    { type: 'bulletList', content: [{ type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'item' }] }] }] },
  ] };
  assert.equal(serializeComposerDocument(document), '**hello**\n- item\n');
});

test('sanitizer removes unsupported nodes, unsafe links, excessive depth and bounds text', () => {
  const source = { type: 'doc', content: [
    { type: 'paragraph', content: [
      { type: 'text', text: 'valid', marks: [{ type: 'link', attrs: { href: 'javascript:alert(1)' } }, { type: 'bold' }] },
      { type: 'image', attrs: { src: 'file:///secret' } },
      { type: 'text', text: 'x'.repeat(50) },
    ] },
  ] };
  const clean = sanitizeComposerDocument(source, { maxTextLength: 8 });
  assert.deepEqual(clean.content[0].content[0].marks, [{ type: 'bold' }]);
  assert.equal(clean.content[0].content[1].text, 'xxx');
  assert.equal(serializeComposerDocument(clean), '**valid**xxx\n');
});

test('renderer maps supported document nodes to semantic elements', () => {
  const tree = renderComposerDocument({ createElement, Fragment }, { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'title' }] });
  assert.equal(tree.type, 'h2');
  assert.equal(tree.props.children.type, Fragment);
  assert.equal(tree.props.children.props.children, 'title');
});
