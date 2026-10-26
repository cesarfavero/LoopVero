# `createTurnPerformanceObservation/maybeEmitTtfaTrace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547514-547581](../../../../../../reference/runtime/sand-eval-runner.cjs#L547514-L547581) | `ArrowFunctionExpression` | não | `force = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547514-547581](../../../../../../reference/runtime/sand-eval-runner.cjs#L547514-L547581) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:547514

Chamadas escritas diretamente neste corpo: `safelyObserve`.

Alvos de atribuição ou incremento: `ttfaTraceEmitted`.

SHA-256 do trecho: `9f35d9fd5b8d3acd4b5206ee077a33234542ceb96b4e851ba37b10acb41ae97b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
