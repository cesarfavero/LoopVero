# Inventário dos artefatos de referência

Inspeção estática em 19/10/2026. Os caminhos abaixo são relativos à raiz do projeto. Os artefatos originais não foram executados nem alterados.

| Artefato | Identidade e papel observado | SHA-256 | Confiança |
| --- | --- | --- | --- |
| `Grok Bot.app/Contents/Resources/app.asar` | ASAR do aplicativo macOS. `package.json` embutido declara `sand`, produto Grok Bot 0.71.2, entrada `dist/electron-main/main.cjs` e dependência `@anysphere/grok-bot-harness`. Contém Electron Main, preload, renderer e `dist/node-agent-coordinator/main.cjs`. | `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860` | Alta para inventário; parcial para relações de execução |
| `GrokBotResearch/sand/sand-host/host-main.cjs` | Bundle extraído do Sand Host com comentários de módulos `src/host/*`, incluindo transcript, scheduler, inferência, isolamento, extensão e host principal. | `d9dcf2550d6e033fc752852dffc044d34622edfbe9a7421476199761c0ce0946` | Alta para presença de código |
| `GrokBotResearch/sand/sand-host/sand-eval-runner.cjs` | Bundle separado do runner; comentário de módulo `src/sand-eval-runner/main.ts`. | `5d951bc76d9747e0c37c494c4bfd82d787f2d81742ead2627e26d36e3b0ef54c` | Alta para presença de código |
| `GrokBotResearch/sand/sand-host/agent-isolation/agent-store-worker.cjs` | Worker de isolamento de agente. | `e7d54d24d6ce6e82fb0c1b76d7572dbbb51b9437f958f04e6057b59e673a80fb` | Média |
| `GrokBotResearch/sand/sand-host/extensions/`, `box-scripts/`, `box-launchers/`, `node_modules/` e `GrokBotResearch/sand/deps/` | Extensões, scripts, lançadores e dependências do host. Algumas são binários nativos. | Não indexados individualmente | Alta para presença, baixa para comportamento |

Entradas ASAR confirmadas no índice: `dist/electron-main/main.cjs`, `main-app.cjs`, `main-core.cjs`, `proto.cjs`; `dist/electron-preload/preload.cjs`; `dist/node-agent-coordinator/main.cjs`; `dist/renderer/index.html`, assets JS/CSS; `dist/local-exec-daemon/main.cjs`.

## Evidence REA

`analyze_javascript_application` sobre o ASAR, com seleção explícita de `package.json`, `main-app.cjs`, `main-core.cjs` e `proto.cjs`, produziu Evidence `ev_b8279e690c58e8fc372e9c5adb013ab03dcca3de9dd71a779453bd37b3687d33` e resumo `ev_e4c0cc970634da602d548820890fb25bc5323940e4aafc386e7f52f1893c8921`. O índice reteve o inventário completo, porém a seleção deixou 608 arquivos fora da análise semântica. `main-app.cjs` atingiu limite de stack e `proto.cjs` limite de orçamento do grafo. Portanto, o grafo não prova os contratos completos desses bundles.

A checagem de integridade padrão do REA recusou o ASAR por divergência entre o hash declarado e bytes observados de `dist/deps/cursor-proclist/build/Release/cursor_proclist.node` (`0fbec71e…` versus `c695dceb…`). A nova análise usou `record-and-continue`; o REA também registrou divergências em cinco outros executáveis/addons desempacotados. Esses bytes são tratados como não confiáveis. A divergência pode decorrer de assinatura ou alteração após empacotamento, mas a causa não foi demonstrada.

## Próximas sondagens

1. Analisar `dist/node-agent-coordinator/main.cjs` e entradas Main/preload em chamadas REA delimitadas.
2. Inspecionar Evidence existente antes de novas análises pesadas e resolver as fronteiras IPC/RPC com `inspect_analysis_view` e tracing semântico.
3. Hash e inventário de cada binário selecionado antes de qualquer conclusão sobre comportamento nativo.
