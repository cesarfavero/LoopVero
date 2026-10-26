# `memoryFileLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769768-769778](../../../../../../../reference/runtime/host-main.cjs#L769768-L769778) | `FunctionDeclaration` | no | `facts` |
| [evaluation:565437-565447](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565437-L565447) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769768-769778](../../../../../../../reference/runtime/host-main.cjs#L769768-L769778) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:565437-565447](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565437-L565447) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:769768

Calls written directly in this body: `.reverse`, `formatMemoryDate`, `kept.push`, `kept.reverse`.

Assignment or increment targets: `budget`.

SHA-256 of the source span: `c1667701ac25ba190b4b204645475a9aeb9b872b2d0800616f3dccbeac28b570`.

### evaluation:565437

Calls written directly in this body: `.reverse`, `formatMemoryDate`, `kept.push`, `kept.reverse`.

Assignment or increment targets: `budget`.

SHA-256 of the source span: `c1667701ac25ba190b4b204645475a9aeb9b872b2d0800616f3dccbeac28b570`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
