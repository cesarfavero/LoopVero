# `SendMessageReminderMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/send-message-reminder-middleware.ts` · [README do módulo](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483183-483207](../../../../../../reference/runtime/sand-eval-runner.cjs#L483183-L483207) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483183-483207](../../../../../../reference/runtime/sand-eval-runner.cjs#L483183-L483207) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:483183

Chamadas escritas diretamente neste corpo: `countToolCallsSinceLastSendMessage`, `createSendMessageReminderMessage`, `isSendMessageReminderMessage`, `logReminderShimOnSettle`, `logger88.info`, `messages.at`, `this.delegationWording`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 do trecho: `7adfd3c3b3c26d1cc051a784abb48f1441540cc799b279411a6e657830f37c01`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
