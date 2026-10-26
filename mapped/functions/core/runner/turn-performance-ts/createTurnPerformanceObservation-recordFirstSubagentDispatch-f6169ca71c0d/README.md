# `createTurnPerformanceObservation/recordFirstSubagentDispatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547455-547479](../../../../../../reference/runtime/sand-eval-runner.cjs#L547455-L547479) | `ArrowFunctionExpression` | não | `harness2, subagent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547455-547479](../../../../../../reference/runtime/sand-eval-runner.cjs#L547455-L547479) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:547455

Chamadas escritas diretamente neste corpo: `classifyRequestStep`, `clock.monotonicNow`, `onceModelKnown`.

SHA-256 do trecho: `b5bbd8089e36e03dcec16f90d6cec31dd44f637cfc825aa0d60554dc8da4fbc9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
