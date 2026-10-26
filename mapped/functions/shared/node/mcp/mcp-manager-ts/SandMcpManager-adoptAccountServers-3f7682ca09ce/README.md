# `SandMcpManager.adoptAccountServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689251-689311](../../../../../../../reference/runtime/host-main.cjs#L689251-L689311) | `method` | não | `display, generation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689251-689311](../../../../../../../reference/runtime/host-main.cjs#L689251-L689311) | 12 | 0 | 0 | 5 | 0 | 0 |

### host:689251

Chamadas escritas diretamente neste corpo: `accountCredentialFingerprint`, `accountCredentialRowFingerprints`, `mergeUnresolvedAccountServers`, `reportMcpHostEdgeDegraded`, `runtimeConfigFromDisplay`, `this.accountSlots.clearAccountDisplayState`, `this.accountSlots.noteAccountDisplayConfig`, `this.authWatches.clearAllPendingAuthWatchesCancelled`, `this.boxRuntime.invalidateToolsCache`, `this.connectorAuth.clear`, `this.definitionSource.adoptAccountConfig`, `this.definitionSource.clearCache`, `this.definitionSource.clearLastKnownAccountConfig`, `this.disarmSignedInRowsShownWithToken`, `this.displayListing.noteAccountRecovered`, `this.instructionsAndToggles.migrateCustomInstructions`, `this.lastAccountDisplayConfigView`, `this.listingCache.clear`, `this.listingCache.dropBackend`, `this.onAccountScopeApplied`, `this.settingsStore.getActiveAccountScope`, `this.signedInRowsAwaitingAccountRead.clear`, `this.takeSignedInCredentialChanges`.

Alvos de atribuição ou incremento: `this.accountRecoveryAttempted`, `this.accountServersPromise`, `this.adoptedAccountGeneration`, `this.lastAccountCacheScope`, `this.lastAccountCredentialFingerprint`, `this.lastAccountCredentialRows`.

SHA-256 do trecho: `f1675da85a7bfb78b03e0a2c582defd6a7de330e9dc198945747885a01eec4f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
