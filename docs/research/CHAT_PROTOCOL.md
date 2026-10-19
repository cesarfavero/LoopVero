# Chat e streaming: contrato recuperado do cliente original

## Escopo e procedência

Análise estática do artefato extraído em `/tmp/thegrok-desktop-contract`, sem executar o Grok Bot. Os offsets abaixo são bytes, zero-based, nos arquivos minificados extraídos; não são linhas de código-fonte. Os bundles examinados têm uma linha física cada, portanto os offsets são a referência reprodutível.

REA analisou os módulos exatos `dist/electron-preload/preload.cjs`, `dist/electron-main/main.cjs`, `dist/electron-main/main-core.cjs`, `dist/electron-main/main-app.cjs`, `dist/node-agent-coordinator/main.cjs` e `dist/renderer/assets/index-wlkGG389.js` como texto JavaScript inerte. Evidência de aplicação/análise: `ev_5f306a5e2f3f6e3ba0bfb22e94631436c44f0d5db25a96183a8f1e8e58a9aff7`; projeção de resumo: `ev_a05847416110014f3c7e3d806d25d83fa750b51c5c8cb151953e20d4806250f7`. O resumo registra 1.912.873 nós AST visitados, 4.281 achados, seis arquivos analisados, sem falha de parse. A cobertura semântica é parcial (37.646 desconhecidos); `main-app.cjs` atingiu limite de pilha, coordinator e renderer excederam o orçamento remanescente do grafo. REA afirma expressamente que análise estática não demonstra execução em runtime. Hashes SHA-256 dos cinco módulos focais:

| Arquivo | SHA-256 |
|---|---|
| `dist/electron-preload/preload.cjs` | `3996a35e9a1f38b0e6ee2de402064996ad24291518dc4e017280748e33b3be39` |
| `dist/electron-main/main.cjs` | `7a787fadfcbdb6e995502d011633496fb6a97aca9b31ce34fea7aab739fd8aa7` |
| `dist/electron-main/main-core.cjs` | `6422c2c4755d1722a9b6e842fb7117cf8eecce62d6c6a0bbdea53728999a9558` |
| `dist/electron-main/main-app.cjs` | `90ec55edf69be56c6cfd4fffa98fc45210acccf913b6c41402b5b6cca6fd538e` |
| `dist/node-agent-coordinator/main.cjs` | `b91b7a4e4294667cce9d923dabacdd39e9de82b8ef711f011123f80cf63b182c` |

## Caminho desktop comprovado

1. O preload obtém um snapshot síncrono: `ipcRenderer.sendSync("sand:boot-snapshot-sync")`, separando `mainEdge` dos demais dados de boot (offset 106605 em `preload.cjs`).
2. O transporte RPC do edge usa `dune-rpc:<edge>:m:<method>` para métodos e `dune-rpc:<edge>:e:<event>` para eventos. Cada método registrado no descriptor do edge vira uma função que invoca esse canal; métodos sem argumentos enviam `{}`. O envelope de retorno é `{ok:true,value}` ou `{ok:false,failure}`. Resposta fora do envelope produz `edge/handler-failed`; probe/transport falho resulta em `edge/transport-failed`; método não conhecido usa `edge/unknown-method` (preload, offset 9546).
3. O preload cria o bridge da porta coordinator: faz `invoke("sand:coordinator-port-request", void 0)` e recebe `sand:coordinator-port` contendo `MessagePort` transferida. Expõe o objeto como `window.coordinatorPort`; attachment staging e APIs desktop ficam em `window.desktop` (preload, offsets 106605–108151).
4. Main contém o serviço IPC de solicitação/transferência da porta (`main-app.cjs`, `sand:coordinator-port-request` perto do offset 2044450). A arquitetura separa renderer, Main e processo `node-agent-coordinator`; porém o grafo REA não conseguiu parear os oito envios literais do renderer com seis handlers Main: relação dinâmica não deve ser inventada a partir de nomes semelhantes.
5. O renderer projeta entradas históricas e de envio em `kind:"send-message"`; para mensagens destinadas ou originadas por um agente, cria itens com `id`, `message:{type:"text",content,...images}`, `author`, e, quando existentes, `seq`, `timestampMs`, `attachments` e `cloudAgentWake` (renderer `index-wlkGG389.js`, offset 1532668). O envio do composer é delegado por callback `submitPrompt` (offset ~1954000).
6. A apresentação considera streaming uma propriedade do entry (`kind:"message"` com `isStreaming`, ou `kind:"send-message"` com `streaming===true`); conteúdo vazio durante streaming é tratado como estado de pensamento, e conteúdo finalizado orienta composição/agrupamento do transcript (renderer, offsets ~1056123 e ~1532668). Isto recupera o modelo de renderização, mas não identifica por si o evento de rede que atualiza essa propriedade.

## Protocolo de stream identificado

Há um protocolo tipado de realtime/voz no preload, Main e coordinator, que não deve ser confundido com o streaming de texto do chat normal. O conjunto fechado de eventos reconhecidos inclui:

`session-ready`, `conversation-created`, `audio`, `transcript`, `truncation`, `assistant-delta`, `tool`, `response-created`, `response-ended`, `speech-started`, `speech-stopped`, `error`, `other`.

O conjunto de mensagens cliente inclui:

`session.update`, `input_audio_buffer.append`, `conversation.item.create`, `conversation.item.truncate`, `response.create`, `response.cancel`, `async_update.add`.

Estados de conexão identificados: `connecting`, `live`; estados do contexto de áudio: `running`, `suspended`, `closed`, `interrupted`; encerramentos: códigos `1008`, `1006`, `1011`, `1000` e `heartbeat`. A validação estática mostra que o evento é discriminado por `type`; há transporte WebSocket e consumidores/eventos em módulos maiores, mas o schema completo de cada payload não foi recuperado neste escopo. Coordenadas: preload ~33660; coordinator ~85225; Main ~807219. Estes são nomes e enums no código, não prova de endpoint ou resposta em uma sessão real.

O coordinator também constrói mensagens OpenAI-Realtime-like para atualizações de progresso: pares `conversation.item.create` carregando `function_call` e `function_call_output`, com `call_id`, `name`, `arguments:"{}"` e saída JSON (`status`, `steps`/`updates`, `at`). Tipos de notificação incluem `ack`, `progress`, `outcome`, `overheard`; progresso/outcome podem ser entregues como `async_update.add`; cancelamento deriva `response.cancel` com `event_id`. Coordinator offset ~84000; a mesma lógica duplicada/consumida pelo preload ~32000. É protocolo de notificação/voz, não contrato comprovado do composer de texto.

## Contratos de dados recuperáveis para transcript

O conjunto de tipos de entrada inclui `message`, `tool-call`, `send-message`, `user-attachment`, `notice`, `event`, `feedback`, `voice-call` e `mcp-app` (coordinator ~875000; renderer faz projeção equivalente). O validador estrutural observado distingue:

- `message`: `content` string;
- `send-message`: mensagem discriminada por `message.type`; texto possui `content` string;
- `tool-call`: `name` string;
- `user-attachment`: `file_path` string;
- `notice`: `text` string;
- `mcp-app`: `resourceUri` e `serverIdentifier` strings;
- `event`: contém objeto `event` com `type`.

Outros campos variam por subtype e são validados em funções específicas. Não trate esta lista como schema integral. `send-message` é um envelope de transcript; `message.type` pode representar texto e outras formas interativas (permissão local, widget, solicitações, etc.). Há estado `streaming` no envelope de envio, enquanto conteúdo textual inclui `content`.

### Apresentação do item `tool-call`

Rechecagem estática no ASAR original de SHA-256 `055b087a…de0e860`, bundle `dist/renderer/assets/index-wlkGG389.js`:

- O renderer separa a lista de entradas da conversa da lista de outline: o switch da linha de transcript retorna `null` para `kind:"tool-call"` (offset ~1.448.823); a linha de outline `oZ` cria um `<button>` com `data-kind` e `data-status` e deriva o texto amigável pelo nome da ferramenta (offset ~1.753.984).
- O ícone do outline é `loading` quando `status === "pending"`, `x-circle` quando `failed` e `wrench` nos demais estados. O estado pending ativa o modificador de animação `spin`; o resumo, quando não vazio, aparece como preview e expande em detalhes (offsets ~1.751.740–1.755.600).
- O código comum do renderer identifica entry estático `tool-call` por `id`, `status` e comprimento de `summary` (~1.087.076), e conteúdo detalhado como `summary`; o coordinator valida também `name`, `argumentsJson`, `atMs` e `result` opcional, cujo resultado tem JSON e timestamp (coordinator ~875.000).

Isto recupera um contrato estrutural e de apresentação estática. Não comprova que cada tool-call seja mostrado para todo perfil/estado, nem que o nosso renderer já o reproduza. A captura real do provider local em 2026-10-19 confirmou `response.completed` com `output[].type="function_call"`; o runtime executou `get_local_time`, enviou `function_call_output` no step seguinte e concluiu com deltas de texto. O CodexRouter permaneceu inalterado. A implementação local agora guarda tool-calls em `toolCalls`, separadas de `messages`, e as apresenta em um outline de atividade recolhível. O evento `assistant-final` é emitido antes de `completed` e persistido pela Main para refletir a resposta final no transcript; teste do runtime local cobre essa emissão. A captura do renderer revelou e permitiu corrigir uma referência de `activeBot` antes da inicialização. Isso corrige a separação de dados e renderização, mas ainda não equivale ao outline de tarefa original. A sequência pela janela continua sem prova em uma sessão limpa do Electron. Calls de histórico legadas em `messages` são filtradas da interface e removidas quando a tarefa recebe novo evento, sem apagar mensagens normais do usuário/assistant.

## O que permanece incógnito

- O Coordinator recebe RPC pelo data port do renderer, valida e encaminha o método autorizado ao endpoint HTTP correspondente `/api/{method}`. O método gateway `sendPrompt` usa `POST {baseUrl}/api/sendPrompt`; a resposta passa pelo decoder do mesmo método. **Permanecem incógnitos** o nome/schema integral do RPC da UI e como o endpoint HTTP despacha para o turno no Sand Host. O detalhe está em [DESKTOP_CONTRACT.md](DESKTOP_CONTRACT.md).
- A origem e a integração de cada chunk de texto seguem incompletas: campos (IDs, sequence/epoch, delta vs snapshot), ordenação, deduplicação e condição terminal do transcript completo.
- O Coordinator converte `channel: transcript` do SSE `/events` e publica pelo data port; **permanece incógnita** a correspondência completa do fluxo de texto comum no renderer (updates otimistas, deltas, snapshots e estados terminais), pois o bundle grande e a cobertura semântica REA parcial impedem alegar pareamento integral.
- Payloads completos de eventos de realtime/voz, política de reconnect/resume e como eventos de voz eventualmente viram linhas do transcript.
- Se todos os dados `seq`, `timestampMs`, `attachments` e `cloudAgentWake` sempre existem ou em quais caminhos.
- Lógica remota de inferência/execução no Sand Host. O coordinator local é um intermediário; leitura local não revela decisões remotas nem autoriza inferir endpoint privado.

A próxima coleta de evidência com maior valor é fazer REA em arquivos/trechos selecionados do renderer e coordinator voltados ao RPC de composer, store do transcript, streams/event dispatcher, e mapear exports/imports exatos entre eles. Para fechar comportamento temporal (ordem e payloads reais), é necessária captura/replay controlado autorizado do app/host; não se deduz isso de screenshots.
