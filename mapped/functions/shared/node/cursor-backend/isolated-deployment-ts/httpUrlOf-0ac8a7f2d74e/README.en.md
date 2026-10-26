# `httpUrlOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/isolated-deployment.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451592-451595](../../../../../../../reference/runtime/host-main.cjs#L451592-L451595) | `FunctionDeclaration` | no | `raw` |
| [evaluation:597138-597141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597138-L597141) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451592-451595](../../../../../../../reference/runtime/host-main.cjs#L451592-L451595) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597138-597141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597138-L597141) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:451592

Calls written directly in this body: `URL.parse`.

SHA-256 of the source span: `6d205e2c0a38ec3fb4d14cdd63b415d943b011e75ebfb124a0909c5487c20524`.

### evaluation:597138

Calls written directly in this body: `URL.parse`.

SHA-256 of the source span: `91f95d1eefbe1a76f8cbf7e7c41999a97da6e51e685b5421876d075d666a12ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
