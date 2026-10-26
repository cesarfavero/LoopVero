# `SandMcpManager.writePluginUninstall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689890-689932](../../../../../../../reference/runtime/host-main.cjs#L689890-L689932) | `method` | sim | `pluginId, requiredAccountScope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689890-689932](../../../../../../../reference/runtime/host-main.cjs#L689890-L689932) | 2 | 1 | 2 | 1 | 2 | 0 |

### host:689890

Chamadas escritas diretamente neste corpo: `.filter`, `.some`, `BigInt`, `Promise.all`, `attributedRows.some`, `display.servers.filter`, `new SandMcpConfigError`, `pluginRows.filter`, `pluginRows.some`, `this.authWatches.clearPendingAuthWatchesForServer`, `this.displayForPluginUninstall`, `this.instructionsAndToggles.deleteDisabledToolsForServer`, `this.readReplicaEffectivePlugins`, `this.requireAccountWriter`, `this.settingsStore.deleteMcpCustomInstructionByServerId`, `writer.uninstallPlugin`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `9b60d93ee3143519ecde5659a070706d96e34f22b9f950030be4a68452e01a21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
