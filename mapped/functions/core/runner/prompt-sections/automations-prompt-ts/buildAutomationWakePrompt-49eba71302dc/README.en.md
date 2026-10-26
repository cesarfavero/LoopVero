# `buildAutomationWakePrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/prompt-sections/automations-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528601-528640](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528601-L528640) | `FunctionDeclaration` | no | `automation, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528601-528640](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528601-L528640) | 9 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528601

Calls written directly in this body: `.join`, `Date.now`, `automationNoticeWakeLines`, `buildEventWakeContextBlocks`, `describeTriggerEventBatch`, `describeTriggerWithWindow`, `escapeEventText`, `formatTimestamp2`, `resolveWakeEvents`, `triggerSchedule`.

Assignment or increment targets: `opening`.

SHA-256 of the source span: `ee628513c4196fcd392b581c766b7ee1e0d33a1cb673d787f5f5d219820b7050`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
