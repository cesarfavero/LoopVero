const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
app.setName('TheGrok');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { createStore } = require('./persistence/json-store.cjs');
const { runTurn } = require('./harness/agent-runtime.cjs');
const { providerStatus } = require('./providers/codexrouter.cjs');
const { RunScheduler } = require('./harness/run-scheduler.cjs');

let mainWindow;
let trustedUrl;
const store = createStore(() => app.getPath('userData'));
const activeRuns = new Map();
const scheduler = new RunScheduler();

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
        result = await runTurn({ botId, text, history, instructions: currentBot.instructions, model, signal: controller.signal, onEvent: event => {
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

app.whenReady().then(() => { createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); }); });
app.on('window-all-closed', () => { for (const run of activeRuns.values()) run.abort(); scheduler.dispose(); if (process.platform !== 'darwin') app.quit(); });
