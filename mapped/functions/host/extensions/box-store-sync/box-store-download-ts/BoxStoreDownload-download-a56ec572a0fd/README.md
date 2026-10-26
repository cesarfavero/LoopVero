# `BoxStoreDownload.download`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477571-478282](../../../../../../../reference/runtime/host-main.cjs#L477571-L478282) | `method` | sim | `targetDir, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477571-478282](../../../../../../../reference/runtime/host-main.cjs#L477571-L478282) | 11 | 3 | 7 | 1 | 0 | 0 |

### host:477571

Chamadas escritas diretamente neste corpo: `.map`, `Promise.all`, `bulkLarge.values`, `bulkSmall.values`, `claimedDestinations.add`, `claimedDestinations.has`, `criticalLarge.values`, `criticalSmall.values`, `destinationPaths.set`, `fileEntries.set`, `forEachBounded`, `group.relPaths.filter`, `group.relPaths.push`, `isBoxStoreManifestFileEntry`, `isBoxStoreManifestSymlinkEntry`, `isCriticalRelPath`, `makeInFlightByteBudget`, `new Map`, `new Set`, `phase.get`, `phase.set`, `recordFailure`, `remainingBulkSmall.push`, `reportTrace`, `resolveRestoreDestination`, `runPhase`, `symlinkEntries.set`, `this.manifestStore.loadManifest`, `this.objectStore`, `this.packPipeline.restoreBulkSmallFromPacks`, `this.resolveStoreId`, `withoutForeignMountEntries`.

Alvos de atribuição ou incremento: `manifest`, `phase`, `this.manifestStore.manifest`.

SHA-256 do trecho: `373696858bc173c3d4eb8f3806b1f9334245a21191fad0c03e3549aac5da0d83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
