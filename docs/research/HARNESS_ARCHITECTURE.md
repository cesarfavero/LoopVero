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
  G2 -. gateway da box se disponível .-> H[Sand Host gateway server]
  H -->|agentes proxied| S[Cursor backend: ação + watch de transcript]
  S -. contrato temporal .-> W[grokBotTurnWorkflow]
  S -->|Watch frames| H
  H -. vínculo de implantação / VM desconhecido .-> B[SandBox]
  H --> T[Transcript Manager]
  T --> Q[SandRunScheduler]
  Q --> X[Turn Runtime]
  X -->|executor supplied by promptSession; factory unknown| I[Inference]
  E -->|its own createSandEvalInference| I2[InferenceService.Stream]
  X --> W[Agent worker pool]
  X --> E[Sand Eval Runner]
  H --> A[Automation runtime]
  H --> B[Background wakes]
```

O Coordinator pede `resolveGatewayConnection({path: "gateway"})` à Main, que delega ao connector e obtém baseUrl/tokens do SandBox. Quando a conexão ao gateway está disponível, valida RPCs do data port e usa a URL via `POST /api/{method}` e `GET /events`; o servidor do Sand Host despacha a API HTTP para handlers. `sendPrompt` chega ao transcript manager e, para agentes proxied, ao server-agent-proxy, que envia ações a `GrokBotService` e mantém um watch remoto de transcript/atividade.

O rollout `sand_transcript_server_tail` (default OFF) seleciona leitura server-side para agentes elegíveis; frames alimentam a cauda de transcript e o indexer do host. Falhas ou flag desligada podem devolver leitura de BOX ao gateway. Assim, SSE `/events` e `WatchGrokBotTranscripts` são caminhos distintos, e a origem efetiva depende do harness/estado do rollout. O contrato gerado documenta signal para `grokBotTurnWorkflow`, mas a implementação backend e a relação física entre gateway e Sand Host não estão provadas. No host regular, `runStep` consome `rootPromptExecutor.executeToolStream`, porém a fábrica de `promptSession` não foi localizada. O Sand Eval Runner tem caminho concreto próprio via `createSandEvalInference` → `createCursorInferencePromptSession` → `InferenceService.Stream`; não há prova de que ele injete a sessão no host regular. Presença de código não demonstra execução. Veja [contrato desktop](DESKTOP_CONTRACT.md) e [contrato de turno](HOST_TURN_CONTRACT.md).

## Contratos observados no bundle do Sand Host

| Componente | Contrato estático recuperado | Fonte | Confiança |
| --- | --- | --- | --- |
| `SandRunScheduler` | `enqueue(agentId, task, options)` aceita `lane`, `source`, timestamps e callbacks. Mantém filas por agente: `user`, `agent`, `background`; executa uma tarefa ativa por agente, nessa prioridade. `drain`, `dispose`, diagnósticos e watchdog tratam espera e tarefa presa. | `host-main.cjs:739617-739904` | Alta para implementação original estática; sem validação de runtime |
| Gateway e envio | `startGatewayServer` despacha POST `/api/{method}` para schema e handler; `createHostGatewayApi.sendPrompt` chama `manager.sendPrompt`; pipeline recusa sends locais para harness server-hosted/box aposentada. | `host-main.cjs:492329-492486`, `493817-493950`, `740157-740189` | Alta para ligação estática; execução remota e implantação não provadas |
| Transcript e turn | Módulos `transcript-manager.ts`, `send-pipeline.ts`, `turn-runtime.ts`, `run-lifecycle.ts` e `turn-execution-service.ts` estão no bundle. | `host-main.cjs:736446`, `739613`, `740157`, `783170`, `784581` | Alta para presença; caminhos de entrada variam por harness |
| Isolamento | `agent-worker-pool.ts` constrói caminho para `agent-isolation/agent-store-worker.cjs` e registra conexão de worker por agente. | `host-main.cjs:715085-715343` | Média; limites de isolamento por testar |
| Automação e despertar | `automation-runtime.ts`, `background-wakes.ts`, filas `resumePendingWakes` e ferramenta `WakeParent` aparecem no host. Texto do prompt diz que `WakeParent` encerra a run e solicita comunicação pelo agente principal. | `host-main.cjs:733935-734756`, `740523-740534`, `733926-733927` | Alta para código/texto; comportamento remoto não provado |
| Inferência | `inference/extension.ts` e serviços de voz estão presentes; sessões/modelos e chamadas externas exigem tracing próprio. | `host-main.cjs:681893-682062` | Baixa para fluxo completo |
| Harness | `package.json` do ASAR declara `@anysphere/grok-bot-harness` como dependência de workspace. O código está compilado nos bundles, mas os módulos de origem não foram integralmente reconstituídos. | ASAR `package.json` | Alta para dependência; baixa para API efetiva |

## Fluxo de mensagem, estado da evidência

1. Renderer, preload e Main foram traçados para a porta transferida do coordinator; o app independente tem E2E local por CDP, não equivalente ao wire original.
2. O Main faz fork do coordinator e transfere bootstrap e três portas; Coordinator pede `resolveGatewayConnection({path: "gateway"})`; Main delega ao connector de sandbox e devolve baseUrl e tokens.
3. O Coordinator envia RPCs validados ao gateway por POST `/api/{method}` e recebe eventos por SSE `/events`; o host implementa ambos. HTTP `sendPrompt` chega ao transcript manager e, para agentes proxied, ao server-agent-proxy que envia ação por Connect RPC ao backend; a declaração gerada documenta o signal Temporal.
4. O server-agent-proxy também assina `WatchGrokBotTranscripts`, mantém cauda/index remoto e serve leituras para agentes proxied quando o rollout está ativo. O default é OFF; falhas podem devolver BOX ao gateway. Esta trilha é distinta do SSE. A implementação backend e o deploy físico seguem desconhecidos.
5. O scheduler do host original ordena tarefas por agente, com prioridade de usuário, agente e background; isso está no bundle compilado. O scheduler de TheGrok é implementação local independente.
6. O caminho de ação proxied está estaticamente conectado ao RPC e ao contrato gerado de serviço, mas a implementação do backend/workflow não está extraída. O provider do eval runner foi rastreado até `InferenceService.Stream`; a sessão do host regular continua sem fábrica identificada. O pipeline local bloqueia turns BOX quando a flag correspondente está ativa. Inferência, tool calls, memória, subagentes, streaming e resposta têm contrato estático parcial em [HOST_TURN_CONTRACT](HOST_TURN_CONTRACT.md), faltando correlação com eventos do renderer e execução observada.

## Limites e próximos passos

O backend remoto e o algoritmo que seleciona oportunidades proativas não foram recuperados. `WakeParent`, `PendingWake` e o scheduler demonstram mecanismos de entrega e priorização, não a origem da decisão espontânea. O REA analisou estaticamente os bundles e seus recortes; nenhum bootstrap ou tráfego foi executado/capturado nesta etapa. A resolução e o dispatch do gateway foram rastreados até o proxy remoto e o contrato gerado. Próxima etapa: seguir por REA o fluxo de inferência/tool calls e relacionar publishers de transcript nos harnesses à API observada, mantendo backend remoto como fronteira não fornecida.

## Local process boundary (2026-10-19)

The independent implementation now keeps scheduling, Electron IPC and persistence in the Electron Main process and runs agent turns in a forked local Node-compatible child process (`apps/desktop/src/harness/execution-host-worker.cjs`). The client uses request IDs, typed `run`/`cancel`/`event`/`result`/`error` messages and forwards `AbortSignal` cancellation. The worker owns the current `runTurn` loop, provider calls and registered tools. A child exit rejects outstanding requests; the caller then persists a visible failure. This validates a **process boundary and protocol**, not an OS sandbox: the child currently shares the user's filesystem/network privileges and local CodexRouter endpoint. It is not the original remote VM, does not provide resource isolation, durable job recovery, or coordinator/execution-host RPC equivalence. The global CodexRouter configuration is not changed.

`apps/desktop/tests/execution-host-client.test.cjs` exercises event/result correlation, cancellation forwarding and child-exit recovery at the client protocol boundary. A packaged Electron run is still required to validate that the Electron-bundled Node runtime spawns the worker as Node and completes a live provider turn.

## Local Primary-to-subagent delegation (2026-10-19)

The independent harness now exposes bounded `delegate_to_agent` calls when another saved agent profile is available. The runtime runs the selected child with its own profile instructions, a separate task identity and no parent transcript, then returns a structured `function_call_output` to the parent. Child turns cannot delegate recursively; cancellation shares the parent `AbortSignal`. Main persists child input/result messages on the child profile and retains `parentTaskId` for correlation. This is local behavior, not proof of original tool schema parity. Details and REA limitations: [LOCAL_SUBAGENT_CONTRACT](LOCAL_SUBAGENT_CONTRACT.md).

An integrated run through the workspace Electron, local CodexRouter, Primary profile and a second `Researcher` profile completed. The persisted child input and answer now use distinct message IDs with the same child task ID. The run also exposed and fixed cancellation during worker startup. The child still has no per-profile tool ACL or exclusive scheduler lane; do not read the run as original harness parity.
