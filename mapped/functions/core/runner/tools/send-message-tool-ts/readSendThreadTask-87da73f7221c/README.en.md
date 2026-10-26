# `readSendThreadTask`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760756-760779](../../../../../../../reference/runtime/host-main.cjs#L760756-L760779) | `FunctionDeclaration` | yes | `rawArgs, deps` |
| [evaluation:551571-551594](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551571-L551594) | `FunctionDeclaration` | yes | `rawArgs, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760756-760779](../../../../../../../reference/runtime/host-main.cjs#L760756-L760779) | 5 | 0 | 2 | 2 | 3 | 0 |
| [evaluation:551571-551594](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551571-L551594) | 5 | 0 | 2 | 2 | 3 | 0 |

### host:760756

Calls written directly in this body: `deps.tasks.prepareThreadSend`, `deps.tasks.read`, `deps.tasks.setDoneThisTurn`, `isSandAgentTaskId`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `f1f0d1d0c47a098defce7c640191919449976984cca27f8776bdcd9d45fef040`.

### evaluation:551571

Calls written directly in this body: `deps.tasks.prepareThreadSend`, `deps.tasks.read`, `deps.tasks.setDoneThisTurn`, `isSandAgentTaskId`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `f1f0d1d0c47a098defce7c640191919449976984cca27f8776bdcd9d45fef040`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
