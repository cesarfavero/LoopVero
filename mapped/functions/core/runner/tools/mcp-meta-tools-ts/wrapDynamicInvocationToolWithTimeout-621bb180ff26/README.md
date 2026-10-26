# `wrapDynamicInvocationToolWithTimeout`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554197-554285](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554197-L554285) | `FunctionDeclaration` | não | `{   tool,   dynamicToolRegistry,   isComputerUseSubagent,   subagentToolTimeoutMs,   registerPauseCancel,   observeDynamicToolCall,   unreachableToolError,   driveTranslatorToolTags }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554197-554285](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554197-L554285) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554197

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `483d391098e3c4aef3503694026f1babddac9b4b5f97753b1d4cc2ed0255660b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
