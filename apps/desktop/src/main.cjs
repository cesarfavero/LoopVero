const electron = require('electron');
const { app, BrowserWindow, ipcMain, nativeTheme, screen } = electron;
const path = require('node:path');
app.setName('Grok Bot');
const userDataOverride = app.commandLine.getSwitchValue('user-data-dir');
if (userDataOverride) {
  if (!path.isAbsolute(userDataOverride)) throw new Error('O argumento --user-data-dir deve usar um caminho absoluto.');
  app.setPath('userData', path.resolve(userDataOverride));
} else if (process.platform === 'darwin') {
  app.setPath('userData', path.join(app.getPath('appData'), 'TheGrok'));
}
const { pathToFileURL } = require('node:url');
const { createStore } = require('./persistence/json-store.cjs');
const { createWindowState } = require('./persistence/window-state.cjs');
const { providerStatus } = require('./providers/codexrouter.cjs');
const { RunScheduler } = require('./harness/run-scheduler.cjs');
const { createProactivityEngine } = require('./harness/proactivity-engine.cjs');
const { createExecutionHostClient } = require('./harness/execution-host-client.cjs');
const { getThemeState } = require('./theme.cjs');

let mainWindow;
let trustedUrl;
const store = createStore(() => app.getPath('userData'));
let windowState;
let themeState;
const activeRuns = new Map();
const scheduler = new RunScheduler();
const executionHost = createExecutionHostClient();
const proactivity = createProactivityEngine({
  store,
  scheduler,
  runner: executionHost.runTurn,
  notify: () => {
    if (!electron.Notification?.isSupported?.() || mainWindow?.isFocused()) return;
    const notification = new electron.Notification({ title: 'TheGrok', body: 'A saved objective has a suggestion ready for your review.' });
    notification.on('click', () => { if (mainWindow && !mainWindow.isDestroyed()) { if (mainWindow.isMinimized()) mainWindow.restore(); mainWindow.show(); mainWindow.focus(); } });
    notification.show();
  },
  onEvent: event => { if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('proactivity:event', event); },
});

function createWindow() {
  if (!app.isPackaged && (!electron.app || !process.versions.electron || !process.execPath.includes('Electron.app/Contents/MacOS/Electron'))) {
    throw new Error('TheGrok deve ser iniciado pelo executável Electron instalado, não como script Node.');
  }
  const isMac = process.platform === 'darwin';
  const initialWindowState = windowState.resolveInitialState();
  const window = new BrowserWindow({
    ...initialWindowState.windowOptions,
    backgroundColor: themeState.resolved === 'dark' ? '#0a0a0a' : '#fcfcfc', title: 'Grok Bot',
    ...(isMac ? { frame: true, titleBarStyle: 'hiddenInset', trafficLightPosition: { x: 16, y: 15 } } : {}),
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true, nodeIntegration: false, sandbox: true,
    },
  });
  mainWindow = window;
  windowState.apply(window, initialWindowState);
  window.webContents.on('did-finish-load', () => {
    if (mainWindow === window && !window.isDestroyed()) window.webContents.send('theme:changed', themeState);
  });
  if (process.argv.includes('--dev')) {
    const devUrl = process.env.THEGROK_DEV_SERVER_URL || 'http://127.0.0.1:4180/';
    const parsedDevUrl = new URL(devUrl);
    if (parsedDevUrl.protocol !== 'http:' || !['127.0.0.1', 'localhost'].includes(parsedDevUrl.hostname)) {
      throw new Error('THEGROK_DEV_SERVER_URL deve apontar para um servidor HTTP local.');
    }
    trustedUrl = parsedDevUrl.href;
    void window.loadURL(trustedUrl);
  } else {
    const file = path.join(__dirname, '../dist/index.html');
    if (!require('node:fs').existsSync(file)) throw new Error(`Build do renderer não encontrado: ${file}. Execute npm run build antes de npm start.`);
    trustedUrl = pathToFileURL(file).href;
    void window.loadFile(file);
  }
  window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  window.webContents.on('will-navigate', (event, url) => { if (url !== trustedUrl) event.preventDefault(); });
  window.on('closed', () => { if (mainWindow === window) mainWindow = null; });
}

function assertSender(event) {
  if (!mainWindow || event.sender !== mainWindow.webContents || event.senderFrame !== mainWindow.webContents.mainFrame || event.senderFrame.url !== trustedUrl) {
    throw new Error('Origem IPC não autorizada.');
  }
}

ipcMain.handle('state:load', event => { assertSender(event); return store.load(); });
ipcMain.handle('theme:load', event => { assertSender(event); return themeState; });
ipcMain.handle('theme:set', (event, preference) => {
  assertSender(event);
  if (!['system', 'light', 'dark'].includes(preference)) throw new Error('Preferência de tema inválida.');
  store.updateThemePreference(preference);
  nativeTheme.themeSource = preference;
  themeState = getThemeState(preference, nativeTheme.shouldUseDarkColors);
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.setBackgroundColor(themeState.resolved === 'dark' ? '#0a0a0a' : '#fcfcfc');
    mainWindow.webContents.send('theme:changed', themeState);
  }
  return themeState;
});
ipcMain.handle('bot:save', (event, bot) => { assertSender(event); return store.saveBotProfile(bot); });
ipcMain.handle('memory:list', (event, botId) => {
  assertSender(event);
  if (typeof botId !== 'string' || botId.length > 100) throw new Error('Agente inválido.');
  const bot = store.load().bots.find(item => item.id === botId);
  if (!bot) throw new Error('Agente não encontrado.');
  return bot.memories || [];
});
ipcMain.handle('memory:update', (event, update) => {
  assertSender(event);
  if (!update || typeof update !== 'object' || typeof update.botId !== 'string' || update.botId.length > 100) throw new Error('Atualização de memória inválida.');
  if (update.action === 'write') return store.writeBotMemory(update.botId, update);
  if (update.action === 'forget') return store.forgetBotMemory(update.botId, update.fact);
  throw new Error('Ação de memória inválida.');
});
ipcMain.handle('provider:status', event => { assertSender(event); return providerStatus(); });
ipcMain.handle('proactivity:update', (event, update) => {
  assertSender(event);
  if (!update || typeof update !== 'object') throw new Error('Atualização de proatividade inválida.');
  if (update.settings) return proactivity.setSettings(update.settings);
  if (!update.objective || typeof update.objective !== 'object') throw new Error('Objetivo de proatividade inválido.');
  const current = store.load();
  const botId = typeof update.objective.botId === 'string' ? update.objective.botId : 'primary';
  if (!current.bots.some(bot => bot.id === botId)) throw new Error('Agente do objetivo não existe.');
  const existing = current.objectives.find(item => item.id === update.objective.id);
  if (existing && typeof update.objective.text === 'undefined') update.objective.text = existing.text;
  const changedText = Boolean(existing && typeof update.objective.text === 'string' && update.objective.text !== existing.text);
  const resumed = Boolean(existing && existing.status !== 'active' && update.objective.status === 'active');
  const objective = {
    ...update.objective,
    botId,
    status: existing ? (['completed', 'active'].includes(update.objective.status) ? update.objective.status : existing.status) : 'active',
    ...(!changedText && !resumed && existing?.lastEvaluatedAt ? { lastEvaluatedAt: existing.lastEvaluatedAt } : {}),
  };
  const updated = store.updateProactiveState({ objective });
  if (objective.status === 'completed') {
    return proactivity.completeObjective(objective.id, 'completed');
  }
  if (resumed) return proactivity.completeObjective(objective.id, 'active');
  if (objective.status === 'active' && updated.proactiveSettings.enabled) void proactivity.tick();
  return updated;
});
ipcMain.handle('proactivity:approve', async (event, eventId) => { assertSender(event); return proactivity.approve(eventId); });
ipcMain.handle('proactivity:dismiss', (event, eventId) => { assertSender(event); return proactivity.dismiss(eventId); });
ipcMain.handle('proactivity:objective-status', (event, payload) => {
  assertSender(event);
  const objectiveId = typeof payload?.objectiveId === 'string' ? payload.objectiveId : '';
  const status = payload?.status;
  if (!objectiveId || !['active', 'completed'].includes(status)) throw new Error('Atualização de objetivo inválida.');
  return proactivity.completeObjective(objectiveId, status);
});
ipcMain.handle('proactivity:cancel', (event, eventId) => { assertSender(event); return { cancelled: proactivity.cancel(eventId) }; });
ipcMain.handle('proactivity:check', async event => { assertSender(event); await proactivity.tick({ force: true }); return store.load(); });
ipcMain.handle('agent:cancel', (event, taskId) => {
  assertSender(event);
  const run = activeRuns.get(taskId);
  if (run) run.abort();
  return { cancelled: Boolean(run) };
});
ipcMain.handle('agent:turn', async (event, payload) => {
  assertSender(event);
  const botId = typeof payload?.botId === 'string' ? payload.botId.slice(0, 100) : '';
  const composer = await import('./composer-document.mjs');
  const richText = composer.sanitizeComposerDocument(payload?.richText);
  const text = (richText ? composer.serializeComposerDocument(richText) : typeof payload?.text === 'string' ? payload.text : '').trim().slice(0, 12000);
  const model = typeof payload?.model === 'string' ? payload.model.slice(0, 120) : 'codexrouter/gateway';
  const runId = require('node:crypto').randomUUID();
  if (!botId || !text) throw new Error('Mensagem ou agente inválido.');
  proactivity.cancelForBot(botId);
  const controller = new AbortController();
  activeRuns.set(runId, controller);
  const emit = data => { if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('agent:event', { ...data, runId }); };
  emit({ type: 'started', runId, botId });
  try {
    const state = store.load();
    const bot = state.bots.find(item => item.id === botId);
    if (!bot) throw new Error('Agente não encontrado.');
    let result;
    await scheduler.enqueue(botId, async () => {
      try {
        if (controller.signal.aborted) throw new Error('Execução cancelada.');
        const currentBot = store.load().bots.find(item => item.id === botId);
        if (!currentBot) throw new Error('Agente não encontrado.');
        const history = currentBot.messages;
        currentBot.messages = [...history, { id: runId, role: 'user', text, ...(richText ? { richText } : {}), createdAt: new Date().toISOString() }];
        store.saveBot(currentBot);
        if (store.load().proactiveSettings.enabled) void proactivity.tick();
        const availableAgents = store.load().bots.filter(agent => agent.id !== botId && agent.name !== 'New Bot').map(agent => ({ id: agent.id, name: agent.name, instructions: agent.instructions, memories: agent.memories || [] }));
        result = await executionHost.runTurn({ botId, text, history, instructions: currentBot.instructions, memories: currentBot.memories || [], model, signal: controller.signal, agents: availableAgents, handleMemoryRequest: request => {
          if (!request || request.botId !== botId) throw new Error('Agente da memória não corresponde ao turno.');
          if (request.action === 'write') return store.writeBotMemory(botId, request);
          if (request.action === 'forget') return store.forgetBotMemory(botId, request.fact);
          throw new Error('Ação de memória inválida.');
        }, onEvent: event => {
          const eventBotId = typeof event.botId === 'string' ? event.botId : botId;
          emit({ ...event, runId, botId: eventBotId });
          if (event.type === 'subagent-start') {
            const subagent = store.load().bots.find(item => item.id === event.botId);
            if (subagent && !subagent.messages.some(message => message.taskId === event.taskId && message.role === 'user')) {
              subagent.messages.push({ id: require('node:crypto').randomUUID(), taskId: event.taskId, parentTaskId: event.parentTaskId, role: 'user', text: event.text, createdAt: new Date().toISOString() });
              store.saveBot(subagent);
            }
          }
          if (event.type === 'subagent-start' || event.type === 'subagent-finish') {
            const parentId = typeof event.parentBotId === 'string' ? event.parentBotId : botId;
            const parent = store.load().bots.find(item => item.id === parentId);
            if (parent) {
              const runs = parent.subagentRuns || [];
              const previous = runs.find(item => item.id === event.taskId);
              const next = {
                id: event.taskId,
                parentTaskId: event.parentTaskId,
                agentId: event.botId,
                agentName: event.agentName,
                task: event.text || previous?.task || '',
                status: event.type === 'subagent-start' ? 'running' : event.status,
                ...(typeof event.result === 'string' ? { result: event.result } : {}),
                ...(typeof event.error === 'string' ? { error: event.error } : {}),
                createdAt: previous?.createdAt || new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              store.saveBot({ ...parent, subagentRuns: previous ? runs.map(item => item.id === next.id ? next : item) : [...runs, next] });
            }
            if (event.type === 'subagent-start') return;
          }
          if (event.type === 'assistant-final' && typeof event.text === 'string') {
            const current = store.load().bots.find(item => item.id === eventBotId);
            if (current && !current.messages.some(message => message.taskId === event.taskId && message.role === 'assistant')) {
              current.messages.push({ id: event.taskId, role: 'assistant', text: event.text, createdAt: new Date().toISOString(), taskId: event.taskId, ...(event.parentTaskId ? { parentTaskId: event.parentTaskId } : {}) });
              store.saveBot(current);
            }
            return;
          }
          if (!['tool-start', 'tool-finish'].includes(event.type) || !event.tool) return;
          const current = store.load().bots.find(item => item.id === eventBotId);
          if (!current) return;
          current.messages = current.messages.filter(message => message.role !== 'tool');
          const currentToolCalls = current.toolCalls || [];
          const existing = currentToolCalls.find(item => item.id === event.tool.id);
          const toolCall = {
            id: event.tool.id,
            name: event.tool.name,
            status: event.tool.status === 'running' ? 'pending' : event.tool.status,
            summary: event.type === 'tool-start' ? 'Em execução' : event.tool.output || '',
            createdAt: existing?.createdAt || new Date().toISOString(),
            taskId: event.taskId,
            ...(event.parentTaskId ? { parentTaskId: event.parentTaskId } : {}),
          };
          if (existing) current.toolCalls = currentToolCalls.map(item => item.id === toolCall.id ? toolCall : item);
          else current.toolCalls = [...currentToolCalls, toolCall];
          store.saveBot(current);
        } });
        return result;
      } catch (error) {
        const current = store.load().bots.find(item => item.id === botId);
        if (current) { current.messages.push({ id: require('node:crypto').randomUUID(), role: 'assistant', text: `Falha: ${String(error?.message || error).replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 700)}`, createdAt: new Date().toISOString(), error: true }); store.saveBot(current); }
        throw error;
      }
    }, { lane: 'user', source: 'turn', onCancelled: () => { throw new Error('Execução cancelada.'); } });
    return result;
  } finally {
    activeRuns.delete(runId);
  }
});

app.whenReady().then(() => {
  windowState = createWindowState({ userDataPath: app.getPath('userData'), screen });
  const preference = store.load().themePreference || 'system';
  nativeTheme.themeSource = preference;
  themeState = getThemeState(preference, nativeTheme.shouldUseDarkColors);
  nativeTheme.on('updated', () => {
    if (themeState.preference !== 'system') return;
    themeState = getThemeState('system', nativeTheme.shouldUseDarkColors);
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.setBackgroundColor(themeState.resolved === 'dark' ? '#0a0a0a' : '#fcfcfc');
      mainWindow.webContents.send('theme:changed', themeState);
    }
  });
  if (process.platform === 'darwin' && app.dock && electron.nativeImage) {
    app.dock.setIcon(electron.nativeImage.createFromPath(path.join(__dirname, 'assets/licensed-test/app-icon.png')));
  }
  createWindow();
  proactivity.reschedule();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('before-quit', () => { for (const run of activeRuns.values()) run.abort(); proactivity.dispose(); executionHost.dispose(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
