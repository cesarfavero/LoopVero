const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
app.setName('TheGrok');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { createStore } = require('./persistence/json-store.cjs');
const { providerStatus } = require('./providers/codexrouter.cjs');
const { RunScheduler } = require('./harness/run-scheduler.cjs');
const { createProactivityEngine } = require('./harness/proactivity-engine.cjs');
const { createExecutionHostClient } = require('./harness/execution-host-client.cjs');

let mainWindow;
let trustedUrl;
const store = createStore(() => app.getPath('userData'));
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
  const window = new BrowserWindow({
    width: 1440, height: 930, minWidth: 900, minHeight: 620,
    backgroundColor: '#fcfcfc', title: 'TheGrok',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true, nodeIntegration: false, sandbox: true,
    },
  });
  mainWindow = window;
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
ipcMain.handle('bot:save', (event, bot) => { assertSender(event); return store.saveBotProfile(bot); });
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
  const text = typeof payload?.text === 'string' ? payload.text.trim().slice(0, 12000) : '';
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
        currentBot.messages = [...history, { id: runId, role: 'user', text, createdAt: new Date().toISOString() }];
        store.saveBot(currentBot);
        if (store.load().proactiveSettings.enabled) void proactivity.tick();
        result = await executionHost.runTurn({ botId, text, history, instructions: currentBot.instructions, model, signal: controller.signal, onEvent: event => {
          emit({ ...event, runId, botId });
          if (event.type === 'assistant-final' && typeof event.text === 'string') {
            const current = store.load().bots.find(item => item.id === botId);
            if (current && !current.messages.some(message => message.taskId === event.taskId && message.role === 'assistant')) {
              current.messages.push({ id: event.taskId, role: 'assistant', text: event.text, createdAt: new Date().toISOString(), taskId: event.taskId });
              store.saveBot(current);
            }
            return;
          }
          if (!['tool-start', 'tool-finish'].includes(event.type) || !event.tool) return;
          const current = store.load().bots.find(item => item.id === botId);
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
  if (process.platform === 'darwin' && app.dock && electron.nativeImage) {
    app.dock.setIcon(electron.nativeImage.createFromPath(path.join(__dirname, 'assets/licensed-test/app-icon.png')));
  }
  createWindow();
  proactivity.reschedule();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('before-quit', () => { for (const run of activeRuns.values()) run.abort(); proactivity.dispose(); executionHost.dispose(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
