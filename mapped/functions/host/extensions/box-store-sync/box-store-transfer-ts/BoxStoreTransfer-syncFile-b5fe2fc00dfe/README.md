# `BoxStoreTransfer.syncFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-transfer.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:479450-479536](../../../../../../../reference/runtime/host-main.cjs#L479450-L479536) | `method` | sim | `storeId, manifest, relPath, absPath, fileStat, bypassStatCache = false, modeOverride` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479450-479536](../../../../../../../reference/runtime/host-main.cjs#L479450-L479536) | 7 | 0 | 5 | 8 | 1 | 2 |

### host:479450

Chamadas escritas diretamente neste corpo: `.put`, `classifyFileFailure`, `errorMessage`, `handle.close`, `handle.readFile`, `handle.stat`, `isBoxStoreManifestFileEntry`, `isPermissionDenied`, `isSnapshotNodeRace`, `live.isFile`, `manifest.get`, `new SandBoxStoreSyncError`, `sha256Hex`, `this.fs.open`, `this.localStat.get`, `this.localStat.set`, `this.log`, `this.manifestStore.setManifestEntry`, `this.objectStore`, `this.skipInaccessibleEnabled`, `this.syncLargeFile`.

Alvos de atribuição ou incremento: `bytes`, `effectiveStat`, `mode`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `921c9bc40949d39038b5c9ed8bf95c58d16d75690c4300fd150e19e31486ebef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
