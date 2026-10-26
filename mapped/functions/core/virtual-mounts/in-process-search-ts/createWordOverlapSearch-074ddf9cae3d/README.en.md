# `createWordOverlapSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/in-process-search.ts` · [Module README](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766052-766059](../../../../../../reference/runtime/host-main.cjs#L766052-L766059) | `FunctionDeclaration` | no | `options2 = {}` |
| [evaluation:559416-559423](../../../../../../reference/runtime/sand-eval-runner.cjs#L559416-L559423) | `FunctionDeclaration` | no | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766052-766059](../../../../../../reference/runtime/host-main.cjs#L766052-L766059) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559416-559423](../../../../../../reference/runtime/sand-eval-runner.cjs#L559416-L559423) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766052

Calls written directly in this body: `createInProcessSearch`, `createOverlapRanker`.

SHA-256 of the source span: `1780e36fdf1ef4979bf42a0ba4cbdca7175606302a61c426cd851964dc124ea2`.

### evaluation:559416

Calls written directly in this body: `createInProcessSearch`, `createOverlapRanker`.

SHA-256 of the source span: `1780e36fdf1ef4979bf42a0ba4cbdca7175606302a61c426cd851964dc124ea2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
