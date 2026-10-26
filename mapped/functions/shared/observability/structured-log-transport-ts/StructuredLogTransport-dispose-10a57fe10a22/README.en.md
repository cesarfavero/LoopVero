# `StructuredLogTransport.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453078-453096](../../../../../../reference/runtime/host-main.cjs#L453078-L453096) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453078-453096](../../../../../../reference/runtime/host-main.cjs#L453078-L453096) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:453078

Calls written directly in this body: `this.drain`, `this.hasPendingDrops`, `this.identityHoldHandle.dispose`, `this.pendingCount`, `this.pollingHandle.dispose`, `this.settle`.

Assignment or increment targets: `this.activeBatch`, `this.buffer`, `this.flushHeldForIdentity`, `this.identityHoldHandle`, `this.isDisposed`, `this.pollingHandle`.

SHA-256 of the source span: `3b22eb67e140d4e2987e4d5fa7e4d8e2fb9e4c26b927d041381fc8d9ce239c05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
