# `openMemoryFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769779-769806](../../../../../../../reference/runtime/host-main.cjs#L769779-L769806) | `FunctionDeclaration` | no | `ctx, deps, requested` |
| [evaluation:565448-565475](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565448-L565475) | `FunctionDeclaration` | no | `ctx, deps, requested` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769779-769806](../../../../../../../reference/runtime/host-main.cjs#L769779-L769806) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:565448-565475](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565448-L565475) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:769779

Calls written directly in this body: `.join`, `.map`, `facts.filter`, `inFile.map`, `memoryFileLines`, `memoryFolderFactsOf`, `new Set`, `normalizedMemoryFilePath`, `paths.join`, `recordMemoryRecall`.

SHA-256 of the source span: `d11c008b6f13613cb3fb383694a8403454308c118019720d0ca1fe3175a99116`.

### evaluation:565448

Calls written directly in this body: `.join`, `.map`, `facts.filter`, `inFile.map`, `memoryFileLines`, `memoryFolderFactsOf`, `new Set`, `normalizedMemoryFilePath`, `paths.join`, `recordMemoryRecall`.

SHA-256 of the source span: `d11c008b6f13613cb3fb383694a8403454308c118019720d0ca1fe3175a99116`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
