# `createTurnPerformanceObservation/emitInferenceTtft`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547480-547513](../../../../../../reference/runtime/sand-eval-runner.cjs#L547480-L547513) | `ArrowFunctionExpression` | não | `usage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547480-547513](../../../../../../reference/runtime/sand-eval-runner.cjs#L547480-L547513) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547480

Chamadas escritas diretamente neste corpo: `classifyPromptCacheResult`, `onceModelKnown`, `safelyObserve`.

Alvos de atribuição ou incremento: `pendingInferenceTtft`.

SHA-256 do trecho: `53b5eb880ede61809efbc40b70a74925b2c4c24a5644cc1fc12f62b4339133ab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
