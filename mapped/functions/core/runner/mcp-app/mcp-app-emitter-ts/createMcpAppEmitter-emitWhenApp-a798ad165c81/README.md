# `createMcpAppEmitter/emitWhenApp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/mcp-app/mcp-app-emitter.ts` · [README do módulo](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585454-585490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585454-L585490) | `FunctionDeclaration` | sim | `callId, providerIdentifier, toolName, mcpCall` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585454-585490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585454-L585490) | 10 | 0 | 2 | 2 | 0 | 0 |

### evaluation:585454

Chamadas escritas diretamente neste corpo: `allowedAppResourceUri`, `capturePage`, `deps.emitUpdate`, `deps.mcpConfigJson`, `deps.resolveServerName`, `encodeBounded`, `lookUpTool`, `mcpAppToolResultPayload`, `observedCallIds.delete`, `toolArgumentsOf`.

SHA-256 do trecho: `d42bec40795918d558c40125b7b19ea1b7da46e4cbc40aa4041979e0d041ce2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
