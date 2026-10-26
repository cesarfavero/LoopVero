# `isBackendDownError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/backend-reachability.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711230-711240](../../../../../../../reference/runtime/host-main.cjs#L711230-L711240) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711230-711240](../../../../../../../reference/runtime/host-main.cjs#L711230-L711240) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:711230

Calls written directly in this body: `BACKEND_DOWN_ERRNOS.has`, `Number`, `TRANSPORT_STATUS_MESSAGE.exec`, `findSystemErrno`, `isBackendDownStatus`.

SHA-256 of the source span: `fe7ed9e87f885e964a6dc1e5c43fbeb17cf6854c1009974f19e20e5ced25e2d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
