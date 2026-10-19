import React, { forwardRef, useImperativeHandle } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { Extension } from '@tiptap/core';
import Link from '@tiptap/extension-link';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { serializeComposerDocument, plainTextToComposerDocument } from './composer-document.mjs';

const AriaPlaceholder = Extension.create({
  name: 'sandAriaPlaceholder',
  addOptions() { return { placeholder: 'Ask anything, or drop a file' }; },
  addProseMirrorPlugins() {
    const { placeholder } = this.options;
    return [new Plugin({
      key: new PluginKey('sand-aria-placeholder'),
      props: {
        attributes(state) {
          const first = state.doc.firstChild;
          const atLeadingEmptyField = first?.isTextblock && state.doc.textContent.length === 0 && state.selection.anchor <= first.nodeSize;
          return { 'aria-placeholder': atLeadingEmptyField ? placeholder : null };
        },
      },
    })];
  },
});

const PromptExtensions = [
  StarterKit.configure({
    paragraph: { HTMLAttributes: { class: 'composer-prompt-paragraph' } },
    blockquote: false,
    bold: false,
    code: false,
    codeBlock: false,
    heading: false,
    horizontalRule: false,
    italic: false,
    link: false,
    strike: false,
    underline: false,
    undoRedo: { newGroupDelay: 100 },
    bulletList: { HTMLAttributes: { class: 'composer-prompt-list' } },
    orderedList: { HTMLAttributes: { class: 'composer-prompt-list' } },
    listKeymap: false,
    trailingNode: false,
  }),
  Link.configure({
    openOnClick: false,
    defaultProtocol: 'https',
    HTMLAttributes: { class: 'composer-prompt-link' },
  }),
  Placeholder.configure({ placeholder: 'Ask anything, or drop a file', emptyEditorClass: 'is-editor-empty' }),
  AriaPlaceholder,
];

const ComposerEditor = forwardRef(function ComposerEditor({ initialDocument, initialText, disabled, onChange, onSubmit }, ref) {
  const editor = useEditor({
    extensions: PromptExtensions,
    content: initialDocument || plainTextToComposerDocument(initialText || ''),
    editorProps: {
      attributes: {
        'aria-label': 'Message',
        'aria-multiline': 'true',
        role: 'textbox',
        spellcheck: 'true',
      },
      handleKeyDown(view, event) {
        if (event.isComposing) return false;
        if (event.key === 'Tab' && !event.shiftKey && !event.repeat) {
          event.preventDefault();
          view.dispatch(view.state.tr.insertText('\t').scrollIntoView());
          return true;
        }
        if (event.key === 'Enter' && event.shiftKey && !event.metaKey && !event.ctrlKey && view.state.selection.empty) return false;
        if (event.key === 'Enter' && !event.shiftKey && !event.repeat) {
          event.preventDefault();
          onSubmit?.();
          return true;
        }
        if (event.key === 'Escape') {
          event.preventDefault();
          view.dom.blur();
          return true;
        }
        return false;
      },
    },
    editable: !disabled,
    onUpdate({ editor: current }) {
      onChange?.({
        text: serializeComposerDocument(current.getJSON()),
        richText: current.getJSON(),
      });
    },
  });

  useImperativeHandle(ref, () => ({
    clear() { editor?.commands.clearContent(true); },
    focus() { editor?.commands.focus(); },
    getSnapshot() {
      if (!editor) return { text: '', richText: null };
      return { text: serializeComposerDocument(editor.getJSON()), richText: editor.getJSON() };
    },
  }), [editor]);

  return <EditorContent editor={editor} className="composer-editor" />;
});

export default ComposerEditor;
