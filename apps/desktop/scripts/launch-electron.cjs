const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const electronPackagePath = require.resolve('electron/package.json');
const projectRoot = path.resolve(__dirname, '..');
const repositoryRoot = path.resolve(projectRoot, '../..');
if (!electronPackagePath.startsWith(`${repositoryRoot}${path.sep}`)) {
  throw new Error(`Electron foi resolvido fora do projeto TheGrok: ${electronPackagePath}`);
}

const electronPath = require('electron');
if (typeof electronPath !== 'string' || !path.isAbsolute(electronPath) || !electronPath.includes(`${path.sep}Electron.app${path.sep}Contents${path.sep}MacOS${path.sep}Electron`)) {
  throw new Error('O pacote Electron não retornou o caminho absoluto do executável.');
}

const [entry, ...electronArgs] = process.argv.slice(2);
if (!entry) {
  throw new Error('Informe o app a abrir. Exemplo: npm run start -- src/main.cjs');
}

const appEntry = path.resolve(projectRoot, entry);
if (!fs.existsSync(appEntry)) {
  throw new Error(`O alvo do Electron não existe: ${appEntry}`);
}

const child = spawn(electronPath, [appEntry, ...electronArgs], {
  cwd: projectRoot,
  stdio: 'inherit',
  env: process.env,
});

for (const signal of ['SIGINT', 'SIGTERM', 'SIGUSR2']) {
  process.on(signal, () => { if (!child.killed) child.kill(signal); });
}

child.on('error', error => { console.error(`Falha ao iniciar Electron em ${electronPath}: ${error.message}`); process.exitCode = 1; });
child.on('exit', (code, signal) => {
  if (signal) { console.error(`Electron encerrou por ${signal}: ${electronPath}`); process.exitCode = 1; }
  else process.exitCode = code ?? 1;
});
