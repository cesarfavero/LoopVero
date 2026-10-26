# `readonlySubagentToolRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-subagent-refusals.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-refusals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582544-582551](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582544-L582551) | `FunctionDeclaration` | não | `toolName, listedNames` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582544-582551](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582544-L582551) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582544

Chamadas escritas diretamente neste corpo: `.filter`, `fallbacks.join`, `listedNames.has`.

SHA-256 do trecho: `eb61cc57c6b4debeaffd180c064c24d075883384c7ed03fe489e12c973ee408d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
