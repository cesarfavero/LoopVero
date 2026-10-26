# `windowOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/in-process-search.ts` · [Module README](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:559424-559440](../../../../../../reference/runtime/sand-eval-runner.cjs#L559424-L559440) | `FunctionDeclaration` | no | `items, window2, defaultLimit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:559424-559440](../../../../../../reference/runtime/sand-eval-runner.cjs#L559424-L559440) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:559424

Calls written directly in this body: `Math.ceil`, `Math.max`, `Math.min`, `items.slice`.

Assignment or increment targets: `end`.

SHA-256 of the source span: `38fd223f70aa89c5ce1bba5966687e53704d2e4024737d73a74f2cdb180c21c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
