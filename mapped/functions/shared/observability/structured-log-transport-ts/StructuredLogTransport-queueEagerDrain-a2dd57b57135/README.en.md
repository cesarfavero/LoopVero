# `StructuredLogTransport.queueEagerDrain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453154-453163](../../../../../../reference/runtime/host-main.cjs#L453154-L453163) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453154-453163](../../../../../../reference/runtime/host-main.cjs#L453154-L453163) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453154

Calls written directly in this body: `.finally`, `this.drainEager`, `this.shipSchedule.isDue`.

Assignment or increment targets: `this.eagerFlushQueued`.

SHA-256 of the source span: `2a6d90cbdcacea2b1998f9d0b82b410a09e19a2bec42f619298355a28b897071`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
