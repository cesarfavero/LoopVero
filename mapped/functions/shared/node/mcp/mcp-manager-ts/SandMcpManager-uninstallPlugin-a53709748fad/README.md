# `SandMcpManager.uninstallPlugin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689804-689819](../../../../../../../reference/runtime/host-main.cjs#L689804-L689819) | `method` | sim | `rawPluginId, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689804-689819](../../../../../../../reference/runtime/host-main.cjs#L689804-L689819) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:689804

Chamadas escritas diretamente neste corpo: `reportDeferredListingFailure`, `this.accountSlots.lastListedStateView`, `this.inPluginWriteOrder`, `this.settingsStore.getActiveAccountScope`, `this.settlePluginRemoval`, `validateMarketplacePluginId`, `withoutUserPluginRows`.

SHA-256 do trecho: `79c99d1e1cb0c0ceb8ceae4e657d13f7657b4f5d8c04331fd711e4849d59ce04`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
