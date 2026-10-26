# `canvasToolsFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778499-778505](../../../../../../../../reference/runtime/host-main.cjs#L778499-L778505) | `FunctionDeclaration` | no | `host, decisions` |
| [evaluation:578233-578239](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578233-L578239) | `FunctionDeclaration` | no | `host, decisions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778499-778505](../../../../../../../../reference/runtime/host-main.cjs#L778499-L778505) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:578233-578239](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578233-L578239) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:778499

Calls written directly in this body: `artifactToolOffers`, `createCloudCanvasTools`, `createEditCanvasTool`.

SHA-256 of the source span: `7e134cea679a78f50acc883089463a813757cd3ca41572af55db664b95be350c`.

### evaluation:578233

Calls written directly in this body: `artifactToolOffers`, `createCloudCanvasTools`, `createEditCanvasTool`.

SHA-256 of the source span: `e407ff6e4e4e3baf234d92ee80bf237f7d0f07bd9d3dfc9355ce127b2cbda9e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
