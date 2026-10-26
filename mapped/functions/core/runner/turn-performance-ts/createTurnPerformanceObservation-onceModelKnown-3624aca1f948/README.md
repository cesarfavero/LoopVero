# `createTurnPerformanceObservation/onceModelKnown`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547443-547449](../../../../../../reference/runtime/sand-eval-runner.cjs#L547443-L547449) | `ArrowFunctionExpression` | não | `emit` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547443-547449](../../../../../../reference/runtime/sand-eval-runner.cjs#L547443-L547449) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547443

Chamadas escritas diretamente neste corpo: `awaitingModel.push`, `safelyObserve`.

SHA-256 do trecho: `c838467777a9d6e169f94c24314490f52774bb1aa27e30ac914ff208809197ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
