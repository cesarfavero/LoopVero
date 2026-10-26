# `createMcpToolsDiscovery/_executeToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691480-691493](../../../../../../../reference/runtime/host-main.cjs#L691480-L691493) | `FunctionDeclaration` | não | `call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691480-691493](../../../../../../../reference/runtime/host-main.cjs#L691480-L691493) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:691480

Chamadas escritas diretamente neste corpo: `.map`, `Object.entries`, `Object.fromEntries`, `_executeTool`, `createContext`, `new McpArgs`.

SHA-256 do trecho: `d0a7991c7f84cb29741fcdbb5eb6aa637edc472dc673cdedd4dddaa0212d078c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
