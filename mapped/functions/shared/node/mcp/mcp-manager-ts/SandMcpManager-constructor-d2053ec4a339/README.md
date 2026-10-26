# `SandMcpManager.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689145-689230](../../../../../../../reference/runtime/host-main.cjs#L689145-L689230) | `method` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689145-689230](../../../../../../../reference/runtime/host-main.cjs#L689145-L689230) | 7 | 0 | 0 | 0 | 0 | 0 |

### host:689145

Chamadas escritas diretamente neste corpo: `createDeadlinePolicy`, `new SandMcpAccountSlotLifecycle`, `new SandMcpAuthWatchLifecycle`, `new SandMcpCatalogFlow`, `new SandMcpConnectorAuthReader`, `new SandMcpDefinitionSource`, `new SandMcpDisplayListing`, `new SandMcpInstructionsAndToggles`, `new SandMcpListingCache`, `new SandMcpListingSummaries`.

Alvos de atribuição ou incremento: `this.accountDisplayConfigProvider`, `this.accountMcpWriter`, `this.accountServersProvider`, `this.accountSlots`, `this.authWatches`, `this.backendMcpExec`, `this.boxRuntime`, `this.catalogFlow`, `this.clock`, `this.connectorAuth`, `this.definitionSource`, `this.displayListing`, `this.effectivePluginsProvider`, `this.grokBotAgentServersProvider`, `this.instructionsAndToggles`, `this.listingCache`, `this.listingObserver`, `this.onAccountScopeApplied`, `this.onDiscoveryFailed`, `this.settingsStore`, `this.statusListingDeadline`, `this.summaries`.

SHA-256 do trecho: `03b8b8339116b677f20ba1cf276c0e2e70b3325650c1acc7b0dab8824ad78217`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
