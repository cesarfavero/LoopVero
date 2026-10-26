# `StructuredLogTransport.flushOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453183-453232](../../../../../../reference/runtime/host-main.cjs#L453183-L453232) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453183-453232](../../../../../../reference/runtime/host-main.cjs#L453183-L453232) | 9 | 0 | 4 | 8 | 0 | 0 |

### host:453183

Calls written directly in this body: `batch.map`, `takeLogShipBatch`, `this.dropBufferOverflow`, `this.expireBufferedLogs`, `this.finishFlush`, `this.recordSourceResult`, `this.reportPendingDrops`, `this.settle`, `this.shipLogs`, `this.shipSchedule.record`.

Assignment or increment targets: `this.activeBatch`, `this.buffer`.

SHA-256 of the source span: `c043d721dc0e75d3d049bdcfddd7297aeb7d360d32f708434a1cb7d06a1d180d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
