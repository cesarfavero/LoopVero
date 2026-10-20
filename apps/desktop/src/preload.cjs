const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('grok', Object.freeze({
  loadState: () => ipcRenderer.invoke('state:load'),
  loadTheme: () => ipcRenderer.invoke('theme:load'),
  setTheme: preference => ipcRenderer.invoke('theme:set', preference),
  onThemeChange: callback => {
    if (typeof callback !== 'function') return () => {};
    const listener = (_event, state) => callback(state);
    ipcRenderer.on('theme:changed', listener);
    return () => ipcRenderer.removeListener('theme:changed', listener);
  },
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
  updateProactivity: update => ipcRenderer.invoke('proactivity:update', update),
  approveProactivity: eventId => ipcRenderer.invoke('proactivity:approve', eventId),
  dismissProactivity: eventId => ipcRenderer.invoke('proactivity:dismiss', eventId),
  setProactiveObjectiveStatus: (objectiveId, status) => ipcRenderer.invoke('proactivity:objective-status', { objectiveId, status }),
  cancelProactivity: eventId => ipcRenderer.invoke('proactivity:cancel', eventId),
  checkProactivity: () => ipcRenderer.invoke('proactivity:check'),
  onProactivityEvent: callback => {
    if (typeof callback !== 'function') return () => {};
    const listener = (_event, data) => callback(data);
    ipcRenderer.on('proactivity:event', listener);
    return () => ipcRenderer.removeListener('proactivity:event', listener);
  },
}));
