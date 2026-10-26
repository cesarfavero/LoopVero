# `boundedMcpToolName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-tool-call-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:479240-479246](../../../../../../reference/runtime/sand-eval-runner.cjs#L479240-L479246) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479240-479246](../../../../../../reference/runtime/sand-eval-runner.cjs#L479240-L479246) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:479240

Chamadas escritas diretamente neste corpo: `.has`, `ALLOWLISTED_MCP_TOOLS.has`, `VENDOR_CONNECTOR_TOOLS.get`, `isFirstPartyConnectorTool`.

SHA-256 do trecho: `e9aaca63aa64212352998614266555a7c5979af98c8741c8f397f8848cad2364`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
