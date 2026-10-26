# `createRunnerPendingSummaryStore/trackPendingGeneration`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/sessions/runner-pending-summary-store.ts` · [README do módulo](../../../../../../modules/core/runner/sessions/runner-pending-summary-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535159-535168](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535159-L535168) | `ArrowFunctionExpression` | não | `generation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535159-535168](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535159-L535168) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:535159

Chamadas escritas diretamente neste corpo: `generation.promiseInfo.promise.then`.

Alvos de atribuição ou incremento: `pendingGeneration`.

SHA-256 do trecho: `0df1a9cb44a5d87481ab49e1c954dc68a6ebff778ca6261b93780d5974707eeb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
