# `fetchEffectiveUserPlugins`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690518-690549](../../../../../../../reference/runtime/host-main.cjs#L690518-L690549) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690518-690549](../../../../../../../reference/runtime/host-main.cjs#L690518-L690549) | 10 | 1 | 1 | 1 | 0 | 0 |

### host:690518

Chamadas escritas diretamente neste corpo: `BigInt`, `accountMcpBackendClient`, `client.getEffectiveUserPlugins`, `new GetEffectiveUserPluginsRequest`, `plugin.id.toString`, `plugin.mcpServers.map`, `plugins.push`, `toEffectivePluginInstallMode`.

SHA-256 do trecho: `70c3d9fffcb120e09e92ccf58891a822be65b8dbb28d0d33bf086f22677a6259`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
