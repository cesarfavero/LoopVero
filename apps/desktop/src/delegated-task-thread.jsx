import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function DelegatedTaskThread({ run, agent, onBack }) {
  const messages = (agent?.messages || []).filter(message => message.taskId === run.id);
  const toolCalls = (agent?.toolCalls || []).filter(call => call.taskId === run.id);
  return <section className="delegated-task-thread" aria-label={`Task: ${run.task}`}>
    <header className="delegated-task-header"><button type="button" onClick={onBack} aria-label="Back to conversation">‹</button><div><small>{agent?.name || run.agentName}</small><h2>{run.task}</h2></div><span className={`delegated-task-status ${run.status}`}>{run.status}</span></header>
    <div className="delegated-task-history">
      {messages.map(message => <article className={`delegated-task-entry ${message.role}`} key={message.id}><span>{message.role === 'user' ? 'Task' : agent?.name || run.agentName}</span><div><ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text}</ReactMarkdown></div></article>)}
      {toolCalls.map(call => <details className="delegated-task-tool" key={call.id}><summary>{call.name.replaceAll('_', ' ')} <small>{call.status}</small></summary><pre>{call.summary}</pre></details>)}
      {run.status === 'running' && <p className="delegated-task-progress">{run.preview || 'Working…'}</p>}
      {run.error && <p className="delegated-task-error">{run.error}</p>}
      {!messages.length && !toolCalls.length && run.status !== 'running' && <p className="delegated-task-empty">No saved entries for this task.</p>}
    </div>
  </section>;
}
