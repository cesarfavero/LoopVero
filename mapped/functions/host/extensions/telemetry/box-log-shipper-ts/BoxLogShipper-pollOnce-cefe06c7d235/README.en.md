# `BoxLogShipper.pollOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730884-730911](../../../../../../../reference/runtime/host-main.cjs#L730884-L730911) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730884-730911](../../../../../../../reference/runtime/host-main.cjs#L730884-L730911) | 6 | 3 | 4 | 0 | 0 | 1 |

### host:730884

Calls written directly in this body: `listedPaths.add`, `listedPaths.has`, `new Set`, `this.listLogFiles`, `this.maybeReportProgress`, `this.maybeRetryOffsetSaveFailure`, `this.notePumpFailed`, `this.notePumpSucceeded`, `this.pumpFailedPaths.add`, `this.pumpFailedPaths.delete`, `this.pumpFile`, `this.reconcileTruncatedOffsets`, `this.reportRejectedBoxTelemetryLines`, `this.saveOffsets`, `this.snapshotLogFileSizes`.

Assignment or increment targets: `budget`.

SHA-256 of the source span: `f2a4b9876af4659a75156305ff2ef0322f2a6eb28f62cff3da31e14ccdd9054c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
