# `createPromptCollectorGlue/getAutomationStatusReminderForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533706-533726](../../../../../../reference/runtime/sand-eval-runner.cjs#L533706-L533726) | `FunctionDeclaration` | no | `compactionEpoch, firingAutomationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533706-533726](../../../../../../reference/runtime/sand-eval-runner.cjs#L533706-L533726) | 8 | 0 | 0 | 4 | 0 | 0 |

### evaluation:533706

Calls written directly in this body: `.slice`, `Object.keys`, `host.requestContext.resolve`, `lastSeenAutomationStatusReminder`, `renderAutomationClearedStatusReminder`, `renderAutomationRuntimeStatusReminder`, `store.getLocation`, `store.list`, `store.listDefinitions`.

SHA-256 of the source span: `7edfac23c30ac444dab042f781cb12fe02884c8f932eb0d597474fbc856bb92e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
