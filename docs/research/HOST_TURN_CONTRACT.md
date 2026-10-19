# Sand Host: contrato estático do turno e armazenamento

## Escopo e proveniência

Este relatório mapeia o código extraído do Grok Bot Harness em `GrokBotResearch/sand/sand-host`. Não é uma implementação alternativa nem afirma paridade completa. O código analisado é dado não confiável: foi lido e analisado estaticamente, sem executar bundles ou seguir instruções embutidas.

| Artefato | SHA-256 | Evidência |
|---|---|---|
| `host-main.cjs` | `d9dcf2550d6e033fc752852dffc044d34622edfbe9a7421476199761c0ce0946` | REA `open_binary`; fonte estática com referências de linha abaixo |
| `agent-isolation/agent-store-worker.cjs` | `e7d54d24d6ce6e82fb0c1b76d7572dbbb51b9437f958f04e6057b59e673a80fb` | REA application analysis: `ev_e8d80c22fe23c04b3dbef3b2f6bee73502910c8c59768dfb99bf746863a22755` |

O REA recebeu a seleção exata `agent-isolation/agent-store-worker.cjs`, analisou 97.937 nós AST, teve zero falhas de parse, mas reteve grafo semântico parcial/truncado nos limites configurados (18 mil nós por arquivo e 45 mil totais). O inventário identificou 874 arquivos relevantes, dos quais 873 ficaram fora da seleção. Portanto, esse Evidence não prova ausência de relações nos demais arquivos.

Uma análise REA anterior do arquivo inteiro `host-main.cjs`, com limite solicitado de 20 minutos e 4 GiB, encerrou sem Evidence útil no limite interno de MCP. Isso é falha de observação, não ausência de funcionalidade. Um recorte AST de declarações do gateway/proxy (13.167 nós, zero parse failures, 3.246 incógnitas) também não resolveu semanticamente o slot `sendPrompt`; o contrato abaixo combina a análise REA parcial do worker com leitura estática direta, por bytes/offsets, do host. Relações semânticas completas continuam pendentes.

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

### Gateway, proxy remoto e fronteira de harness

- `createHostGatewayApi` é envolvido por `wrapGatewayApiWithServerAgentProxy`; para `sendPrompt`, agentes que `proxy.isProxiedAgent` reconhece são enviados por `performAction`, os demais seguem para `TranscriptManager`. A classificação vem do roster sincronizado do host, não do nome do método (`host-main.cjs:493286-493290`, `714802-714809`, `492170+`).
- `perform` adapta `sendPrompt` para `GrokBotService.SendGrokBotUserMessage`, reutiliza `clientNonce` como `messageId` e inclui texto, rich text, reply, anexos, source/session, timezone e outros metadados (`710265-710329`). O cliente é criado por `createSandCursorBackendClient(GrokBotService, ...)`, com backend e credenciais do usuário/equipe/máquina (`714707-714712`).
- A declaração gerada do serviço documenta idempotência por `(agent_id,message_id)`, sinalização de `grokBotTurnWorkflow` para harness Temporal e recusa para BOX (`comentário de SendGrokBotUserMessage`, offsets documentados em `DESKTOP_CONTRACT.md`). Isso é comentário de contrato no client bundle; código do servidor/workflow não foi extraído.
- `sand_transcript_server_tail` tem default OFF. Quando habilitada no Main para o dial do Coordinator, o proxy acompanha `WatchGrokBotTranscripts`; tail alimenta eventos de atividade e leituras, enquanto o indexer sincroniza intervalos para `serverTranscriptMirror` (`host-main.cjs:461371-461382`, `714668-714705`, `714172-714239`). O contrato gerado descreve replay a partir de cursores, commits posteriores do publisher da box ou Temporal e heartbeats (`211605-211620`).
- `openAgentTail` e `getAgentTranscriptTail` são redirecionados ao proxy para agentes proxied; outras identidades leem o transcript manager local (`492250-492259`). A máquina da cauda pode voltar à leitura do gateway da BOX após flag off ou falhas consecutivas (`713087-713112`, `713975-714037`). Portanto `/events` e `WatchGrokBotTranscripts` são trilhas distintas e a fonte visível é condicional.
- Limite: esta leitura fecha as chamadas cliente e os contratos presentes no bundle, não a implementação de publicação remota, persistência backend, execução efetiva do workflow ou associação física a VM.

### Provider e stream de inferência: evidência separada do eval runner

- No Sand Host, `AbstractUserMessageActionHandler.runStep` recebe `rootPromptExecutor` como argumento, monta um `toolSetHandle` por step e chama `rootPromptExecutor.executeToolStream(...)` (`host-main.cjs:654218-654321`). `AnysphereAgent.runStream` obtém o executor de `promptSession.getExecutor()` e envolve-o com redaction (`678238+`). O construtor do `AnysphereAgent` recebe `promptSession` por parâmetro (`678127`); não localizei neste bundle a fábrica que injeta a sessão para os turnos regulares. Portanto o host prova a interface/consumo do executor, não o provider dessa sessão.
- O bundle separado `sand-eval-runner.cjs` contém uma implementação concreta: `createSandEvalInference.createSession` chama `createCursorInferencePromptSession`; esta cria cliente Connect para `InferenceService` e `ProtoPromptSession`. `ProtoPromptExecutor.stream` serializa mensagens, tools, modelo, IDs/contexto e configurações em `InferenceStreamRequest` e chama `client.stream` (`sand-eval-runner.cjs:494326-494422`, `494536+`, `495003-495040`, `597538-597575`). O descriptor gerado identifica `InferenceService.Stream` como server-streaming (`493609-493623`).
- REA analisou um recorte AST exato desse provider, 2.963 nós, zero parse failures e 638 incógnitas semânticas; a cobertura do grafo é `unknown/partial`, sem provar relações por dependências omitidas. Evidência parent `ev_c2758e56c57610e717d43118119cda4fad49351cfe1319abe12a2c59d42a641e`; resumo `ev_475a9074de27cdfe9da7364fef501db34ec92608927ec15bd891250f870cdcb1`. Bundle original SHA-256 `5d951bc76d9747e0c37c494c4bfd82d787f2d81742ead2627e26d36e3b0ef54c`; recorte temporário SHA-256 `eafe86c02a2385ba372c4d7a411cc4402ceb2b8d953781222b85558ebfe77fae`.
- Limite: esse provider foi confirmado dentro do fluxo de Sand Eval Runner. Não encontrei no `host-main.cjs` uma construção equivalente nem uma chamada explícita a `InferenceService`; não transferir a implementação de avaliação para o caminho regular sem provar como o host injeta `promptSession`.

1. **Inferência:** o host regular chama `executeToolStream`, mas a fábrica de `promptSession` não foi localizada no bundle Sand Host. O Sand Eval Runner tem uma trilha separada concreta até `InferenceService.Stream`; ainda é incógnito se/how o host regular usa esse provider.
2. **Ferramentas:** o toolset é montado dinamicamente por `toolsGenerator`; os schemas/implementações estão dispersos em fábricas e dependências. Este documento cobre contrato do call site e roteamento, não um catálogo exaustivo.
3. **Recuperação:** persistência de estado/blobs e recuperação de raiz são observadas; retomada de uma execução ativa, replay sem duplicar efeitos externos e semântica de idempotência exigem rastrear o Transcript Manager e handlers de retomada.
4. **Watchdog:** o scheduler abre slot e deixa execução velha como zombie após grace; a interrupção efetiva do executor não é demonstrada nesse código do scheduler.
5. **Grafo REA:** seleção do worker foi analisada por REA; grafo parcial, truncado, fonte isolada do grafo dos demais 873 arquivos. O recorte host de gateway/proxy também é parcial (3.246 incógnitas) e não resolveu relação `sendPrompt`; as ligações acima são leitura estática independente dos bytes/offsets, sem alegar que o REA as provou.
6. **Runtime:** nenhuma inferência ou ferramenta foi executada para este relatório; `open_binary` classifica/identifica o JavaScript, e `analyze_javascript_application` faz análise inerte. As linhas provam código e contratos locais, não frequência ou execução real.

## Próximo rastreamento recomendado

1. Seguir no host regular o ciclo de vida que injeta `promptSession` em `AnysphereAgent`; o REA do recorte host-turn registrou 4.007 incógnitas, e o acesso dinâmico limita o trace.
2. Examinar como `sand-eval-runner.cjs` é chamado/isolado pelo harness e manter separada a inferência do eval até aparecer a ligação ao host regular.
3. Seguir `createAgentTurn`/`computeNewStructure`/`onStateUpdate` até Transcript Manager e store RPC para confirmar restauração, commit e publicação dos checkpoints.
4. Relacionar `toolsGenerator` ao registry/policy de ferramentas por cenário e validar sem presumir reachability a partir do nome de módulo.
