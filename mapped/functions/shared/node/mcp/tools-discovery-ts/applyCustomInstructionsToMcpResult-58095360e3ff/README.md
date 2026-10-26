# `applyCustomInstructionsToMcpResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690730-690753](../../../../../../../reference/runtime/host-main.cjs#L690730-L690753) | `FunctionDeclaration` | não | `result, serverName, rawInstructions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690730-690753](../../../../../../../reference/runtime/host-main.cjs#L690730-L690753) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:690730

Chamadas escritas diretamente neste corpo: `formatMcpCustomInstructionToolNote`, `new McpResult`, `new McpSuccess`, `new McpTextContent`, `new McpToolResultContentItem`, `rawInstructions.trim`.

SHA-256 do trecho: `89a43eae9fcd678a8b7809604433d16a0c4c84924cdee9c7e5c6dc572a492724`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
