# `countOccurrences`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775517-775526](../../../../../../../../reference/runtime/host-main.cjs#L775517-L775526) | `FunctionDeclaration` | no | `{ source, needle }` |
| [evaluation:575161-575170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575161-L575170) | `FunctionDeclaration` | no | `{ source, needle }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775517-775526](../../../../../../../../reference/runtime/host-main.cjs#L775517-L775526) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:575161-575170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575161-L575170) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:775517

Calls written directly in this body: `source.indexOf`.

Assignment or increment targets: `count2`, `from2`.

SHA-256 of the source span: `63356567ba58005bdda6f41d64f08cf487bdd63f47df0302b6514b776604fbee`.

### evaluation:575161

Calls written directly in this body: `source.indexOf`.

Assignment or increment targets: `count2`, `from2`.

SHA-256 of the source span: `63356567ba58005bdda6f41d64f08cf487bdd63f47df0302b6514b776604fbee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
