# `StoreDbCapture.runAgentStoreDbsSweep`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480734-480870](../../../../../../../reference/runtime/host-main.cjs#L480734-L480870) | `method` | sim | `storeId, skipLiveHandles` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480734-480870](../../../../../../../reference/runtime/host-main.cjs#L480734-L480870) | 10 | 2 | 8 | 3 | 0 | 2 |

### host:480734

Chamadas escritas diretamente neste corpo: `.sort`, `bundles.filter`, `bundles.push`, `createStoreDbCaptureTrace`, `entry.isDirectory`, `errorMessage`, `findSystemErrno`, `forEachBounded`, `new Set`, `parseAgentId`, `recordStoreDbCaptureFailure`, `targets.find`, `targets.push`, `targets.reduce`, `this.bundleCapture.agentHasPendingDbRecovery`, `this.bundleCapture.readWalStat`, `this.deps.categories.find`, `this.fs.stat`, `this.hasLiveHandle`, `this.log`, `this.manifestStore.loadManifest`, `this.verifyAgentDbsComplete`.

Alvos de atribuição ou incremento: `bundleBlocked`, `fileStat`, `roster`, `summary.failures`.

SHA-256 do trecho: `28c1e4f4dd6efebd6377d9260e0979ced505d4c310bdf7d3dee6adb33d332881`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
