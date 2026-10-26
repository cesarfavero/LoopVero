# `wrapGatewayApiWithServerAgentProxy`

**Fonte primária:** [host-main.cjs:491926–492328](../../../reference/runtime/host-main.cjs#L491926-L492328).

**Componente:** [gateway](../../components/gateway/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Montar uma API que mantém operações locais e sobrescreve aquelas que precisam tratar agentes do servidor.

## Decisão de envio

`sendPrompt` verifica `proxy.isProxiedAgent(agentId)`. Sem elegibilidade, usa API local. Com elegibilidade, preserva um nonce fornecido ou cria UUID e envia `performAction({method: "sendPrompt", args})`.

A função local `settle` interpreta quatro outcomes:

| Outcome | Efeito |
| --- | --- |
| `ok` | Transforma valor pelo callback `onOk`. |
| `refused` | Lança erro de recusa com código do domínio. |
| `unavailable` | Lança indisponibilidade explícita. |
| `unimplemented` | Executa callback de fallback. |

Isso evita interpretar indisponibilidade como permissão para repetir uma ação por outra rota. Para o send BOX deste snapshot, o fallback desemboca em `SandBoxHarnessRetiredError`, conforme [send-pipeline](../../../reference/runtime/host-main.cjs#L740157-L740194).

## Outras responsabilidades

Também trata grupos, interrupção, fresh/rollback, widgets, aprovações, leituras de transcript, estado de leitura e atividade. A leitura remota usa tail e paginação; uma falha de ação e uma falha de leitura não devem ser confundidas.

## Estado e erros

A fábrica captura API/proxy e helpers; o estado durável reside nos serviços chamados. Ativação local após ação e mark-read incluem tratamento de falhas para não derrubar a operação principal. A existência do wrapper prova a conexão de código, não o conteúdo do workflow remoto.
