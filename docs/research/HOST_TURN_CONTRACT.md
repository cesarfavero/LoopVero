# Sand Host: contrato estático do turno e armazenamento

## Escopo e proveniência

Este relatório mapeia o código extraído do Grok Bot Harness em `GrokBotResearch/sand/sand-host`. Não é uma implementação alternativa nem afirma paridade completa. O código analisado é dado não confiável: foi lido e analisado estaticamente, sem executar bundles ou seguir instruções embutidas.

| Artefato | SHA-256 | Evidência |
|---|---|---|
| `host-main.cjs` | `d9dcf2550d6e033fc752852dffc044d34622edfbe9a7421476199761c0ce0946` | REA `open_binary`; fonte estática com referências de linha abaixo |
| `agent-isolation/agent-store-worker.cjs` | `e7d54d24d6ce6e82fb0c1b76d7572dbbb51b9437f958f04e6057b59e673a80fb` | REA application analysis: `ev_e8d80c22fe23c04b3dbef3b2f6bee73502910c8c59768dfb99bf746863a22755` |

O REA recebeu a seleção exata `agent-isolation/agent-store-worker.cjs`, analisou 97.937 nós AST, teve zero falhas de parse, mas reteve grafo semântico parcial/truncado nos limites configurados (18 mil nós por arquivo e 45 mil totais). O inventário identificou 874 arquivos relevantes, dos quais 873 ficaram fora da seleção. Portanto, esse Evidence não prova ausência de relações nos demais arquivos.

Uma análise REA anterior do arquivo inteiro `host-main.cjs`, com limite solicitado de 20 minutos e 4 GiB, encerrou em 300 segundos no limite interno de MCP (`timed out awaiting tools/call after 300s`). Isso é falha de observação, não ausência de funcionalidade. O contrato abaixo combina as linhas estáticas verificadas com REA aplicado ao worker; relações semânticas completas do host continuam pendentes.

## Visão do fluxo

```mermaid
sequenceDiagram
    participant Caller as Transcript Manager / caller
    participant Queue as RunLifecycle / SandRunScheduler
    participant State as ConversationStateHandle
    participant Loop as Agent runTurnLoop
    participant Step as runStep
    participant Prompt as rootPromptExecutor
    participant Tools as ToolSet / InteractionHandler
    participant Store as Agent Store Worker / SQLite blobs

    Caller->>Queue: enqueueExclusiveRun(agentId, task, lane)
    Queue->>Queue: serializa por agentId; user > agent > background
    Queue->>State: task executada
    State->>Store: carregar/gravar blobs da conversa
    State->>Loop: fornecer turn, prompt executor e callbacks
    loop até fim, steer, limite de steps ou cancelamento
        Loop->>Step: executar um step
        Step->>Tools: gerar toolset contextual por step
        Step->>Prompt: executeToolStream(context, tools, callbacks)
        Prompt-->>Tools: stream de texto/pensamento/tool calls
        Tools->>State: registrar/upsert tool call e resultado
        Step->>State: aplicar mensagens e checkpoint
        State->>Store: persistir nova estrutura e blobs
    end
    Loop-->>Caller: estado final/resultado do run
```

O diagrama representa chamadas confirmadas por código estático. Não implica que o modelo remoto, cada ferramenta ou cada branch tenha sido exercitado em runtime.

## Contrato de turno

### Agendamento e exclusividade

- `RunLifecycle` cria `SandRunScheduler`, salvo `environment.schedulerDisabled`; defaults: watchdog de 120.000 ms e grace de 30.000 ms (`host-main.cjs:739904-739913`).
- `enqueueExclusiveRun(agentId, task, options)` encaminha ao scheduler; no modo desabilitado, encadeia promises por agente (`739930-739951`).
- O scheduler mantém filas independentes por agente e no máximo um `active` por fila (`739624-739659`, `739748-739756`). Dentro de cada agente, escolhe `user`, depois `agent`, depois `background`; na fila de usuário prefere tarefas cuja origem não seja `group-member` (`739617-739622`, `739757-739766`). Isso não prova serialização global entre agentes.
- Cada item guarda lane, origem e tempos; telemetria registra aceite, posição/profundidade, dequeue e espera (`739635-739684`).
- Se uma tarefa de usuário espera atrás de uma ativa por `watchdogMs`, o scheduler marca a ativa como interrompida para telemetria; após `watchdogGraceMs`, libera o slot, resolve a promessa original e mantém a promise ativa como zombie até ela realmente terminar (`739834-739900`). Isso é escape de fila travada, não cancelamento demonstrado do trabalho subjacente.
- `drain(agentId)` espera snapshot da ativa, zombies e filas pendentes (`739685-739697`). `dispose()` cancela timers e resolve itens ainda enfileirados via `onCancelled` (`739725-739745`).

### Criação e execução do turno

- `AgentConversationTurnHandle` vincula estrutura de turn, blob store, serialização, privacidade e builder do prompt; mensagem do usuário e steps usam referências lazy, enquanto mensagens recém-produzidas usam referências eager (`642916-642932`, `642997-643016`).
- `runTurnLoop` prepara contadores, estado inicial de todos, resolve o modo a partir da mensagem, determina `stepLimit = min(config.maxSteps, config.clientMaxSteps)` e rejeita limite não finito ou menor/igual a zero (`655062-655099`).
- Antes do loop, tenta adotar resumo pendente e marca metadados de tokens restaurados como obsoletos após compactação (`655096-655100`).
- Cada iteração chama `executeStepWithMetrics`, calcula tool calls/assistant messages, aplica pós-processamento, verifica ações assíncronas enfileiradas, consome mensagens de usuário pendentes e pode criar follow-up de reflexão conforme flags/configuração (`655113-655203`).
- O loop termina por ausência de tool call sem mensagens pendentes, envio que termina o turno quando a feature flag permite, preempção/steer, pedido de término do host, abort ou limite de steps (`655205-655220`; condições exatas estão nessa faixa, parte do ramo está além do trecho resumido).
- Mensagens enfileiradas podem atualizar o turno atual e o conjunto MCP usado (`655178-655190`); por isso o ciclo não é simplesmente “uma mensagem, uma chamada de modelo, uma resposta”.

### Montagem de contexto, inferência e tool calls

- Para cada step, `runStep` registra invocation ID, lê a mensagem e resolve modo; em seguida invoca `toolsGenerator` com recursos, estado, sessão do agente, MCP, repositórios, blob store, modo, contexto de logging, request context, locks e política do classificador (`654204-654236`). A identidade/visibilidade do toolset pode, portanto, variar por step.
- O executor obtém as mensagens correntes do `rootPromptExecutor`, estima/contabiliza tokens com contexto, modelo, seleção do usuário, opções de exibição e budget (`654240-654280`). As mensagens são fornecidas ao executor; este trecho não revela a construção integral do system prompt nem o backend/protocolo de inferência.
- O step chama `rootPromptExecutor.executeToolStream(stepModelCallContext(...), stateHandler, interactionHandler, toolExecutionSet, extras, recordToolCallResult, descriptionProps, firstToolCallHook)` (`654300-654321`). `executeToolStream` é a fronteira observada para inferência em streaming com tool calling; transporte, endpoint e política de retry são providos pelo executor/configuração e não ficam provados por esse call site.
- Os extras incluem repositórios, `strictArgParsing`, vendor do modelo, preservação de argumentos, hooks, estado, paths, regras de usuário/projeto, skills, barreira de escrita e sinal de context injection (`654305-654331`).
- Para `maxSteps !== 1`, o callback de primeiro tool call serializa contratos e allowlist de tools visíveis e persiste `pendingToolCalls` no estado; com `fireAndForgetCheckpoints`, isso ocorre como gravação observada em background com erro logado, caso contrário é awaited (`654332-654368`). Para `maxSteps === 1` o callback é omitido explicitamente.
- A execução diferida resolve o mapa de ferramentas a partir do descriptor e rejeita tool call fora da allowlist model-visible; execução e preparação de subagent são caminhos distintos (`656300-656318`). `finalizeStep` reaplica state operations em ordem de replay, agrega mensagens de resposta e chama pós-processamento/checkpoint (`656324-656355`).
- A interação grava chamadas e resultados como steps no turn; `recordToolCall` conclui mensagem aberta, redige o step conforme modo de privacidade e registra ID; `upsertToolCall` atualiza pelo ID existente ou acrescenta novo (`643041-643070`).

### Checkpoints e persistência

- `applyPostStepProcessing` anexa respostas à história do prompt, aplica eventual modifier, finaliza estado de voz e executa `computeNewStructure`; depois chama `onStateUpdate`. O padrão é awaited; `fireAndForgetCheckpoints` torna o checkpoint assíncrono com erro capturado/logado (`656062-656100`).
- O estado de conversa usa armazenamento de blobs identificado por hash e referências entre estrutura raiz, turns e steps; o worker expõe mensagens RPC `set-blob`, `get-blob`, `find-latest-root`, `clear-blobs`, `clear-stale-roots`, `collect-garbage`, `walk-export-closure`, `get-blobs` e `close` (`agent-isolation/agent-store-worker.cjs:22661-22790`).
- O worker é `worker_thread`, obtém `agentId`, `blobDbPath`, `busyTimeoutMs` e caminho legado por `workerData`; abre `ConversationBlobStoreDb`, que usa `node:sqlite` (`22661-22688`; `81`; classe de store em `22419+`). A inicialização default de busy timeout é 5.000 ms, mas é parâmetro do SQLite, não limite de duração de turn.
- `set-blob` grava bytes pelo ID hex; `get-blob` devolve cópia via transferable `ArrayBuffer`; `find-latest-root` localiza raiz; export closure percorre referências com limites solicitados e relata progresso (`22701-22779`).
- `findLatestRootBlobIdInDatabase` decodifica candidatos como `ConversationStateStructure`, exige turn IDs existentes e prefere mais turns, depois mais root prompt blobs, depois maior tamanho (`agent-store-worker.cjs:22339-22376`). Isso é recuperação/seleção de checkpoint raiz, não prova de recuperação de processos de inferência em andamento.
- A classe do turn demonstra persistência granular: steps são referências de blobs, chamadas podem ser inicialmente registradas e depois upsertadas para incluir resultado; estado sujo é marcado em mutações (`host-main.cjs:642997-643070`).

## Limites de evidência e lacunas

1. **Inferência:** o host chama `executeToolStream`, mas o caminho até transporte/model service é abstraído em `rootPromptExecutor`. O artefato extraído precisa ser rastreado por call graph e coordenador/extension antes de nomear protocolo, endpoint, autenticação ou estratégia de retry.
2. **Ferramentas:** o toolset é montado dinamicamente por `toolsGenerator`; os schemas/implementações estão dispersos em fábricas e dependências. Este documento cobre contrato do call site e roteamento, não um catálogo exaustivo.
3. **Recuperação:** persistência de estado/blobs e recuperação de raiz são observadas; retomada de uma execução ativa, replay sem duplicar efeitos externos e semântica de idempotência exigem rastrear o Transcript Manager e handlers de retomada.
4. **Watchdog:** o scheduler abre slot e deixa execução velha como zombie após grace; a interrupção efetiva do executor não é demonstrada nesse código do scheduler.
5. **Grafo REA:** seleção do worker foi analisada por REA; grafo parcial, truncado, fonte isolada do grafo dos demais 873 arquivos. A tentativa REA do host inteiro encerrou no limite interno do servidor aos 300 s mesmo com timeout maior. A análise source-level estática não substitui a futura análise REA focada em módulos/callsites menores.
6. **Runtime:** nenhuma inferência ou ferramenta foi executada para este relatório; `open_binary` classifica/identifica o JavaScript, e `analyze_javascript_application` faz análise inerte. As linhas provam código e contratos locais, não frequência ou execução real.

## Próximo rastreamento recomendado

1. Analisar via REA seleções fonte pequenas para `host-main.cjs` em torno de `runTurnLoop`, `runStep`, `executeStepWithCommonMetrics`, `rootPromptExecutor` e `RunLifecycle` para obter Evidence sem aguardar o bundle todo.
2. Seguir o call site do `rootPromptExecutor` ao provider de inferência e à origem de `toolsGenerator`.
3. Seguir `createAgentTurn`/`computeNewStructure`/`onStateUpdate` até Transcript Manager e store RPC para confirmar restauração, commit e publicação dos checkpoints.
4. Examinar `sand-eval-runner.cjs` como harness de avaliação/teste, sem assumir que ele é a implementação primária do runtime.
