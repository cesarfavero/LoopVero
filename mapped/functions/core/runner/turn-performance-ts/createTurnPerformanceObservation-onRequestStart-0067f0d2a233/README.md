# `createTurnPerformanceObservation/onRequestStart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547583-547758](../../../../../../reference/runtime/sand-eval-runner.cjs#L547583-L547758) | `FunctionExpression` | não | `requestCtx, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547583-547758](../../../../../../reference/runtime/sand-eval-runner.cjs#L547583-L547758) | 11 | 0 | 0 | 2 | 0 | 0 |

### evaluation:547583

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `String`, `classifyThinkTimeBucket`, `clock.monotonicNow`, `hashPromptPrefix`, `onceModelKnown`, `safelyObserve`, `sha256HexOfText`, `turnActivityTtfi.histogram`, `turnStepGap.histogram`, `turnStepOverhead.histogram`, `turnTtfi.histogram`, `turnUserThinkTime.histogram`.

Alvos de atribuição ou incremento: `firstRequestAt`, `firstRequestStarted`, `lastRequestState`, `metricContext`, `nextRequestIsRetry`, `occupiedGapMs`, `occupiedGapStartedAt`, `previousRequestEndedAt`, `requestPrefix`, `requestPrefixHash`, `stepsStarted`, `suppressNextGap`, `thinkTimeBucket`.

SHA-256 do trecho: `863491c74a2cd7b4ae3f59f9239b67dc6bf918d9dfe8b9bb80c7ca595cfa87d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
