# `StructuredLogTransport.setFlushTickListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452992-453000](../../../../../../reference/runtime/host-main.cjs#L452992-L453000) | `method` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452992-453000](../../../../../../reference/runtime/host-main.cjs#L452992-L453000) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:452992

Calls written directly in this body: `this.ensurePolling`, `this.pollingHandle.dispose`.

Assignment or increment targets: `this.flushTickListener`, `this.pollingHandle`.

SHA-256 of the source span: `09c6d0bf178a39017b18d0f453b8b9dc8b493153f5277c2c1858d2a53ee5a2bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
