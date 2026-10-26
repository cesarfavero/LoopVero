# `renderRecallMemoryLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769719-769741](../../../../../../../reference/runtime/host-main.cjs#L769719-L769741) | `FunctionDeclaration` | no | `args` |
| [evaluation:565388-565410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565388-L565410) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769719-769741](../../../../../../../reference/runtime/host-main.cjs#L769719-L769741) | 5 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:565388-565410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565388-L565410) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:769719

Calls written directly in this body: `lines2.join`, `lines2.push`, `searchedLabel`.

Assignment or increment targets: `budget`, `shown`.

SHA-256 of the source span: `87e69acc62f376ac699d0800713e80485cb3eb44add3df9673106e5053353bd1`.

### evaluation:565388

Calls written directly in this body: `lines2.join`, `lines2.push`, `searchedLabel`.

Assignment or increment targets: `budget`, `shown`.

SHA-256 of the source span: `87e69acc62f376ac699d0800713e80485cb3eb44add3df9673106e5053353bd1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
