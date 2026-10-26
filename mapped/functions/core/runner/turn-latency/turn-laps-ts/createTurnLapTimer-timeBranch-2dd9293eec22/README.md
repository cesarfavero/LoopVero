# `createTurnLapTimer/timeBranch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-latency/turn-laps.ts` · [README do módulo](../../../../../../modules/core/runner/turn-latency/turn-laps-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591205-591221](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591205-L591221) | `FunctionExpression` | não | `branch, work` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591205-591221](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591205-L591221) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:591205

Chamadas escritas diretamente neste corpo: `.then`, `Promise.resolve`, `clock.monotonicNow`.

SHA-256 do trecho: `570b2cb0688016a93a1a7a18f3d726a7335b621fcf5f43baa7feaf12350ab231`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
