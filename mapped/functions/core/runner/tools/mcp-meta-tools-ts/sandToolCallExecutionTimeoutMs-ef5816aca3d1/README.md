# `sandToolCallExecutionTimeoutMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761831-761836](../../../../../../../reference/runtime/host-main.cjs#L761831-L761836) | `FunctionDeclaration` | não | `toolName, isComputerUseSubagent, subagentToolTimeoutMs` |
| [evaluation:554097-554102](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554097-L554102) | `FunctionDeclaration` | não | `toolName, isComputerUseSubagent, subagentToolTimeoutMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761831-761836](../../../../../../../reference/runtime/host-main.cjs#L761831-L761836) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554097-554102](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554097-L554102) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:761831

Chamadas escritas diretamente neste corpo: `isSubagentToolName`, `toolCallExecutionGuardMs`.

SHA-256 do trecho: `5921ceec8fc91d01e30cb02d1efc575181f40a5b09eed8a2aa761c733fd838d2`.

### evaluation:554097

Chamadas escritas diretamente neste corpo: `isSubagentToolName`, `toolCallExecutionGuardMs`.

SHA-256 do trecho: `5921ceec8fc91d01e30cb02d1efc575181f40a5b09eed8a2aa761c733fd838d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
