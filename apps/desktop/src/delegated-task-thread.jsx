import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function DelegatedTaskThread({ run, agent, onBack }) {
  const messages = (agent?.messages || []).filter(message => message.taskId === run.id);
  const toolCalls = (agent?.toolCalls || []).filter(call => call.taskId === run.id);
  const entries = [
    ...messages.map((message, index) => ({ kind: 'message', item: message, index })),
    ...toolCalls.map((call, index) => ({ kind: 'tool', item: call, index })),
  ].sort((left, right) => {
    const byTime = Date.parse(left.item.createdAt) - Date.parse(right.item.createdAt);
    return (Number.isFinite(byTime) ? byTime : 0) || (left.kind === right.kind ? left.index - right.index : left.kind === 'message' ? -1 : 1);
  });
  return <section className="delegated-task-thread" aria-label={`Task: ${run.task}`}>
    <header className="delegated-task-header"><button type="button" onClick={onBack} aria-label="Back to conversation">‹</button><div><small>{agent?.name || run.agentName}</small><h2>{run.task}</h2></div><span className={`delegated-task-status ${run.status}`}>{run.status}</span></header>
    <div className="delegated-task-history">
      {entries.map(({ kind, item }) => kind === 'message'
        ? <article className={`delegated-task-entry ${item.role}`} key={`message:${item.id}`}><span>{item.role === 'user' ? 'Task' : agent?.name || run.agentName}</span><div><ReactMarkdown remarkPlugins={[remarkGfm]}>{item.text}</ReactMarkdown></div></article>
        : <details className="delegated-task-tool" key={`tool:${item.id}`}><summary>{item.name.replaceAll('_', ' ')} <small>{item.status}</small></summary><pre>{item.summary}</pre></details>)}
      {run.status === 'running' && <p className="delegated-task-progress">{run.preview || 'Working…'}</p>}
      {run.error && <p className="delegated-task-error">{run.error}</p>}
      {!messages.length && !toolCalls.length && run.status !== 'running' && <p className="delegated-task-empty">No saved entries for this task.</p>}
    </div>
  </section>;
}
