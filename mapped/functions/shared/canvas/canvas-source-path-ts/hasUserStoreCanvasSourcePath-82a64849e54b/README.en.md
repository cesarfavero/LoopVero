# `hasUserStoreCanvasSourcePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/canvas/canvas-source-path.ts` · [Module README](../../../../../modules/shared/canvas/canvas-source-path-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566754-566760](../../../../../../reference/runtime/sand-eval-runner.cjs#L566754-L566760) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566754-566760](../../../../../../reference/runtime/sand-eval-runner.cjs#L566754-L566760) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:566754

Calls written directly in this body: `parseCloudCanvasId`, `text3.includes`, `text3.matchAll`.

SHA-256 of the source span: `3ecb6b7d1fb1f353d2f8b977faabf8aaa5ac3db17111da351bc10371ac3b925f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
