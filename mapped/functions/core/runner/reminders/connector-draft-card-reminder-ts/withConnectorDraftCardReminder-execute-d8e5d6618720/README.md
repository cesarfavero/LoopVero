# `withConnectorDraftCardReminder/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/connector-draft-card-reminder.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/connector-draft-card-reminder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585552-585572](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585552-L585572) | `FunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585552-585572](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585552-L585572) | 5 | 0 | 1 | 4 | 0 | 0 |

### evaluation:585552

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `CARD_MAILBOXES.get`, `boundedConnectorTag`, `connectorDraftCardReminder`, `connectorDrafts.increment`, `deps.connectors`, `deps.draftCardAvailable`, `deps.resolveServerHost`, `emailConnectorOf`, `executor.execute`, `findConnectorServedOn`, `isCreateDraft`, `restMcpProviderOf`, `withReminder`.

SHA-256 do trecho: `eda999c32764a6166a715ba2ed48c71cc3b6cc893439298def73319614db65e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
