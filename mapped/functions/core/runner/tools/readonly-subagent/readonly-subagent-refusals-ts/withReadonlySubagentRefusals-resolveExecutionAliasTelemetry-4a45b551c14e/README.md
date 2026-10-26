# `withReadonlySubagentRefusals/resolveExecutionAliasTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-subagent-refusals.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-refusals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582561-582565](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582561-L582565) | `ArrowFunctionExpression` | não | `alias2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582561-582565](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582561-L582565) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:582561 usa retorno implícito de arrow function.

### evaluation:582561

Chamadas escritas diretamente neste corpo: `carrier.resolveExecutionAliasTelemetry`, `droppedIdentifiers.get`, `refused4.has`.

SHA-256 do trecho: `599bd1ea1ccbc814046e52ba5f4db69b87db612b6a5d2d3bf6575ed30791eb85`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
