# `withReadonlySubagentRefusals/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-subagent-refusals.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-refusals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582566-582573](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582566-L582573) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, argsStream, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582566-582573](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582566-L582573) | 1 | 0 | 1 | 1 | 1 | 0 |

### evaluation:582566

Chamadas escritas diretamente neste corpo: `carrier.execute`, `new ToolCallUnexpectedEnvironmentError`, `readonlySubagentRefusals.increment`, `readonlySubagentToolRefusal`, `refused4.has`.

Alvos de lançamento explícito: `ToolCallUnexpectedEnvironmentError`.

SHA-256 do trecho: `95ed13f4f810e4db56425471693a29aedcfd889adc61ba50ea79c1631fc0f2c0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
