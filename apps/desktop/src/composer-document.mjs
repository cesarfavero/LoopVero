export function plainTextToComposerDocument(text) {
  const lines = String(text || '').split('\n');
  return { type: 'doc', content: lines.map(line => ({ type: 'paragraph', content: line ? [{ type: 'text', text: line }] : [] })) };
}

export function serializeComposerDocument(node) {
  if (!node || typeof node !== 'object') return '';
  if (node.type === 'text') {
    let text = typeof node.text === 'string' ? node.text : '';
    for (const mark of node.marks || []) {
      if (mark.type === 'bold') text = `**${text}**`;
      else if (mark.type === 'italic') text = `*${text}*`;
      else if (mark.type === 'strike') text = `~~${text}~~`;
      else if (mark.type === 'code') text = `\`${text}\``;
      else if (mark.type === 'link') {
        const href = safeHref(mark.attrs?.href);
        if (href) text = `[${text}](${href})`;
      }
    }
    return text;
  }
  if (node.type === 'hardBreak') return '\n';
  const children = Array.isArray(node.content) ? node.content : [];
  if (node.type === 'bulletList' || node.type === 'orderedList') {
    const start = Math.max(1, Number(node.attrs?.start) || 1);
    return `${children.map((item, index) => `${node.type === 'bulletList' ? '- ' : `${start + index}. `}${(item.content || []).map(serializeComposerDocument).join('').trimEnd()}`).join('\n')}\n`;
  }
  if (node.type === 'listItem') return children.map(serializeComposerDocument).join('');
  if (node.type === 'codeBlock') return `\n\`\`\`\n${children.map(serializeComposerDocument).join('')}\n\`\`\`\n`;
  if (node.type === 'horizontalRule') return '\n---\n';
  let text = children.map(serializeComposerDocument).join('');
  if (node.type === 'heading') text = `${'#'.repeat(Math.max(1, Math.min(6, Number(node.attrs?.level) || 1)))} ${text.trim()}`;
  if (node.type === 'blockquote') text = text.split('\n').filter(Boolean).map(line => `> ${line}`).join('\n');
  return ['paragraph', 'heading', 'blockquote'].includes(node.type) ? `${text}\n` : text;
}

export function sanitizeComposerDocument(input, limits = {}) {
  const maxNodes = limits.maxNodes ?? 2000;
  const maxDepth = limits.maxDepth ?? 24;
  const maxTextLength = limits.maxTextLength ?? 12000;
  let nodes = 0;
  let textLength = 0;

  function visit(value, depth) {
    if (!value || typeof value !== 'object' || Array.isArray(value) || depth > maxDepth || ++nodes > maxNodes) return null;
    const type = typeof value.type === 'string' ? value.type : '';
    if (type === 'text') {
      if (typeof value.text !== 'string') return null;
      const text = value.text.slice(0, Math.max(0, maxTextLength - textLength));
      textLength += text.length;
      if (!text) return null;
      const marks = Array.isArray(value.marks) ? value.marks.slice(0, 8).flatMap(mark => {
        if (!mark || !['bold', 'italic', 'strike', 'code', 'link'].includes(mark.type)) return [];
        if (mark.type !== 'link') return [{ type: mark.type }];
        const href = safeHref(mark.attrs?.href);
        return href ? [{ type: 'link', attrs: { href } }] : [];
      }) : undefined;
      return { type, text, ...(marks?.length ? { marks } : {}) };
    }
    if (!['doc', 'paragraph', 'heading', 'blockquote', 'codeBlock', 'bulletList', 'orderedList', 'listItem', 'hardBreak', 'horizontalRule'].includes(type)) return null;
    const attrs = type === 'heading' ? { level: Math.max(1, Math.min(6, Number(value.attrs?.level) || 1)) } :
      type === 'orderedList' ? { start: Math.max(1, Math.min(100000, Number(value.attrs?.start) || 1)) } : undefined;
    const content = Array.isArray(value.content) ? value.content.map(child => visit(child, depth + 1)).filter(Boolean) : [];
    return { type, ...(attrs ? { attrs } : {}), ...(content.length ? { content } : {}) };
  }
  const sanitized = visit(input, 0);
  return sanitized?.type === 'doc' ? sanitized : null;
}

function safeHref(value) {
  if (typeof value !== 'string' || value.length > 2048) return null;
  try {
    const url = new URL(value);
    return ['http:', 'https:', 'mailto:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}

export function renderComposerDocument(React, node, key = 'root') {
  if (!node || typeof node !== 'object') return null;
  const children = (node.content || []).map((child, index) => renderComposerDocument(React, child, `${key}-${index}`));
  if (node.type === 'text') {
    let child = node.text || '';
    for (const mark of node.marks || []) {
      if (mark.type === 'bold') child = React.createElement('strong', { key: `${key}-bold` }, child);
      else if (mark.type === 'italic') child = React.createElement('em', { key: `${key}-italic` }, child);
      else if (mark.type === 'strike') child = React.createElement('del', { key: `${key}-strike` }, child);
      else if (mark.type === 'code') child = React.createElement('code', { key: `${key}-code` }, child);
      else if (mark.type === 'link') {
        const href = safeHref(mark.attrs?.href);
        if (href) child = React.createElement('a', { href, key: `${key}-link`, rel: 'noreferrer noopener', target: '_blank' }, child);
      }
    }
    return React.createElement(React.Fragment, { key }, child);
  }
  if (node.type === 'hardBreak') return React.createElement('br', { key });
  if (node.type === 'horizontalRule') return React.createElement('hr', { key });
  const tag = ({ doc: React.Fragment, paragraph: 'p', heading: `h${Math.max(1, Math.min(6, Number(node.attrs?.level) || 1))}`, blockquote: 'blockquote', codeBlock: 'pre', bulletList: 'ul', orderedList: 'ol', listItem: 'li' })[node.type];
  if (!tag) return null;
  const props = { key, ...(node.type === 'orderedList' && node.attrs?.start > 1 ? { start: node.attrs.start } : {}) };
  return React.createElement(tag, props, ...children);
}
