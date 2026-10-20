import React, { useState } from 'react';

export default function TaskSidebar({ agent, tasks, selectedTaskId, onOpen }) {
  const [expanded, setExpanded] = useState(true);
  const openTasks = tasks.filter(task => task.status === 'open');
  if (!agent || openTasks.length === 0) return null;
  return <section className="task-sidebar-group" aria-label={`Tasks for ${agent.name}`}>
    <button className="task-sidebar-heading" type="button" onClick={() => setExpanded(value => !value)} aria-expanded={expanded}>
      <span className="task-sidebar-chevron" aria-hidden="true">{expanded ? '⌄' : '›'}</span><span>{agent.name}</span><small>{openTasks.length}</small>
    </button>
    {expanded && <div className="task-sidebar-list">{openTasks.map(task => <button key={task.id} type="button" data-agent-thread-row="" className={`task-sidebar-row ${selectedTaskId === task.id ? 'selected' : ''}`} aria-current={selectedTaskId === task.id ? 'page' : undefined} onClick={() => onOpen(task)}><span className="task-sidebar-symbol" aria-hidden="true">◌</span><span className="task-sidebar-copy"><b>{task.name}</b><small>{task.description}</small></span></button>)}</div>}
  </section>;
}
