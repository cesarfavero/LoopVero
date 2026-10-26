# `createOrbitService/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/orbit-service.ts` · [Module README](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706372-706375](../../../../../../../reference/runtime/host-main.cjs#L706372-L706375) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706372-706375](../../../../../../../reference/runtime/host-main.cjs#L706372-L706375) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706372

Calls written directly in this body: `performStart`.

Assignment or increment targets: `state.startPromise`.

SHA-256 of the source span: `3576fe2bf1acc1c5c82c2e3f5f931f8e50bdd94afb4ce08f8ba9d95396a03011`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
