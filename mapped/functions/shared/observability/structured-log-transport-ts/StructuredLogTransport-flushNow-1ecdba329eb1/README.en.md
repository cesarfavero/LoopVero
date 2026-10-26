# `StructuredLogTransport.flushNow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453072-453077](../../../../../../reference/runtime/host-main.cjs#L453072-L453077) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453072-453077](../../../../../../reference/runtime/host-main.cjs#L453072-L453077) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:453072

Calls written directly in this body: `this.drain`, `this.hasPendingDrops`, `this.pendingCount`.

SHA-256 of the source span: `ba7a49964b817bdf4b7919fa7961b0779ec5b5f6f23408a9aca9912040393139`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
