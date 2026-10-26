# `createDeleteOwnSlackMessageTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/slack/sand-slack-message-delete-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/slack/sand-slack-message-delete-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768246-768252](../../../../../../../../reference/runtime/host-main.cjs#L768246-L768252) | `ArrowFunctionExpression` | sim | `_ctx, args, slack` |
| [evaluation:563762-563768](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563762-L563768) | `ArrowFunctionExpression` | sim | `_ctx, args, slack` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768246-768252](../../../../../../../../reference/runtime/host-main.cjs#L768246-L768252) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563762-563768](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563762-L563768) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:768246

Chamadas escritas diretamente neste corpo: `args.channel.trim`, `args.message_ts.trim`, `slack.deleteOwnMessage`.

SHA-256 do trecho: `f742e365b760393ddaa8008af8dc68d32a27d5bcb76a5f567049b5c7032b9f21`.

### evaluation:563762

Chamadas escritas diretamente neste corpo: `args.channel.trim`, `args.message_ts.trim`, `slack.deleteOwnMessage`.

SHA-256 do trecho: `f742e365b760393ddaa8008af8dc68d32a27d5bcb76a5f567049b5c7032b9f21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
