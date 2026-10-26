# `StoreDbBundleCapture.captureAgentDbBundleUnlocked`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480009-480071](../../../../../../../reference/runtime/host-main.cjs#L480009-L480071) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480009-480071](../../../../../../../reference/runtime/host-main.cjs#L480009-L480071) | 9 | 3 | 4 | 5 | 0 | 1 |

### host:480009

Chamadas escritas diretamente neste corpo: `args.manifest.get`, `errorMessage`, `initialIdentity.includes`, `isBoxStoreManifestFileEntry`, `new Map`, `recordStoreDbCaptureFailure`, `stagedManifest.get`, `tallyFileOutcome`, `this.agentDbBundleIdentity`, `this.captureAgentSqliteDb`, `this.log`, `this.manifestStore.setManifestEntry`, `this.manifestStore.uncommittedStoreDbEntries.set`.

Alvos de atribuição ou incremento: `args.captureTrace.blobUploadDurationMs`, `args.captureTrace.captureDurationMs`, `args.summary.failures`, `args.summary.filesScanned`, `complete`.

SHA-256 do trecho: `3e882e795ba958b37842ecd5e2026ad5bcacedac0c3e99d5967e56d407384298`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
