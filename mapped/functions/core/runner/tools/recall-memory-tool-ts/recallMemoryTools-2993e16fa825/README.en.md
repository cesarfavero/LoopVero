# `recallMemoryTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769862-769875](../../../../../../../reference/runtime/host-main.cjs#L769862-L769875) | `FunctionDeclaration` | no | `host, options2 = {}` |
| [evaluation:565531-565544](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565531-L565544) | `FunctionDeclaration` | no | `host, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769862-769875](../../../../../../../reference/runtime/host-main.cjs#L769862-L769875) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565531-565544](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565531-L565544) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:769862

Calls written directly in this body: `createRecallMemoryTool`, `offersMemoryLibrary`.

SHA-256 of the source span: `a6fd8ea9f7ef91a3be65da003097d43060f5106aa4329f06c1ead1a007330893`.

### evaluation:565531

Calls written directly in this body: `createRecallMemoryTool`, `offersMemoryLibrary`.

SHA-256 of the source span: `a6fd8ea9f7ef91a3be65da003097d43060f5106aa4329f06c1ead1a007330893`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
