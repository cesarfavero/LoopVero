# `StructuredLogTransport.clearPending`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453055-453071](../../../../../../reference/runtime/host-main.cjs#L453055-L453071) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453055-453071](../../../../../../reference/runtime/host-main.cjs#L453055-L453071) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:453055

Calls written directly in this body: `controller.abort`, `createDropCounterId`, `emptyDropCounters`, `this.flushChain.then`, `this.requestAbortControllers.clear`, `this.settle`.

Assignment or increment targets: `this.activeBatch`, `this.buffer`, `this.client`, `this.deliveryGeneration`, `this.dropCounterId`, `this.dropCounters`, `this.eagerDrainRequested`, `this.flushChain`.

SHA-256 of the source span: `547487e28dce73757befdf3a676d4158dba3a713c474b045999905fcbfd370c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
