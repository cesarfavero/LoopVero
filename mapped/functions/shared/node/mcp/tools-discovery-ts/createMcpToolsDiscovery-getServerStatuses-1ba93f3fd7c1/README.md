# `createMcpToolsDiscovery/_getServerStatuses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690797-690803](../../../../../../../reference/runtime/host-main.cjs#L690797-L690803) | `FunctionDeclaration` | sim | `mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690797-690803](../../../../../../../reference/runtime/host-main.cjs#L690797-L690803) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:690797

Chamadas escritas diretamente neste corpo: `_getDiscovered`, `_withRowIdentityStatuses`, `core2.definitionSource.getUserServerConfigs`, `deps.needsGrantRowIdentity`.

SHA-256 do trecho: `24e2452f7631f29f89a430a4c527f8e45a58cfcd0fb2cfe1ea0185108c093298`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
