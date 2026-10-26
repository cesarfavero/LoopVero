# `recallMemory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769745-769760](../../../../../../../reference/runtime/host-main.cjs#L769745-L769760) | `FunctionDeclaration` | yes | `ctx, deps, args` |
| [evaluation:565414-565429](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565414-L565429) | `FunctionDeclaration` | yes | `ctx, deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769745-769760](../../../../../../../reference/runtime/host-main.cjs#L769745-L769760) | 2 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:565414-565429](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565414-L565429) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:769745

Calls written directly in this body: `.search`, `Math.min`, `args.query.trim`, `createMemoryVirtualMount`, `recordMemoryRecall`, `renderRecallMemoryLines`, `result.hits.map`, `userBotOffered`.

SHA-256 of the source span: `39e9f014d4a8c6404574f7da1c7527ad9f1627888c0e3803ddceb3b5d5bfbd77`.

### evaluation:565414

Calls written directly in this body: `.search`, `Math.min`, `args.query.trim`, `createMemoryVirtualMount`, `recordMemoryRecall`, `renderRecallMemoryLines`, `result.hits.map`, `userBotOffered`.

SHA-256 of the source span: `39e9f014d4a8c6404574f7da1c7527ad9f1627888c0e3803ddceb3b5d5bfbd77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
