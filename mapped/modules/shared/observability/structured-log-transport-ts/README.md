# `shared/observability/structured-log-transport.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../guide/architecture/README.md) · [Índice geral](../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:451724-451728](../../../../../reference/runtime/host-main.cjs#L451724-L451728) |
| host | [host:452644-452646](../../../../../reference/runtime/host-main.cjs#L452644-L452646) |
| host | [host:452902-453384](../../../../../reference/runtime/host-main.cjs#L452902-L453384) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `StructuredLogTransport.buildLogEntry` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-buildLogEntry-32c7a61790bb/README.md) |
| `StructuredLogTransport.captureCheckpoint` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-captureCheckpoint-30880016618b/README.md) |
| `StructuredLogTransport.capturePending` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-capturePending-91b077e0edf8/README.md) |
| `StructuredLogTransport.clearPending` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-clearPending-1a52889df231/README.md) |
| `StructuredLogTransport.constructor` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-constructor-16a878e0286b/README.md) |
| `StructuredLogTransport.dispose` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-dispose-10a57fe10a22/README.md) |
| `StructuredLogTransport.drain` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-drain-5383018e237d/README.md) |
| `StructuredLogTransport.drainEager` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-drainEager-d389325c4212/README.md) |
| `StructuredLogTransport.dropBufferOverflow` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-dropBufferOverflow-aacfff72dc1e/README.md) |
| `StructuredLogTransport.enqueue` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-enqueue-796a82750009/README.md) |
| `StructuredLogTransport.enqueueAt` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-enqueueAt-0e3826e04614/README.md) |
| `StructuredLogTransport.ensurePolling` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-ensurePolling-042731cc1970/README.md) |
| `StructuredLogTransport.expireBufferedLogs` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-expireBufferedLogs-91ae5e9b0801/README.md) |
| `StructuredLogTransport.finishFlush` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-finishFlush-cd160b74a3f0/README.md) |
| `StructuredLogTransport.flush` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-flush-d5c9b2c841fd/README.md) |
| `StructuredLogTransport.flushIfDue` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-flushIfDue-93ab8921429a/README.md) |
| `StructuredLogTransport.flushNow` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-flushNow-1ecdba329eb1/README.md) |
| `StructuredLogTransport.flushOnce` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-flushOnce-6973eecd36b5/README.md) |
| `StructuredLogTransport.hasPendingDrops` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-hasPendingDrops-2f3de6f725af/README.md) |
| `StructuredLogTransport.pendingCount` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-pendingCount-7ffaa68e6e35/README.md) |
| `StructuredLogTransport.queueEagerDrain` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-queueEagerDrain-a2dd57b57135/README.md) |
| `StructuredLogTransport.recordDrop` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-recordDrop-e613ca4348f6/README.md) |
| `StructuredLogTransport.recordDropped` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-recordDropped-6cd4b933f426/README.md) |
| `StructuredLogTransport.recordSourceResult` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-recordSourceResult-5bc53ef7ba89/README.md) |
| `StructuredLogTransport.releaseIdentityHold` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-releaseIdentityHold-faa55fce257c/README.md) |
| `StructuredLogTransport.reportFlushTickFailure` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-reportFlushTickFailure-b69ed1465bc5/README.md) |
| `StructuredLogTransport.reportPendingDrops` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-reportPendingDrops-e50f78b1c595/README.md) |
| `StructuredLogTransport.reportSubmitTimeout` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-reportSubmitTimeout-0a98e27fff2a/README.md) |
| `StructuredLogTransport.setFlushSettledListener` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-setFlushSettledListener-75ee1191a50a/README.md) |
| `StructuredLogTransport.setFlushTickListener` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-setFlushTickListener-bca8b02bde9f/README.md) |
| `StructuredLogTransport.setIdentityTags` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-setIdentityTags-8052d53f9d4b/README.md) |
| `StructuredLogTransport.settle` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-settle-857ab91d8be5/README.md) |
| `StructuredLogTransport.shipConfirmed` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-shipConfirmed-7df057f68351/README.md) |
| `StructuredLogTransport.shipLogs` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-shipLogs-a8b41d78c170/README.md) |
| `StructuredLogTransport.snapshotPendingDrops` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-snapshotPendingDrops-abbeb359f2dd/README.md) |
| `cloneDropCounters` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/cloneDropCounters-a7d7a416c212/README.md) |
| `createDropCounterId` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/createDropCounterId-ea6311240e13/README.md) |
| `emptyDropCounters` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/emptyDropCounters-aa5577ee645b/README.md) |
| `isDeadlineExpiry` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/isDeadlineExpiry-975af58338ef/README.md) |
| `isValidLogShipReceipt` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/isValidLogShipReceipt-738906fe1874/README.md) |
| `toClientLogLevel` | 1 | [Funcionamento estático](../../../../functions/shared/observability/structured-log-transport-ts/toClientLogLevel-2fc5d735c786/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
