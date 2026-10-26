# `isBackendDownStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/backend-reachability.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711227-711229](../../../../../../../reference/runtime/host-main.cjs#L711227-L711229) | `FunctionDeclaration` | no | `status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711227-711229](../../../../../../../reference/runtime/host-main.cjs#L711227-L711229) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:711227

Calls written directly in this body: `BACKEND_DOWN_HTTP_STATUSES.has`.

SHA-256 of the source span: `fc69e681037b8a840f02e6c01bbd51b1fa2b0d5337fd617ffd4c531601811abc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
