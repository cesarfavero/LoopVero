# `pagesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-takeover.ts` · [Module README](../../../../../modules/core/box/box-takeover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775973-775976](../../../../../../reference/runtime/host-main.cjs#L775973-L775976) | `FunctionDeclaration` | no | `listing` |
| [evaluation:575630-575633](../../../../../../reference/runtime/sand-eval-runner.cjs#L575630-L575633) | `FunctionDeclaration` | no | `listing` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775973-775976](../../../../../../reference/runtime/host-main.cjs#L775973-L775976) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:575630-575633](../../../../../../reference/runtime/sand-eval-runner.cjs#L575630-L575633) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:775973

Calls written directly in this body: `webPagesOf`.

SHA-256 of the source span: `7ad7cd822a43c3d77d3ac7a9c34f013ce082d60c9be21ac95004f3ab1d05e722`.

### evaluation:575630

Calls written directly in this body: `webPagesOf`.

SHA-256 of the source span: `7ad7cd822a43c3d77d3ac7a9c34f013ce082d60c9be21ac95004f3ab1d05e722`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
