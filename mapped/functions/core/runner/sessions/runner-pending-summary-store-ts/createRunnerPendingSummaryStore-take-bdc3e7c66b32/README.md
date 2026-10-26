# `createRunnerPendingSummaryStore/take`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/sessions/runner-pending-summary-store.ts` · [README do módulo](../../../../../../modules/core/runner/sessions/runner-pending-summary-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535183-535191](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535183-L535191) | `ArrowFunctionExpression` | sim | `_ctx, conversationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535183-535191](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535183-L535191) | 2 | 0 | 1 | 2 | 0 | 0 |

### evaluation:535183

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `pendingSummary`, `pendingWrite`.

SHA-256 do trecho: `57f77a4e0a5613bb6b994a50ea640eef056fb97cbb251a54876d1528828204c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
