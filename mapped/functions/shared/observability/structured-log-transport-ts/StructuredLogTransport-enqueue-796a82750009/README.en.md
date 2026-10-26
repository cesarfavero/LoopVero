# `StructuredLogTransport.enqueue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453004-453006](../../../../../../reference/runtime/host-main.cjs#L453004-L453006) | `method` | no | `level, message, metadata2, onSettled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453004-453006](../../../../../../reference/runtime/host-main.cjs#L453004-L453006) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453004

Calls written directly in this body: `Date.now`, `this.enqueueAt`.

SHA-256 of the source span: `999fced637d13cd9deb914cc2558a02df13fa28695182ca4fb6581582faeface`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
