# `BoxStorePackPipeline.syncPacks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-pack-pipeline.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-pipeline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:479025-479199](../../../../../../../reference/runtime/host-main.cjs#L479025-L479199) | `method` | sim | `storeId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479025-479199](../../../../../../../reference/runtime/host-main.cjs#L479025-L479199) | 20 | 3 | 13 | 7 | 1 | 4 |

### host:479025

Chamadas escritas diretamente neste corpo: `.filter`, `.toString`, `Buffer.from`, `JSON.stringify`, `Math.max`, `buildPackFile`, `built.members.reduce`, `builtPacks.flatMap`, `builtPacks.push`, `eligible.has`, `eligible.set`, `entryOf`, `errorMessage`, `info2.isFile`, `isBoxStoreManifestFileEntry`, `live.set`, `localBySha.set`, `merged.some`, `new Map`, `new SandBoxStoreSyncError`, `new Set`, `new Uint8Array`, `nextIndex2.packs.map`, `parsePackIndex`, `parsePackRetired`, `plan.retiredPackIds.filter`, `planPackMaintenance`, `planned.flatMap`, `serializePackRetired`, `store.delete`, `store.get`, `store.put`, `store.putFromFile`, `this.discardTemp`, `this.log`, `this.manifestStore.loadManifest`, `this.objectStore`, `this.openSweptPackTmpDir`, `this.resolveLocalPathForRelPath`, `this.sha256File`, `tmpDir.handle.close`, `yieldToFlush`.

Alvos de atribuição ou incremento: `existing`, `summary.bytesUploaded`, `summary.failures`, `summary.filesScanned`, `summary.filesUploaded`, `summary.removed`, `summary.skippedUnchanged`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `127078b7692f731cc1f3140041ebda572c5ce3f64e3447139f0c2b279f00cd6e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
