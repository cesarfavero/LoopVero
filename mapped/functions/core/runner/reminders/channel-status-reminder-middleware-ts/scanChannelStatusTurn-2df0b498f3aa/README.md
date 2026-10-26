# `scanChannelStatusTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:480374-480429](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480374-L480429) | `FunctionDeclaration` | não | `spec, messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480374-480429](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480374-L480429) | 8 | 2 | 0 | 1 | 0 | 0 |

### evaluation:480374

Chamadas escritas diretamente neste corpo: `calls.findLast`, `channelStatusReminderKindOf`, `isInjectedReminderMessage`, `isSandUserDeliveryToolName`, `message.content.flatMap`, `spec.delegation.toolNames.has`, `spec.statusOf`.

Alvos de atribuição ou incremento: `delegatedSinceStatus`, `delegates`, `delegationCallsSinceStatus`, `delegationRemindedSinceStatus`, `index`, `latestBatchDelegates`, `remindedSinceStatus`, `status`, `workCallsSinceStatus`.

SHA-256 do trecho: `c82939801c52c425801f3c592a097d8b4612b4a55597904df384424f51f3547e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
