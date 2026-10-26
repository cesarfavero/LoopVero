# `buildSandEvalRunnerOptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/evals/runner-options.ts` · [Module README](../../../../../modules/core/evals/runner-options-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596773-596855](../../../../../../reference/runtime/sand-eval-runner.cjs#L596773-L596855) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596773-596855](../../../../../../reference/runtime/sand-eval-runner.cjs#L596773-L596855) | 35 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596773

Calls written directly in this body: `buildSandSubagentSystemPrompt`, `composeEvalRunnerGates`, `createLocalAttachmentStore`, `createSandEvalUserMachines`, `frozenPromptOptions`, `gates.executorForkContext`, `gates.executorSendRules`, `generateImageStubOptions`, `memoryOptionsWhereRecallIsOffered`, `offersShellUserComputer`, `rlParityOptions`, `sandWebToolOffers`, `systemReminderPolicy`, `userMachines.wrapBox`.

SHA-256 of the source span: `7a515a2bc8b2a4ef5866bc6f5047135b7e7979cd82e0299908f7739b06f3ed6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
