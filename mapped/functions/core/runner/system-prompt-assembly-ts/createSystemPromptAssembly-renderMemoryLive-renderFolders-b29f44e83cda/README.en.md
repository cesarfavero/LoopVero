# `createSystemPromptAssembly/renderMemoryLive/renderFolders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552870-552878](../../../../../../reference/runtime/sand-eval-runner.cjs#L552870-L552878) | `ArrowFunctionExpression` | no | `audience` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552870-552878](../../../../../../reference/runtime/sand-eval-runner.cjs#L552870-L552878) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:552870 uses an implicit arrow-function return.

### evaluation:552870

Calls written directly in this body: `.filter`, `folders.list`, `memoryFolderFacts`, `renderMemoryFolderSections`.

SHA-256 of the source span: `76bdcfb2ffe56724b905f0a7a416bfe07fa6ae0eb091e68d1b049ae194dfda64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
