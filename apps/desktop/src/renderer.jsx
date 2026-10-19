import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './styles.css';
import appIcon from './assets/licensed-test/app-icon.png';
import { clampSidebarWidth, readSidebarLayout, sidebarWidthBounds, writeSidebarLayout } from './sidebar-layout.mjs';
import ComposerEditor from './composer-editor.jsx';
import { renderComposerDocument } from './composer-document.mjs';

const newBot = () => ({ id: crypto.randomUUID(), name: 'New Bot', description: 'Agent', instructions: '', messages: [] });
function Mark({ small = false }) { return <img className={small ? 'mark small' : 'mark'} src={appIcon} alt="" aria-hidden="true"/>; }
function Icon({ name }) {
  const p = {
    search: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></>, plus: <path d="M12 5v14M5 12h14"/>, sidebar: <><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M9 5v14"/></>, dots: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>, info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></>, close: <path d="m6 6 12 12M18 6 6 18"/>, send: <path d="m5 12 14-7-5 14-3-6-6-1Zm6 1 8-8"/>, attach: <path d="m21 11-9 9a6 6 0 0 1-8-8l9-9a4 4 0 0 1 6 6l-9 9a2 2 0 0 1-3-3l9-9"/>, settings: <><circle cx="12" cy="12" r="3"/><path d="m19 15 .1.1a1.7 1.7 0 1 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 1 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 1 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 1 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 1 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V4a1.7 1.7 0 1 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 1 1 2.4 2.4l.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 1 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/></>, computer: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></>, activity: <path d="M3 12h4l3-8 4 16 3-8h4"/>, app: <><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 6l2-3h4l2 3M8 14h8m-4-4v7"/></>, microphone: <><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0m-7 7v3m-4 0h8"/></>, voiceChat: <><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M7 12v-2m3 5V9m3 6V9m3 3v-2" stroke="#111" strokeWidth="1.8"/></>
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{p[name]}</svg>;
}

function App() {
  const [state, setState] = useState(null);
  const [provider, setProvider] = useState({ connected: false, models: [] });
  const [model, setModel] = useState('codexrouter/gateway');
  const [activeId, setActiveId] = useState('primary');
  const [sidebarLayout, setSidebarLayout] = useState(() => readSidebarLayout(window.localStorage));
  const sidebarResize = useRef(null);
  const sidebarCollapsed = sidebarLayout.isCollapsed;
  const [drafts, setDrafts] = useState({});
  const [richDrafts, setRichDrafts] = useState({});
  const [composerGeneration, setComposerGeneration] = useState(0);
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [detailTab, setDetailTab] = useState('Details');
  const [notice, setNotice] = useState('');
  const [busyBotIds, setBusyBotIds] = useState([]);
  const [liveTextByBot, setLiveTextByBot] = useState({});
  const [liveTools, setLiveTools] = useState([]);
  const [objectiveDraft, setObjectiveDraft] = useState('');
  const [proactiveSettingsDraft, setProactiveSettingsDraft] = useState({ enabled: false, intervalMinutes: 60, cooldownMinutes: 1440 });
  const bodyRef = useRef(null);
  const composerInputRef = useRef(null);
  const bots = state?.bots || [];
  const activeBot = bots.find(bot => bot.id === activeId) || bots[0];
  const busy = busyBotIds.includes(activeBot?.id);
  const liveText = liveTextByBot[activeBot?.id] || '';
  const draft = drafts[activeId] || '';
  function setDraft(value, richText) {
    setDrafts(current => ({ ...current, [activeId]: value }));
    setRichDrafts(current => ({ ...current, [activeId]: richText }));
  }
  function clearDraft() {
    setDraft('', null);
    setComposerGeneration(value => value + 1);
  }
  const taskCalls = activeBot?.toolCalls || [];
  const rosterBots = useMemo(() => bots.filter(bot => bot.id === 'primary' || bot.id === activeId || bot.name !== 'New Bot' || bot.messages.length > 0), [bots, activeId]);
  const filteredBots = useMemo(() => rosterBots.filter(bot => `${bot.name} ${bot.messages.at(-1)?.text || ''}`.toLowerCase().includes(query.toLowerCase())), [rosterBots, query]);

  useEffect(() => { writeSidebarLayout(window.localStorage, sidebarLayout); }, [sidebarLayout]);

  function toggleSidebar() {
    setSidebarLayout(layout => ({ ...layout, isCollapsed: !layout.isCollapsed }));
  }

  function resizeSidebar(event) {
    const drag = sidebarResize.current;
    if (!drag) return;
    const width = clampSidebarWidth(drag.width + event.clientX - drag.clientX);
    setSidebarLayout(layout => ({ ...layout, expandedWidth: width }));
  }

  function endSidebarResize(event) {
    if (!sidebarResize.current) return;
    sidebarResize.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  useEffect(() => {
    let alive = true;
    window.grok.loadState().then(value => { if (alive) { setState(value); setActiveId(value.bots.find(bot => bot.id === 'primary')?.id || value.bots.find(bot => bot.name !== 'New Bot' || bot.messages.length > 0)?.id || value.bots[0]?.id || 'primary'); } }).catch(error => { if (alive) setNotice(error.message); });
    window.grok.providerStatus().then(value => { if (alive) { setProvider(value); if (value.models[0]) setModel(value.models.find(item => item.id === 'codexrouter/gateway')?.id || value.models[0].id); } });
    return () => { alive = false; };
  }, []);
  useEffect(() => { if (state?.proactiveSettings) setProactiveSettingsDraft(state.proactiveSettings); }, [state?.proactiveSettings]);
  useEffect(() => window.grok.onRunEvent(event => {
    if (event.type === 'text-delta') setLiveTextByBot(value => ({ ...value, [event.botId]: `${value[event.botId] || ''}${event.delta}` }));
    if (['subagent-start', 'subagent-progress', 'subagent-finish'].includes(event.type)) {
      setState(current => {
        if (!current) return current;
        const parentBotId = event.parentBotId || event.botId;
        return {
          ...current,
          bots: current.bots.map(bot => {
            if (bot.id !== parentBotId) return bot;
            const runs = bot.subagentRuns || [];
            const previous = runs.find(run => run.id === event.taskId);
            const next = {
              id: event.taskId,
              parentTaskId: event.parentTaskId,
              agentId: event.botId,
              agentName: event.agentName,
              task: event.text || previous?.task || '',
              status: event.type === 'subagent-start' || event.type === 'subagent-progress' ? 'running' : event.status,
              ...(event.type === 'subagent-progress' ? { preview: event.preview } : {}),
              ...(typeof event.result === 'string' ? { result: event.result } : {}),
              ...(typeof event.error === 'string' ? { error: event.error } : {}),
              createdAt: previous?.createdAt || new Date().toISOString(),
            };
            return { ...bot, subagentRuns: previous ? runs.map(run => run.id === next.id ? next : run) : [...runs, next] };
          }),
        };
      });
      return;
    }
    if ((event.type === 'tool-start' || event.type === 'tool-finish') && event.tool) {
      setLiveTools(items => items.some(item => item.id === event.tool.id)
        ? items.map(item => item.id === event.tool.id ? { ...event.tool, botId: event.botId } : item)
        : [...items, { ...event.tool, botId: event.botId }]);
      setState(current => {
        if (!current) return current;
        return {
          ...current,
          bots: current.bots.map(bot => {
            if (bot.id !== event.botId) return bot;
            const botToolCalls = bot.toolCalls || [];
            const existing = botToolCalls.find(call => call.id === event.tool.id);
            const toolCall = {
              id: event.tool.id,
              name: event.tool.name,
              status: event.tool.status === 'running' ? 'pending' : event.tool.status,
              summary: event.type === 'tool-start' ? 'Em execução' : event.tool.output || '',
              createdAt: existing?.createdAt || new Date().toISOString(),
              taskId: event.taskId,
            };
            const messages = bot.messages.map(message => message.role === 'tool' ? null : message).filter(Boolean);
            return {
              ...bot,
              messages,
              toolCalls: existing
                ? botToolCalls.map(item => item.id === toolCall.id ? toolCall : item)
                : [...botToolCalls, toolCall],
            };
          }),
        };
      });
    }
    if (event.type === 'completed') setNotice('');
  }), []);
  useEffect(() => window.grok.onProactivityEvent(event => {
    if (event.type === 'proactivity-proposal') setNotice(`A new suggestion is ready for review: ${event.proposal?.title || 'Proactive suggestion'}`);
    window.grok.loadState().then(setState).catch(() => {});
  }), []);
  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [activeBot?.messages.length, liveText]);
  async function saveBot(bot) {
    const saved = await window.grok.saveBot(bot);
    setState(current => ({ ...current, bots: current.bots.some(item => item.id === saved.id) ? current.bots.map(item => item.id === saved.id ? saved : item) : [saved, ...current.bots] }));
  }
  async function createBot() { const bot = newBot(); await saveBot(bot); setActiveId(bot.id); setDetailTab('Details'); }
  async function submit(event) {
    event?.preventDefault();
    const snapshot = composerInputRef.current?.getSnapshot?.() || { text: draft, richText: richDrafts[activeId] };
    const message = snapshot.text.trim();
    if (!message || busyBotIds.includes(activeBot?.id) || !activeBot) return;
    const botId = activeBot.id;
    clearDraft(); setBusyBotIds(ids => ids.includes(botId) ? ids : [...ids, botId]); setLiveTextByBot(value => ({ ...value, [botId]: '' })); setLiveTools(items => items.filter(item => item.botId !== botId)); setNotice('');
    try {
      await window.grok.sendMessage({ botId, text: message, richText: snapshot.richText, model });
      const refreshed = await window.grok.loadState(); setState(refreshed);
    } catch (error) { setNotice(String(error?.message || error)); const refreshed = await window.grok.loadState().catch(() => null); if (refreshed) setState(refreshed); }
    finally { setBusyBotIds(ids => ids.filter(id => id !== botId)); setLiveTextByBot(value => ({ ...value, [botId]: '' })); }
  }
  async function renameBot(name) { if (activeBot && name.trim()) await saveBot({ ...activeBot, name: name.trim() }); }
  async function updateProactivity(update) {
    try { setState(await window.grok.updateProactivity(update)); }
    catch (error) { setNotice(String(error?.message || error)); }
  }
  function commitProactiveSettings() {
    void updateProactivity({ settings: { ...proactiveSettingsDraft, intervalMinutes: Number(proactiveSettingsDraft.intervalMinutes), cooldownMinutes: Number(proactiveSettingsDraft.cooldownMinutes) } });
  }
  async function addObjective(event) {
    event.preventDefault();
    const text = objectiveDraft.trim();
    if (!text) return;
    await updateProactivity({ objective: { id: crypto.randomUUID(), text, botId: activeBot?.id || 'primary', status: 'active' } });
    setObjectiveDraft('');
  }
  async function reviewNow() {
    try { setState(await window.grok.checkProactivity()); setNotice('Objective review finished.'); }
    catch (error) { setNotice(String(error?.message || error)); }
  }
  async function approveProposal(eventId) {
    try { setState(await window.grok.approveProactivity(eventId)); setNotice('Proposal handed to the primary agent.'); }
    catch (error) { setNotice(String(error?.message || error)); }
  }
  async function dismissProposal(eventId) {
    try { setState(await window.grok.dismissProactivity(eventId)); }
    catch (error) { setNotice(String(error?.message || error)); }
  }
  async function setObjectiveStatus(objectiveId, status) {
    try { setState(await window.grok.setProactiveObjectiveStatus(objectiveId, status)); }
    catch (error) { setNotice(String(error?.message || error)); }
  }

  if (!state) return <main className="boot"><Mark/><span>Starting TheGrok…</span></main>;
  return <div className={`app-shell ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`} style={{ '--sidebar-width': `${sidebarCollapsed ? sidebarWidthBounds.collapsed : sidebarLayout.expandedWidth}px` }}>
    <aside className="sidebar">
      <div className="sidebar-top"><div className="sidebar-tools"><button className="sidebar-round sidebar-toggle" aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Toggle compact sidebar'} title={sidebarCollapsed ? 'Expand sidebar' : 'Toggle compact sidebar'} aria-expanded={!sidebarCollapsed} onClick={toggleSidebar}><Icon name="sidebar"/></button><span className="sidebar-spacer"/>{searchOpen ? <label className="search sidebar-search"><Icon name="search"/><input autoFocus className="sidebar-search-input" value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => { if (event.key === 'Escape') { setQuery(''); setSearchOpen(false); } }} placeholder="Search" aria-label="Search"/></label> : <button className="sidebar-round sidebar-search-control" aria-label="Search" title="Search" onClick={() => setSearchOpen(true)}><Icon name="search"/></button>}<button className="sidebar-round sidebar-new-bot" aria-label="New Bot" title="New Bot" onClick={createBot}><Icon name="plus"/></button></div></div>
      <nav className="agent-list" aria-label="Bots">{filteredBots.map(bot => <button key={bot.id} className={`agent-item ${bot.id === activeId ? 'active' : ''}`} onClick={() => { setActiveId(bot.id); setNotice(''); }}><span className="agent-mark"><Mark small/>{bot.id === 'primary' && <span className="main-agent-badge" aria-label="Main Bot">★</span>}</span><span className="agent-copy"><b>{bot.name}</b>{bot.messages.at(-1)?.text && <small>{bot.messages.at(-1).text}</small>}</span></button>)}{!filteredBots.length && <p className="empty-list">No bots found</p>}</nav>
      <div className="sidebar-bottom"><div className="sidebar-account-row"><button className="account" onClick={() => setNotice('Account menu is not implemented yet.')} aria-label="Open account menu"><span className="person">C</span></button></div><button className="connect" onClick={() => setNotice('Connectors are not configured yet.')}><Icon name="plus"/>Connect apps <span className="connector-icons" aria-hidden="true">✉︎ ▣</span></button></div>
      {!sidebarCollapsed && <div className="sidebar-resize-handle" role="separator" aria-label="Resize sidebar" aria-orientation="vertical" aria-valuemin={sidebarWidthBounds.min} aria-valuemax={sidebarWidthBounds.max} aria-valuenow={Math.round(sidebarLayout.expandedWidth)} tabIndex={0} onPointerDown={event => { event.preventDefault(); sidebarResize.current = { clientX: event.clientX, width: sidebarLayout.expandedWidth }; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerMove={resizeSidebar} onPointerUp={endSidebarResize} onPointerCancel={endSidebarResize} onKeyDown={event => { if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return; event.preventDefault(); setSidebarLayout(layout => ({ ...layout, expandedWidth: clampSidebarWidth(layout.expandedWidth + (event.key === 'ArrowRight' ? 16 : -16)) })); }}/>}</aside>
    <main className="conversation">
      <header className="conversation-header"><div className="window-drag-region" aria-hidden="true"/><div className="active-agent"><span><b>{activeBot?.name || 'Grok Bot'}</b></span></div><div className="header-actions"><button className="icon-button" aria-label="View conversation details" onClick={() => setDetails(value => !value)}><Icon name="info"/></button></div></header>
      <section className="transcript" ref={bodyRef} aria-live="polite">{activeBot?.messages.length || taskCalls.length || activeBot?.subagentRuns?.length || busy ? <div className="message-list">{activeBot?.messages.map((message, index) => <article className={`message ${message.role === 'assistant' ? 'assistant' : 'user'} ${message.error ? 'error' : ''}`} key={message.id}><div className="message-avatar">{message.role === 'assistant' && (index === 0 || activeBot.messages[index - 1]?.role !== 'assistant') && <Mark small/>}</div><div className="message-body"><div className="message-markdown">{message.richText ? renderComposerDocument(React, message.richText) : <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text}</ReactMarkdown>}</div></div></article>)}{(taskCalls.length > 0 || activeBot.subagentRuns?.length > 0) && <section className="task-outline" aria-label="Task outline"><div className="task-outline-title">Activity</div>{taskCalls.map(call => <details className={`tool-row ${call.status}`} key={call.id} open={call.status === 'pending'}><summary><Icon name="activity"/><b>{call.name.replaceAll('_', ' ')}</b><span>{call.status === 'pending' ? 'Running' : call.status}</span></summary><small>{call.summary}</small></details>)}{(activeBot.subagentRuns || []).slice(-20).map(run => <article className={`subagent-run ${run.status}`} key={run.id}><Icon name="activity"/><div><b>{run.agentName} · {run.status === 'running' ? 'Working' : run.status}</b><small>{run.status === 'running' ? run.preview || run.task : run.result || run.error || run.task}</small></div></article>)}</section>}{busy && liveTools.filter(tool => tool.botId === activeBot.id && !taskCalls.some(call => call.id === tool.id)).map(tool => <article className={`tool-row ${tool.status === 'running' ? 'pending' : tool.status}`} key={tool.id}><Icon name="activity"/><div><b>{tool.name.replaceAll('_', ' ')}</b><small>{tool.status === 'running' ? 'Em execução' : tool.output}</small></div></article>)}{busy && <article className="message assistant"><div className="message-avatar"><Mark small/></div><div className="message-body"><div className="message-meta"><b>{activeBot.name}</b><span className="working"><i/>Working</span></div><div className="message-markdown">{liveText ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{liveText}</ReactMarkdown> : 'Thinking…'}</div></div></article>}</div> : <div className="empty-chat"><div className="empty-symbol"><Mark/></div><h1>{activeBot?.name || 'Grok Bot'}</h1><p>How can I help?</p></div>}</section>
      {notice && <div className="notice" role="status"><span>{notice}</span><button aria-label="Dismiss" onClick={() => setNotice('')}><Icon name="close"/></button></div>}
      <footer className="composer-area"><form className={`composer ${draft.trim() ? 'has-draft' : 'empty'}`} onSubmit={submit}><button type="button" className="attach-action" aria-label="Composer actions" title="Composer actions" onClick={() => setNotice('File attachments are not wired yet.')}><Icon name="plus"/></button><ComposerEditor key={`${activeId}:${composerGeneration}`} ref={composerInputRef} initialDocument={richDrafts[activeId]} initialText={draft} disabled={busy} onChange={({ text, richText }) => setDraft(text, richText)} onSubmit={() => submit()}/><div className="composer-bar"><span className="grow"/>{!draft.trim() && <button type="button" aria-label="Start voice input" title="Start voice input" onClick={() => setNotice('Dictation is not connected yet.')}><Icon name="microphone"/></button>}{!draft.trim() && <button type="button" aria-label="Start voice chat" title="Start voice chat" className="voice-chat" onClick={() => setNotice('Voice chat is not connected yet.')}><Icon name="voiceChat"/></button>}{draft.trim() && <button type="submit" className="send" aria-label="Send message" disabled={busy || !activeBot}><Icon name="send"/></button>}</div></form></footer>
    </main>
    {details && <aside className="details"><div className="details-header"><span>Conversation details</span><button className="icon-button" aria-label="Close details" onClick={() => setDetails(false)}><Icon name="close"/></button></div><div className="details-profile"><div className="profile-mark"><Mark/></div><input aria-label="Bot name" value={activeBot?.name || ''} onChange={event => setState(current => ({ ...current, bots: current.bots.map(bot => bot.id === activeId ? { ...bot, name: event.target.value } : bot) }))} onBlur={event => renameBot(event.target.value)}/><small>Bot</small></div><div className="detail-tabs" role="tablist">{['Details', 'Library', 'Computer', 'Objectives'].map(tab => <button key={tab} role="tab" aria-selected={detailTab === tab} className={detailTab === tab ? 'selected' : ''} onClick={() => setDetailTab(tab)}>{tab}</button>)}</div>{detailTab === 'Details' ? <div className="detail-content"><label>Bot description<input value={activeBot?.description || ''} onChange={event => setState(current => ({ ...current, bots: current.bots.map(bot => bot.id === activeId ? { ...bot, description: event.target.value } : bot) }))} onBlur={() => saveBot(activeBot)}/></label><label>Instructions<textarea placeholder="Add instructions for this agent" value={activeBot?.instructions || ''} onChange={event => setState(current => ({ ...current, bots: current.bots.map(bot => bot.id === activeId ? { ...bot, instructions: event.target.value } : bot) }))} onBlur={() => saveBot(activeBot)}/></label><button className="settings-row" onClick={() => setNotice('Tool permissions are under development.')}><Icon name="settings"/>Tool permissions</button></div> : detailTab === 'Library' ? <div className="detail-empty"><b>Library</b><p>Files and saved items for this bot.</p><button onClick={() => setNotice('Library storage is under development.')}>Add files</button></div> : detailTab === 'Computer' ? <div className="computer-card"><div className="computer-preview"><Icon name="computer"/><span>Computer session</span></div><p>No computer session is active.</p><button disabled>Connect computer</button></div> : <div className="detail-content proactivity-panel"><div className="proactivity-controls"><label className="proactivity-toggle"><input type="checkbox" checked={proactiveSettingsDraft.enabled} onChange={event => { const settings = { ...proactiveSettingsDraft, enabled: event.target.checked }; setProactiveSettingsDraft(settings); void updateProactivity({ settings: { ...settings, intervalMinutes: Number(settings.intervalMinutes), cooldownMinutes: Number(settings.cooldownMinutes) } }); }}/>Enable objective follow-up</label><label>Review interval (minutes)<input type="number" min="15" max="10080" value={proactiveSettingsDraft.intervalMinutes} onChange={event => setProactiveSettingsDraft(value => ({ ...value, intervalMinutes: event.target.value }))} onBlur={commitProactiveSettings}/></label><label>Cooldown (minutes)<input type="number" min="60" max="43200" value={proactiveSettingsDraft.cooldownMinutes} onChange={event => setProactiveSettingsDraft(value => ({ ...value, cooldownMinutes: event.target.value }))} onBlur={commitProactiveSettings}/></label><small>Periodic reviews use only saved user messages, stay silent without a grounded next step, and ask before continuing with the primary agent.</small></div><form className="objective-form" onSubmit={addObjective}><label>Saved objective for {activeBot?.name || 'Grok Bot'}<textarea value={objectiveDraft} onChange={event => setObjectiveDraft(event.target.value)} maxLength={1000} placeholder="What should the agent follow up on?"/></label><button type="submit" disabled={!objectiveDraft.trim()}>Add objective</button></form><button className="settings-row" onClick={reviewNow} disabled={!state.proactiveSettings?.enabled}>Review objectives now</button><div className="objective-list">{(state.objectives || []).map(objective => <article className="objective-item" key={objective.id}><b>{objective.text}</b><small>{objective.status} · {objective.lastEvaluatedAt ? `reviewed ${new Date(objective.lastEvaluatedAt).toLocaleString()}` : 'not reviewed yet'}</small><button className="objective-status" onClick={() => setObjectiveStatus(objective.id, objective.status === 'active' ? 'completed' : 'active')}>{objective.status === 'active' ? 'Mark complete' : 'Resume objective'}</button></article>)}</div><div className="proposal-list">{(state.proactiveEvents || []).filter(item => ['awaiting_approval', 'investigating', 'failed'].includes(item.status)).map(item => <article className="proposal-card" key={item.id}><b>{item.title || 'Objective review'}</b><p>{item.summary}</p>{item.evidenceQuote && <blockquote>“{item.evidenceQuote}”</blockquote>}{item.status === 'awaiting_approval' && <div className="proposal-actions"><button onClick={() => approveProposal(item.id)}>Approve and continue</button><button onClick={() => dismissProposal(item.id)}>Dismiss</button></div>}{item.status === 'investigating' && <button onClick={() => window.grok.cancelProactivity(item.id)}>Cancel review</button>}</article>)}</div></div>}</aside>}
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);
