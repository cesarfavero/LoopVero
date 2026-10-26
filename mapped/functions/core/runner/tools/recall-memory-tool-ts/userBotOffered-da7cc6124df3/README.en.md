# `userBotOffered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769742-769744](../../../../../../../reference/runtime/host-main.cjs#L769742-L769744) | `FunctionDeclaration` | no | `deps` |
| [evaluation:565411-565413](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565411-L565413) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769742-769744](../../../../../../../reference/runtime/host-main.cjs#L769742-L769744) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565411-565413](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565411-L565413) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769742

Calls written directly in this body: `deps.memoryStore`.

SHA-256 of the source span: `e3f0fe8d42a7a114cbb516d66ea319eb14df4b0a712fabf252ab273ed9a6c3d7`.

### evaluation:565411

Calls written directly in this body: `deps.memoryStore`.

SHA-256 of the source span: `e3f0fe8d42a7a114cbb516d66ea319eb14df4b0a712fabf252ab273ed9a6c3d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
