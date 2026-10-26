# `StoreDbCapture.runAgentStoreDbSnapshot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480960-481094](../../../../../../../reference/runtime/host-main.cjs#L480960-L481094) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480960-481094](../../../../../../../reference/runtime/host-main.cjs#L480960-L481094) | 16 | 2 | 10 | 7 | 1 | 4 |

### host:480960

Chamadas escritas diretamente neste corpo: `AGENT_STORE_DB_BASENAMES.some`, `aggregateStoreDbSweepOutcome`, `createStoreDbCaptureTrace`, `errorMessage`, `findSystemErrno`, `finish`, `new Map`, `recordStoreDbCaptureFailure`, `targets.map`, `targets.push`, `targets.some`, `this.bundleCapture.agentHasPendingDbRecovery`, `this.bundleCapture.captureAgentDbBundle`, `this.bundleCapture.isAgentDbBundleCommitted`, `this.bundleCapture.readWalStat`, `this.deps.categories.find`, `this.deps.resolveStoreId`, `this.ensureWriterLock`, `this.fs.stat`, `this.isStopped`, `this.log`, `this.manifestStore.deleteManifestEntry`, `this.manifestStore.loadManifest`, `this.manifestStore.saveManifest`, `this.storeDbCaptures.delete`, `this.transfer.localStat.delete`.

Alvos de atribuição ou incremento: `bundleBlocked`, `bundleCommitted`, `fileStat`, `manifestChanged`, `storeId`, `summary.failures`, `summary.removed`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `e5b99f79dc214307b7aae8c0babc21df6de4bf50b3149288961eaf50b32c4fa5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
