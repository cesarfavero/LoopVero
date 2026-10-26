# `fetchMarketplaceMcpPlugins/add2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-marketplace.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:404724-404731](../../../../../../../reference/runtime/host-main.cjs#L404724-L404731) | `ArrowFunctionExpression` | não | `plugin, fromPrivateMarketplace = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404724-404731](../../../../../../../reference/runtime/host-main.cjs#L404724-L404731) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:404724

Chamadas escritas diretamente neste corpo: `byPluginId.set`, `toSandMarketplacePlugin`.

SHA-256 do trecho: `08885d7fb512a5937f09456a6307ddcb8830082299546b9074d21d66371fe383`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
