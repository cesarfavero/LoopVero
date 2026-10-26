# `StructuredLogTransport.enqueueAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453007-453025](../../../../../../reference/runtime/host-main.cjs#L453007-L453025) | `method` | no | `level, message, metadata2, timestamp3, onSettled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453007-453025](../../../../../../reference/runtime/host-main.cjs#L453007-L453025) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:453007

Calls written directly in this body: `onSettled`, `this.buffer.push`, `this.dropBufferOverflow`, `this.queueEagerDrain`, `this.shipSchedule.shipNext`.

Assignment or increment targets: `this.eagerDrainRequested`.

SHA-256 of the source span: `3f895d3169100d5169c820b593ae8076dafd5d098dc4e8a0d629e92c4109ad07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
