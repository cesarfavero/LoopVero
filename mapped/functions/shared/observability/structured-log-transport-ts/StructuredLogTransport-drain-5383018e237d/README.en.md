# `StructuredLogTransport.drain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453097-453105](../../../../../../reference/runtime/host-main.cjs#L453097-L453105) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453097-453105](../../../../../../reference/runtime/host-main.cjs#L453097-L453105) | 1 | 1 | 1 | 2 | 0 | 0 |

### host:453097

Calls written directly in this body: `this.flush`, `this.hasPendingDrops`, `this.pendingCount`.

SHA-256 of the source span: `b26a11662bdeb64ce59faf34fd0eaf9d1fab0943feb0521d94613a37836866e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
