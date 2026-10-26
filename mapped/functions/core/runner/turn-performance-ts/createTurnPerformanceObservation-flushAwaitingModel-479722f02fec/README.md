# `createTurnPerformanceObservation/flushAwaitingModel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547450-547454](../../../../../../reference/runtime/sand-eval-runner.cjs#L547450-L547454) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547450-547454](../../../../../../reference/runtime/sand-eval-runner.cjs#L547450-L547454) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:547450

Chamadas escritas diretamente neste corpo: `awaitingModel.splice`, `safelyObserve`.

SHA-256 do trecho: `f41f5d8a7609567ffdf501bad77318b9fdb5ae36b42d0def50d19790d3c20182`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
