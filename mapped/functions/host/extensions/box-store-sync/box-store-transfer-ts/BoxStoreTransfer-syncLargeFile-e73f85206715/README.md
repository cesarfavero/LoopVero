# `BoxStoreTransfer.syncLargeFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-transfer.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:479537-479609](../../../../../../../reference/runtime/host-main.cjs#L479537-L479609) | `method` | sim | `storeId, manifest, relPath, absPath, expectedSizeBytes, expectedMode, modeOverride` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479537-479609](../../../../../../../reference/runtime/host-main.cjs#L479537-L479609) | 9 | 0 | 6 | 7 | 0 | 2 |

### host:479537

Chamadas escritas diretamente neste corpo: `.putFromFile`, `.toString`, `Promise.allSettled`, `classifyFileFailure`, `copyFileHashing`, `errorMessage`, `isBoxStoreManifestFileEntry`, `isPermissionDenied`, `isSnapshotNodeRace`, `manifest.get`, `this.discardTemp`, `this.hasDiskSpaceForLargeObject`, `this.localStat.set`, `this.log`, `this.manifestStore.setManifestEntry`, `this.matchExistingLargeFile`, `this.objectStore`, `this.skipInaccessibleEnabled`.

Alvos de atribuição ou incremento: `mode`, `mtimeMs`, `sha`, `size`.

SHA-256 do trecho: `6e5eeaef2e16473a09b6028dd439abb978697aed73e2da9a6df25072b8931db1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
