import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ComposerEditor from './composer-editor.jsx';

export default function TaskDocumentView({ task, agentName, transcript, liveText, onSend, onBack, onToggleStatus, busy, turnBusy }) {
  const [draft, setDraft] = useState('');
  const [generation, setGeneration] = useState(0);
  const composer = useRef(null);
  async function submit(event) {
    event?.preventDefault();
    const snapshot = composer.current?.getSnapshot?.() || { text: draft };
    if (!snapshot.text?.trim() || turnBusy || task.status !== 'open') return;
    const sent = await onSend(snapshot);
    if (sent) { setDraft(''); setGeneration(value => value + 1); }
  }
  return <section className="task-document-view" aria-label={`Task document: ${task.name}`}>
    <header className="task-document-header">
      <div className="task-document-breadcrumb"><button type="button" className="task-document-back" onClick={onBack} aria-label="Back to conversation">{agentName}</button><span aria-hidden="true">›</span><span aria-current="page" title={task.description}>{task.name}</span></div>
      <span className="task-document-kind">Task document</span>
      <button type="button" className="task-document-status" disabled={busy} onClick={onToggleStatus} aria-label={task.status === 'open' ? 'Mark task done' : 'Reopen task'}>{task.status === 'open' ? 'Mark done' : 'Reopen'}</button>
    </header>
    <div className="task-thread-history" aria-label="Task transcript">
      <details className="task-document-details"><summary>Task document · {task.description}</summary><div className="task-document-content"><ReactMarkdown remarkPlugins={[remarkGfm]}>{task.body || '_No document body yet._'}</ReactMarkdown></div></details>
      {transcript?.entries?.map(entry => entry.kind === 'message'
        ? <article className={`task-thread-entry ${entry.role} ${entry.error ? 'error' : ''}`} key={entry.id}><div><ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.text}</ReactMarkdown></div></article>
        : <details className="task-thread-tool" key={`${entry.executionId}:${entry.id}`}><summary>{entry.name.replaceAll('_', ' ')} · {entry.status}</summary><pre>{entry.summary}</pre></details>)}
      {turnBusy && <article className="task-thread-entry assistant pending"><div>{liveText ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{liveText}</ReactMarkdown> : 'Thinking…'}</div></article>}
      {!transcript?.entries?.length && !turnBusy && <p className="task-thread-empty">No messages in this task thread yet.</p>}
    </div>
    <footer className="task-thread-composer-area"><form className={`composer ${draft.trim() ? 'has-draft' : 'empty'}`} onSubmit={submit}><ComposerEditor key={`${task.id}:${generation}`} ref={composer} initialText={draft} disabled={turnBusy || task.status !== 'open'} onChange={({ text }) => setDraft(text)} onSubmit={() => submit()}/><div className="composer-bar"><span className="grow"/><button type="submit" className="send" disabled={!draft.trim() || busy || task.status !== 'open'} aria-label="Send message to task">↑</button></div></form>{task.status !== 'open' && <small>Reopen this task to send a message.</small>}</footer>
  </section>;
}
