# `createTurnPerformanceObservation/onRequestStart/onUsage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547690-547756](../../../../../../reference/runtime/sand-eval-runner.cjs#L547690-L547756) | `FunctionExpression` | não | `usage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547690-547756](../../../../../../reference/runtime/sand-eval-runner.cjs#L547690-L547756) | 7 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547690

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `String`, `classifyPromptCacheResult`, `classifyPromptSizeBucket`, `composeTiming`, `consumedOrOwnPrewarmTriggerTag`, `emitComposeTiming`, `emitInferenceTtft`, `firstMessageTags`, `maybeEmitTtfaTrace`, `prewarmArmTag`, `prewarmGateTag`, `prewarmRace`, `prewarmStateTag`, `turnPrewarmLeadTime.histogram`, `turnPromptCache.increment`, `turnPromptCachedFraction.histogram`, `turnPromptCachedTokens.increment`, `turnPromptInputTokens.increment`, `turnUncachedInputTokens.histogram`.

Alvos de atribuição ou incremento: `firstCallUsage`, `requestUsage`.

SHA-256 do trecho: `f7cfa845aca0d8cb366f31766d0bdf1d4796b185efb2bcc5de095d10f3463117`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
