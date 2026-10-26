# `createRecallMemoryTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769808-769836](../../../../../../../reference/runtime/host-main.cjs#L769808-L769836) | `FunctionDeclaration` | no | `deps, offersMemoryUpdate = true, library = false` |
| [evaluation:565477-565505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565477-L565505) | `FunctionDeclaration` | no | `deps, offersMemoryUpdate = true, library = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769808-769836](../../../../../../../reference/runtime/host-main.cjs#L769808-L769836) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565477-565505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565477-L565505) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:769808

Calls written directly in this body: `defineCommunicateTool`, `recallMemoryDescription`.

SHA-256 of the source span: `b071780683f296f9969dae414bf7930a917afda2323bcae13d6772bae6ee25cf`.

### evaluation:565477

Calls written directly in this body: `defineCommunicateTool`, `recallMemoryDescription`.

SHA-256 of the source span: `b071780683f296f9969dae414bf7930a917afda2323bcae13d6772bae6ee25cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
