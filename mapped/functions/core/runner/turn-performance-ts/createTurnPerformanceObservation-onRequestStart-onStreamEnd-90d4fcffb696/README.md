# `createTurnPerformanceObservation/onRequestStart/onStreamEnd`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547668-547689](../../../../../../reference/runtime/sand-eval-runner.cjs#L547668-L547689) | `FunctionExpression` | não | `outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547668-547689](../../../../../../reference/runtime/sand-eval-runner.cjs#L547668-L547689) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:547668

Chamadas escritas diretamente neste corpo: `Math.min`, `String`, `clock.monotonicNow`, `recordPreFirstMessageRequest`, `turnStepInference.histogram`.

Alvos de atribuição ou incremento: `ended`, `lastRequestState`, `occupiedGapMs`, `occupiedGapStartedAt`, `previousRequestEndedAt`.

SHA-256 do trecho: `e723149af209164457511b1844bb2a74bea3444e8846ed04a962d9de5d7cf686`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
