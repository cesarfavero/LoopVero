# `buildCommunicateTool/resolveToolCallTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725233-725237](../../../../../../../reference/runtime/host-main.cjs#L725233-L725237) | `ArrowFunctionExpression` | não | `rawArgs` |
| [evaluation:480204-480208](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480204-L480208) | `ArrowFunctionExpression` | não | `rawArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725233-725237](../../../../../../../reference/runtime/host-main.cjs#L725233-L725237) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:725233 usa retorno implícito de arrow function.
| [evaluation:480204-480208](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480204-L480208) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:480204 usa retorno implícito de arrow function.

### host:725233

Chamadas escritas diretamente neste corpo: `telemetryAttributes`.

SHA-256 do trecho: `0cf899081b17aaf443ef0923b96247a57bb8288e65c6a06a5b4217361228ada4`.

### evaluation:480204

Chamadas escritas diretamente neste corpo: `telemetryAttributes`.

SHA-256 do trecho: `0cf899081b17aaf443ef0923b96247a57bb8288e65c6a06a5b4217361228ada4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
