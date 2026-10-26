# `StoreDbBundleCapture.captureAgentSqliteDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480113-480203](../../../../../../../reference/runtime/host-main.cjs#L480113-L480203) | `method` | sim | `storeId, manifest, relPath, absPath, fileStat` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480113-480203](../../../../../../../reference/runtime/host-main.cjs#L480113-L480203) | 6 | 0 | 7 | 3 | 0 | 1 |

### host:480113

Chamadas escritas diretamente neste corpo: `.catch`, `.toString`, `Math.max`, `errorMessage`, `isBoxStoreManifestFileEntry`, `manifest.get`, `this.agentDbWriteGeneration`, `this.elapsedDurationMs`, `this.isAgentDbDurablyCaptured`, `this.log`, `this.now`, `this.readWalStat`, `this.snapshotUpload.discardSnapshotTemp`, `this.snapshotUpload.uploadAgentDbSnapshot`, `this.storeDbCaptures.delete`, `this.storeDbCaptures.get`, `this.storeDbCaptures.set`, `this.transfer.hasDiskSpaceForLargeObject`, `this.vacuumInto`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `c9154ddde59d16ea9172c95ecaa687310be0299ee46d654e40ab2cbbb18b19f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
