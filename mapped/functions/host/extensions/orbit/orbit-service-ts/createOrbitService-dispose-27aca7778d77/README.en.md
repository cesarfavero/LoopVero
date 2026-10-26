# `createOrbitService/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/orbit-service.ts` · [Module README](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706366-706369](../../../../../../../reference/runtime/host-main.cjs#L706366-L706369) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706366-706369](../../../../../../../reference/runtime/host-main.cjs#L706366-L706369) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706366

Calls written directly in this body: `performDispose`.

Assignment or increment targets: `state.disposePromise`.

SHA-256 of the source span: `262d8421d934c164e6ec7d93f973c8aefc5e6bba41aea18f11f48c7545690c4d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
