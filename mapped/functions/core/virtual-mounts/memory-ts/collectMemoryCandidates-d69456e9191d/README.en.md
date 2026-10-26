# `collectMemoryCandidates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769546-769577](../../../../../../reference/runtime/host-main.cjs#L769546-L769577) | `FunctionDeclaration` | no | `deps, scopes` |
| [evaluation:565215-565246](../../../../../../reference/runtime/sand-eval-runner.cjs#L565215-L565246) | `FunctionDeclaration` | no | `deps, scopes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769546-769577](../../../../../../reference/runtime/host-main.cjs#L769546-L769577) | 6 | 3 | 0 | 1 | 0 | 0 |
| [evaluation:565215-565246](../../../../../../reference/runtime/sand-eval-runner.cjs#L565215-L565246) | 6 | 3 | 0 | 1 | 0 | 0 |

### host:769546

Calls written directly in this body: `.map`, `candidates.push`, `deps.memoryFolders`, `deps.memoryStore`, `deps.userMemory`, `memoryFolderFactsOf`, `scopes.includes`, `store.listMemories`, `userBot.listMemories`, `userMemory.listAll`.

SHA-256 of the source span: `f3441fe3e57caf8d7264e734724582243b653c761bb457dbb3cfd1d70adf7040`.

### evaluation:565215

Calls written directly in this body: `.map`, `candidates.push`, `deps.memoryFolders`, `deps.memoryStore`, `deps.userMemory`, `memoryFolderFactsOf`, `scopes.includes`, `store.listMemories`, `userBot.listMemories`, `userMemory.listAll`.

SHA-256 of the source span: `0601279b3661cb54bb48bebb451fbb780a6fd62cb4263fbed1a033b022518fd7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
