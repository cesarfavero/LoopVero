# `shared/observability/structured-log-transport.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../../guide/architecture/README.en.md) · [General index](../../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:451724-451728](../../../../../reference/runtime/host-main.cjs#L451724-L451728) |
| host | [host:452644-452646](../../../../../reference/runtime/host-main.cjs#L452644-L452646) |
| host | [host:452902-453384](../../../../../reference/runtime/host-main.cjs#L452902-L453384) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `StructuredLogTransport.buildLogEntry` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-buildLogEntry-32c7a61790bb/README.en.md) |
| `StructuredLogTransport.captureCheckpoint` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-captureCheckpoint-30880016618b/README.en.md) |
| `StructuredLogTransport.capturePending` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-capturePending-91b077e0edf8/README.en.md) |
| `StructuredLogTransport.clearPending` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-clearPending-1a52889df231/README.en.md) |
| `StructuredLogTransport.constructor` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-constructor-16a878e0286b/README.en.md) |
| `StructuredLogTransport.dispose` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-dispose-10a57fe10a22/README.en.md) |
| `StructuredLogTransport.drain` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-drain-5383018e237d/README.en.md) |
| `StructuredLogTransport.drainEager` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-drainEager-d389325c4212/README.en.md) |
| `StructuredLogTransport.dropBufferOverflow` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-dropBufferOverflow-aacfff72dc1e/README.en.md) |
| `StructuredLogTransport.enqueue` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-enqueue-796a82750009/README.en.md) |
| `StructuredLogTransport.enqueueAt` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-enqueueAt-0e3826e04614/README.en.md) |
| `StructuredLogTransport.ensurePolling` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-ensurePolling-042731cc1970/README.en.md) |
| `StructuredLogTransport.expireBufferedLogs` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-expireBufferedLogs-91ae5e9b0801/README.en.md) |
| `StructuredLogTransport.finishFlush` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-finishFlush-cd160b74a3f0/README.en.md) |
| `StructuredLogTransport.flush` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-flush-d5c9b2c841fd/README.en.md) |
| `StructuredLogTransport.flushIfDue` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-flushIfDue-93ab8921429a/README.en.md) |
| `StructuredLogTransport.flushNow` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-flushNow-1ecdba329eb1/README.en.md) |
| `StructuredLogTransport.flushOnce` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-flushOnce-6973eecd36b5/README.en.md) |
| `StructuredLogTransport.hasPendingDrops` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-hasPendingDrops-2f3de6f725af/README.en.md) |
| `StructuredLogTransport.pendingCount` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-pendingCount-7ffaa68e6e35/README.en.md) |
| `StructuredLogTransport.queueEagerDrain` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-queueEagerDrain-a2dd57b57135/README.en.md) |
| `StructuredLogTransport.recordDrop` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-recordDrop-e613ca4348f6/README.en.md) |
| `StructuredLogTransport.recordDropped` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-recordDropped-6cd4b933f426/README.en.md) |
| `StructuredLogTransport.recordSourceResult` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-recordSourceResult-5bc53ef7ba89/README.en.md) |
| `StructuredLogTransport.releaseIdentityHold` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-releaseIdentityHold-faa55fce257c/README.en.md) |
| `StructuredLogTransport.reportFlushTickFailure` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-reportFlushTickFailure-b69ed1465bc5/README.en.md) |
| `StructuredLogTransport.reportPendingDrops` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-reportPendingDrops-e50f78b1c595/README.en.md) |
| `StructuredLogTransport.reportSubmitTimeout` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-reportSubmitTimeout-0a98e27fff2a/README.en.md) |
| `StructuredLogTransport.setFlushSettledListener` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-setFlushSettledListener-75ee1191a50a/README.en.md) |
| `StructuredLogTransport.setFlushTickListener` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-setFlushTickListener-bca8b02bde9f/README.en.md) |
| `StructuredLogTransport.setIdentityTags` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-setIdentityTags-8052d53f9d4b/README.en.md) |
| `StructuredLogTransport.settle` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-settle-857ab91d8be5/README.en.md) |
| `StructuredLogTransport.shipConfirmed` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-shipConfirmed-7df057f68351/README.en.md) |
| `StructuredLogTransport.shipLogs` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-shipLogs-a8b41d78c170/README.en.md) |
| `StructuredLogTransport.snapshotPendingDrops` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/StructuredLogTransport-snapshotPendingDrops-abbeb359f2dd/README.en.md) |
| `cloneDropCounters` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/cloneDropCounters-a7d7a416c212/README.en.md) |
| `createDropCounterId` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/createDropCounterId-ea6311240e13/README.en.md) |
| `emptyDropCounters` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/emptyDropCounters-aa5577ee645b/README.en.md) |
| `isDeadlineExpiry` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/isDeadlineExpiry-975af58338ef/README.en.md) |
| `isValidLogShipReceipt` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/isValidLogShipReceipt-738906fe1874/README.en.md) |
| `toClientLogLevel` | 1 | [Static behavior](../../../../functions/shared/observability/structured-log-transport-ts/toClientLogLevel-2fc5d735c786/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
