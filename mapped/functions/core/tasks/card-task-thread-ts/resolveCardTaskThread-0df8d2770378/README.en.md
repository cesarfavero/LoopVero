# `resolveCardTaskThread`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tasks/README.en.md).

**Module:** `core/tasks/card-task-thread.ts` · [Module README](../../../../../modules/core/tasks/card-task-thread-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725416-725436](../../../../../../reference/runtime/host-main.cjs#L725416-L725436) | `FunctionDeclaration` | yes | `taskId, tasks, withoutTaskId = "to show the card in the main chat"` |
| [evaluation:524673-524693](../../../../../../reference/runtime/sand-eval-runner.cjs#L524673-L524693) | `FunctionDeclaration` | yes | `taskId, tasks, withoutTaskId = "to show the card in the main chat"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725416-725436](../../../../../../reference/runtime/host-main.cjs#L725416-L725436) | 5 | 0 | 2 | 2 | 3 | 0 |
| [evaluation:524673-524693](../../../../../../reference/runtime/sand-eval-runner.cjs#L524673-L524693) | 5 | 0 | 2 | 2 | 3 | 0 |

### host:725416

Calls written directly in this body: `isSandAgentTaskId`, `new SandToolInputError`, `tasks.prepareThreadSend`, `tasks.read`, `tasks.setDoneThisTurn`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `f4ae5f244085d49e967bb86d9441dc72a7009f8b4e25a8defff08c1e0dc498d7`.

### evaluation:524673

Calls written directly in this body: `isSandAgentTaskId`, `new SandToolInputError`, `tasks.prepareThreadSend`, `tasks.read`, `tasks.setDoneThisTurn`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `f4ae5f244085d49e967bb86d9441dc72a7009f8b4e25a8defff08c1e0dc498d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
