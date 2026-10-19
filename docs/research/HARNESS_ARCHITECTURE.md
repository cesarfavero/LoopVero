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
  G2 -->|HTTP dispatch| H[Sand Host gateway server]
  H -. vínculo de implantação / VM desconhecido .-> B[SandBox]
  H --> T[Transcript Manager]
  T --> Q[SandRunScheduler]
  Q --> X[Turn Runtime]
  X --> I[Inference]
  X --> W[Agent worker pool]
  X --> E[Sand Eval Runner]
  H --> A[Automation runtime]
  H --> B[Background wakes]
```

O Coordinator pede `resolveGatewayConnection({path: "gateway"})` à Main, que delega ao connector e obtém baseUrl/tokens do SandBox. Depois, valida RPCs do data port e usa a URL via `POST /api/{method}` e `GET /events`; o servidor do Sand Host despacha a API HTTP para handlers locais, e `sendPrompt` chama o transcript manager. O processo do host publica dados de descoberta do gateway e transmite eventos do host por SSE. A identidade/endpoint do transcript server-side usado na arbitragem de leitura permanece independente e desconhecida. O vínculo de implantação do gateway ao processo/box/VM também não está provado. As entradas de código foram verificadas no ASAR e no Sand Host extraído; presença não demonstra execução. Veja [contrato desktop](DESKTOP_CONTRACT.md).

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
3. O Coordinator envia RPCs validados ao gateway por POST `/api/{method}` e recebe eventos por SSE `/events`; host server implementa ambos. HTTP `sendPrompt` chega ao transcript manager, que direciona agentes proxied ao server-agent-proxy e não executa localmente sends de agents server-hosted.
4. A leitura de transcript também arbitra uma fonte server-side separada do gateway; sua identidade e endpoint permanecem desconhecidos. O vínculo físico do processo Sand Host ao box/VM também segue pendente.
5. O scheduler do host original ordena tarefas por agente, com prioridade de usuário, agente e background; isso está no bundle compilado. O scheduler de TheGrok é implementação local independente.
6. O ciclo completo de `sendPrompt` para agents proxied até o backend remoto continua a traçar; o pipeline local deliberadamente recusa turns de agentes server-hosted. Inferência, tool calls, memória, subagentes, streaming e resposta têm contrato estático parcial em [HOST_TURN_CONTRACT](HOST_TURN_CONTRACT.md), faltando correlação com eventos do renderer e execução observada.

## Limites e próximos passos

O backend remoto e o algoritmo que seleciona oportunidades proativas não foram recuperados. `WakeParent`, `PendingWake` e o scheduler demonstram mecanismos de entrega e priorização, não a origem da decisão espontânea. O REA analisou estaticamente os bundles e seus recortes; nenhum bootstrap ou tráfego foi executado/capturado nesta etapa. A resolução, o servidor e o dispatch do gateway foram rastreados até o transcript manager. Próxima etapa: traçar por REA o manager→server-agent-proxy→serviço remoto para agents proxied, além do caminho local de agentes temporais e o fluxo de inferência/tool calls.
