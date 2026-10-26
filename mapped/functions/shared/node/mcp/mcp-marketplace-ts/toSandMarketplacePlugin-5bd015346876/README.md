# `toSandMarketplacePlugin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-marketplace.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:404615-404663](../../../../../../../reference/runtime/host-main.cjs#L404615-L404663) | `FunctionDeclaration` | não | `plugin` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404615-404663](../../../../../../../reference/runtime/host-main.cjs#L404615-L404663) | 8 | 0 | 0 | 2 | 0 | 0 |

### host:404615

Chamadas escritas diretamente neste corpo: `isPrivateMarketplace`, `nonEmpty`, `plugin.curatedCategoryKeys.find`, `plugin.id.toString`, `plugin.mcpServers.flatMap`, `plugin.mcpServers.map`, `plugin.skills.flatMap`, `plugin.variables.toJson`, `pluginVariablesSchemaToFields`, `privateMarketplaceSummary`, `publisherSummary`, `rememberPluginLogoUrl`, `shouldListPlugin`, `toCategoryLabel`.

SHA-256 do trecho: `1275b1c6557d16c1fdebda78e359718703b96f06988ec99505afa65d316eedd0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
