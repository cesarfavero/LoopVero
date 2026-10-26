# `createPromptCollectorGlue/lastSeenAutomationStatusReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533727-533735](../../../../../../reference/runtime/sand-eval-runner.cjs#L533727-L533735) | `FunctionDeclaration` | no | `compactionEpoch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533727-533735](../../../../../../reference/runtime/sand-eval-runner.cjs#L533727-L533735) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:533727

Calls written directly in this body: `host.promptSectionSnapshots.getPromptSectionSnapshot`.

SHA-256 of the source span: `ef63bcab0e82c14e4b21506afbc8de4153492281936e30d02ad519e70ffe96f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
