# `createSystemPromptAssembly/voiceChannelSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553378-553380](../../../../../../reference/runtime/sand-eval-runner.cjs#L553378-L553380) | `FunctionDeclaration` | no | `skillPointers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553378-553380](../../../../../../reference/runtime/sand-eval-runner.cjs#L553378-L553380) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553378

Calls written directly in this body: `MainLoopVoicePrompt.channelSection`, `deps.skillAccess`, `voiceSkillCallStub`.

SHA-256 of the source span: `2ab9360c008f702dfe8fb08cc9b27d242acce33f8af070d435fbe7e5cd97b40a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
