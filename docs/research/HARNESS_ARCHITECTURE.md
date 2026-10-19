# Arquitetura recuperada do Grok Bot 0.71.2

Este é um mapa inicial de contratos locais, não uma afirmação de paridade funcional. Evidência primária: artefatos e hashes em [ARTIFACT_INVENTORY.md](ARTIFACT_INVENTORY.md), ASAR indexado pelo REA e linhas citadas de `GrokBotResearch/sand/sand-host/host-main.cjs`.

```mermaid
flowchart LR
  R[Renderer] --> P[Preload]
  P --> M[Electron Main]
  M --> C[Node Agent Coordinator]
  C -->|coordinator-control RPC| M[Electron Main]
  M -->|connector.connect gateway| G[SandBox connector / broker]
  C -->|HTTP POST /api/{method}; GET /events| G2[Gateway URL]
  G2 -. fronteira gateway ↔ host não rastreada .-> H[Sand Host]
  H --> T[Transcript Manager]
  T --> Q[SandRunScheduler]
  Q --> X[Turn Runtime]
  X --> I[Inference]
  X --> W[Agent worker pool]
  X --> E[Sand Eval Runner]
  H --> A[Automation runtime]
  H --> B[Background wakes]
```

O Coordinator pede `resolveGatewayConnection({path: "gateway"})` à Main, que delega ao connector e obtém baseUrl/tokens do SandBox. Depois, o Coordinator valida RPCs do data port e usa a URL retornada via `POST /api/{method}` e `GET /events`; a edge HTTP inclui `sendPrompt`. Eventos `transcript` recebidos por SSE são encaminhados ao renderer pelo data port. A ligação gateway↔Sand Host não foi rastreada até as funções internas de processamento e está marcada por seta pontilhada; processo/host físico também não está provado. As entradas de código foram verificadas no ASAR ou no Sand Host extraído; presença não demonstra execução. Veja [contrato desktop](DESKTOP_CONTRACT.md).

## Contratos observados no bundle do Sand Host

| Componente | Contrato estático recuperado | Fonte | Confiança |
| --- | --- | --- | --- |
| `SandRunScheduler` | `enqueue(agentId, task, options)` aceita `lane`, `source`, timestamps e callbacks. Mantém filas por agente: `user`, `agent`, `background`; executa uma tarefa ativa por agente, nessa prioridade. `drain`, `dispose`, diagnósticos e watchdog tratam espera e tarefa presa. | `host-main.cjs:739617-739904` | Alta para implementação original estática; sem validação de runtime |
| Transcript e turn | Módulos `transcript-manager.ts`, `send-pipeline.ts`, `turn-runtime.ts`, `run-lifecycle.ts` e `turn-execution-service.ts` estão no bundle. | `host-main.cjs:736446`, `739613`, `740157`, `783170`, `784581` | Alta para presença, média para responsabilidade inferida do nome |
| Isolamento | `agent-worker-pool.ts` constrói caminho para `agent-isolation/agent-store-worker.cjs` e registra conexão de worker por agente. | `host-main.cjs:715085-715343` | Média; limites de isolamento por testar |
| Automação e despertar | `automation-runtime.ts`, `background-wakes.ts`, filas `resumePendingWakes` e ferramenta `WakeParent` aparecem no host. Texto do prompt diz que `WakeParent` encerra a run e solicita comunicação pelo agente principal. | `host-main.cjs:733935-734756`, `740523-740534`, `733926-733927` | Alta para código/texto; comportamento remoto não provado |
| Inferência | `inference/extension.ts` e serviços de voz estão presentes; sessões/modelos e chamadas externas exigem tracing próprio. | `host-main.cjs:681893-682062` | Baixa para fluxo completo |
| Harness | `package.json` do ASAR declara `@anysphere/grok-bot-harness` como dependência de workspace. O código está compilado nos bundles, mas os módulos de origem não foram integralmente reconstituídos. | ASAR `package.json` | Alta para dependência; baixa para API efetiva |

## Fluxo de mensagem, estado da evidência

1. Renderer, preload e Main foram traçados para a porta transferida do coordinator; o app independente tem E2E local por CDP, não equivalente ao wire original.
2. O Main faz fork do coordinator e transfere bootstrap e três portas; Coordinator pede `resolveGatewayConnection({path: "gateway"})`; Main delega ao connector de sandbox e devolve baseUrl e tokens.
3. O Coordinator encaminha RPCs validados ao gateway por HTTP POST `/api/{method}` (o registry do gateway inclui `sendPrompt`) e recebe eventos SSE `/events`, convertendo `channel: transcript` em evento no data port; leitura do transcript arbitra entre gateway e uma fonte server-side, conforme harness/estado.
4. O Sand Host contém `send-pipeline`, `transcript-manager`, `run-lifecycle` e `turn-runtime`. As entradas exatas de handler do gateway para esse pipeline, a identidade da fonte de transcript server-side e o local/processo físico seguem desconhecidos.
5. O scheduler do host original ordena tarefas por agente, com prioridade de usuário, agente e background; isso está no bundle compilado. O scheduler de TheGrok é implementação local independente.
6. Inferência, tool calls, memória, subagentes, streaming e resposta têm contrato estático parcial em [HOST_TURN_CONTRACT](HOST_TURN_CONTRACT.md), mas faltam relações completas entre o RPC de composer e seu encaminhamento em `/api/{method}`, o ciclo interno do Sand Host, persistência e eventos de UI para texto, pensamentos e tool calls.

## Limites e próximos passos

O backend remoto e o algoritmo que seleciona oportunidades proativas não foram recuperados. `WakeParent`, `PendingWake` e o scheduler demonstram mecanismos de entrega e priorização, não a origem da decisão espontânea. O REA analisou estaticamente uma seleção de arquivos; não executou bootstrap nem registrou tráfego. A resolução do gateway foi traçada por código extraído e hash validado; a próxima etapa é usar tracing semântico REA em escopos menores para mapear serviços e mensagens do Coordinator, correlacionar chamadas do Sand Host e registrar incógnitas quando a ligação dinâmica não estiver na fonte disponível.
