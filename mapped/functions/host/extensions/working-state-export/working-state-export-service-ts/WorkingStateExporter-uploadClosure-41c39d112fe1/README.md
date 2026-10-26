# `WorkingStateExporter.uploadClosure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-export-service.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785617-785746](../../../../../../../reference/runtime/host-main.cjs#L785617-L785746) | `method` | sim | `agentId, limits, progress, includeRoot = true, control` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785617-785746](../../../../../../../reference/runtime/host-main.cjs#L785617-L785746) | 23 | 2 | 6 | 18 | 0 | 0 |

### host:785617

Chamadas escritas diretamente neste corpo: `.map`, `Math.max`, `Promise.all`, `boundedConcurrency`, `chunk.some`, `chunkIds.slice`, `durable.has`, `missing.slice`, `new Set`, `skipped`, `skippedAfterSnapshot`, `this.deps.isStoreEnabled`, `this.deps.isTemporalAgent`, `this.deps.isTurnInFlight`, `this.deps.now`, `this.deps.readClientStateSeed`, `this.deps.readServerId`, `this.durableBlobHexIdsOrNoneWhenUnlisted`, `this.uploadedHexIdsByAgent.get`, `this.uploadedHexIdsByAgent.set`, `uploaded.add`, `uploaded.has`, `waitForWorkingStateOperation`, `walk3.reachableHexIds.filter`.

Alvos de atribuição ou incremento: `progress.closureBlobs`, `progress.closureBytes`, `progress.readDurationMs`, `progress.rootBytes`, `progress.snapshotDurationMs`, `progress.uploadDurationMs`, `progress.uploadedBlobs`, `progress.uploadedBytes`, `putStart`, `start`, `uploaded`.

SHA-256 do trecho: `3a916d696f7e84c64bc18b4b7b7f397d2f553c45f578638c76cc43bb3dd50c92`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
