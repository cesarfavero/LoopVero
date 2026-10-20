import React, { useState } from 'react';

export default function TaskSidebar({ agent, tasks, selectedTaskId, onOpen, onPin }) {
  const [expanded, setExpanded] = useState(true);
  const openTasks = tasks.filter(task => task.status === 'open' || task.pinnedAtMs).sort((a, b) => (a.pinnedAtMs ? 0 : 1) - (b.pinnedAtMs ? 0 : 1) || (a.pinnedAtMs || 0) - (b.pinnedAtMs || 0) || b.updatedAtMs - a.updatedAtMs);
  if (!agent || openTasks.length === 0) return null;
  return <section className="task-sidebar-group" aria-label={`Tasks for ${agent.name}`}>
    <button className="task-sidebar-heading" type="button" onClick={() => setExpanded(value => !value)} aria-expanded={expanded}>
      <span className="task-sidebar-chevron" aria-hidden="true">{expanded ? '⌄' : '›'}</span><span>{agent.name}</span><small>{openTasks.length}</small>
    </button>
    {expanded && <div className="task-sidebar-list">{openTasks.map(task => <div key={task.id} className={`task-sidebar-row ${selectedTaskId === task.id ? 'selected' : ''}`} data-agent-thread-row="" aria-current={selectedTaskId === task.id ? 'page' : undefined}><button type="button" className="task-sidebar-open" onClick={() => onOpen(task)} aria-label={`${task.unreadEntryId ? 'Unread task: ' : ''}${task.name}`}><span className="task-sidebar-symbol" aria-hidden="true">{task.unreadEntryId && selectedTaskId !== task.id ? '●' : '◌'}</span><span className="task-sidebar-copy"><b>{task.name}</b><small>{task.description}</small></span></button><button type="button" className="task-sidebar-pin" aria-label={task.pinnedAtMs ? `Unpin ${task.name}` : `Pin ${task.name}`} aria-pressed={Boolean(task.pinnedAtMs)} onClick={() => onPin(task)}>{task.pinnedAtMs ? '📌' : '♧'}</button></div>)}</div>}
  </section>;
}
