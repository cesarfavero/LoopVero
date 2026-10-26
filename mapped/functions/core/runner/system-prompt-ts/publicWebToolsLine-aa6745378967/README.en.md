# `publicWebToolsLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532797-532806](../../../../../../reference/runtime/sand-eval-runner.cjs#L532797-L532806) | `FunctionDeclaration` | no | `hostSurfaces, webSearchOffByTeamNetwork` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532797-532806](../../../../../../reference/runtime/sand-eval-runner.cjs#L532797-L532806) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:532797

Calls written directly in this body: `names3.join`, `offeredWebToolNames`.

SHA-256 of the source span: `ae99736d164c071231374b8627ee0edf8ad5f971a1a6bc303aa5058747cc6c11`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
