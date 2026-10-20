import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function TaskDocumentView({ task, agentName, onBack, onToggleStatus, busy }) {
  return <section className="task-document-view" aria-label={`Task document: ${task.name}`}>
    <header className="task-document-header">
      <div className="task-document-breadcrumb"><button type="button" className="task-document-back" onClick={onBack} aria-label="Back to conversation">{agentName}</button><span aria-hidden="true">›</span><span aria-current="page" title={task.description}>{task.name}</span></div>
      <span className="task-document-kind">Task document</span>
      <button type="button" className="task-document-status" disabled={busy} onClick={onToggleStatus} aria-label={task.status === 'open' ? 'Mark task done' : 'Reopen task'}>{task.status === 'open' ? 'Mark done' : 'Reopen'}</button>
    </header>
    <div className="task-document-content"><h1>{task.name}</h1><p className="task-document-description">{task.description}</p><ReactMarkdown remarkPlugins={[remarkGfm]}>{task.body || '_No document body yet._'}</ReactMarkdown></div>
    <div className="task-document-thread-unavailable" role="status">Task transcript is not connected yet. Messages in the main conversation remain separate.</div>
  </section>;
}
