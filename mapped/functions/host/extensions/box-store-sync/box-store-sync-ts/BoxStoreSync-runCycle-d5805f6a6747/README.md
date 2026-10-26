# `BoxStoreSync.runCycle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-sync.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:481232-481360](../../../../../../../reference/runtime/host-main.cjs#L481232-L481360) | `method` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481232-481360](../../../../../../../reference/runtime/host-main.cjs#L481232-L481360) | 12 | 1 | 11 | 3 | 1 | 4 |

### host:481232

Chamadas escritas diretamente neste corpo: `.catch`, `aggregateStoreDbSweepOutcome`, `categories.every`, `categories.push`, `categories.some`, `createStoreDbCaptureTrace`, `errorMessage`, `new Set`, `recordStoreDbCaptureFailure`, `removeHydrationHandoffMarker`, `this.buildSummary`, `this.deps.categories.find`, `this.deps.resolveStoreId`, `this.emptyCycle`, `this.ensureWriterLock`, `this.log`, `this.manifestStore.isStoreDbSweepCommitted`, `this.manifestStore.loadManifest`, `this.manifestStore.saveManifest`, `this.now`, `this.report`, `this.reportStoreDbSweepCapture`, `this.storeDbCapture.pruneMissingAgentStoreDbs`, `this.storeDbCapture.runAgentStoreDbsSweep`, `this.storeDbCapture.verifyAgentDbsComplete`, `this.transfer.syncCategory`, `this.transfer.syncPacks`.

Alvos de atribuição ou incremento: `capturedThisSweep`, `isStoreDbCaptureReported`, `storeDbCapture`, `storeDbComplete`, `sweep`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `df78cd65c9e8c4f1cd4890c3a294f2271b342936611236baf79ed97abdf3dab3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
