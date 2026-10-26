# `StructuredLogTransport.reportFlushTickFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453135-453139](../../../../../../reference/runtime/host-main.cjs#L453135-L453139) | `method` | no | `operation, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453135-453139](../../../../../../reference/runtime/host-main.cjs#L453135-L453139) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453135

Calls written directly in this body: `errorLogTag`, `this.options.reportFailure`.

SHA-256 of the source span: `93843efd6a8723065ccb3659aa5732da701c8af6ac678818d2ca04c62033aab3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
