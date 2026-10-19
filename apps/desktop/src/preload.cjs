const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('grok', Object.freeze({
  loadState: () => ipcRenderer.invoke('state:load'),
  saveBot: bot => ipcRenderer.invoke('bot:save', bot),
  sendMessage: payload => ipcRenderer.invoke('agent:turn', payload),
  cancel: taskId => ipcRenderer.invoke('agent:cancel', taskId),
  onRunEvent: callback => {
    if (typeof callback !== 'function') return () => {};
    const listener = (_event, data) => callback(data);
    ipcRenderer.on('agent:event', listener);
    return () => ipcRenderer.removeListener('agent:event', listener);
  },
  providerStatus: () => ipcRenderer.invoke('provider:status'),
}));
