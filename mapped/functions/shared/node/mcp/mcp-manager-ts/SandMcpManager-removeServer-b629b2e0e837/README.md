# `SandMcpManager.removeServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689745-689789](../../../../../../../reference/runtime/host-main.cjs#L689745-L689789) | `method` | sim | `rawServerId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689745-689789](../../../../../../../reference/runtime/host-main.cjs#L689745-L689789) | 6 | 1 | 8 | 4 | 1 | 0 |

### host:689745

Chamadas escritas diretamente neste corpo: `.find`, `.servers.filter`, `Object.entries`, `isGrokDisplayServerId`, `new SandMcpConfigError`, `rawServerId.trim`, `this.authWatches.clearPendingAuthWatchesForServer`, `this.classifyRemoveOutcome`, `this.instructionsAndToggles.deleteDisabledToolsForServer`, `this.lastAccountDisplayConfigView`, `this.listServers`, `this.reloadServers`, `this.requireAccountWriter`, `this.resolveDisplayServer`, `this.settingsStore.deleteMcpCustomInstructionByServerId`, `this.settingsStore.getActiveAccountScope`, `this.uninstallPluginRows`, `validateMcpServerId`, `writer.getConfigForEdit`, `writer.setConfig`.

Alvos de atribuição ou incremento: `nextIds[computed]`, `nextServers[computed]`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `ba2ee277039a83de3141cd7e11b93648285a4c6092a4103c4a5a235e807939a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
