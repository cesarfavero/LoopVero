# `createTurnLapTimer/lap`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-latency/turn-laps.ts` · [README do módulo](../../../../../../modules/core/runner/turn-latency/turn-laps-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591199-591204](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591199-L591204) | `FunctionExpression` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591199-591204](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591199-L591204) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:591199

Chamadas escritas diretamente neste corpo: `Math.max`, `clock.monotonicNow`, `laps.push`.

Alvos de atribuição ou incremento: `previousAt`.

SHA-256 do trecho: `ed4d36ec5da2733ed07b8918f7f3097b995316575f6084bb7456974938f36d27`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
