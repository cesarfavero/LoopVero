# `projectSandAutoReviewUserText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/sand-auto-review-classifier-context.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-auto-review-classifier-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770418-770426](../../../../../../../reference/runtime/host-main.cjs#L770418-L770426) | `FunctionDeclaration` | no | `text3` |
| [evaluation:569238-569246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569238-L569246) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770418-770426](../../../../../../../reference/runtime/host-main.cjs#L770418-L770426) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569238-569246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569238-L569246) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:770418

Calls written directly in this body: `ownerVoiceWakeText`, `stripAgentProfileUpdates`, `stripAutomationWakeDeliveryGuidance`, `stripGroupTurnClosing`, `stripInstructionsUpdates`, `stripLeadingSandTurnAssemblyNotes`, `stripMemoryContextBlocks`, `stripSystemReminderBlocks`.

SHA-256 of the source span: `3bbd0ed4a672a62102e3119cee4ceaf5a044697965289dcf1373af118cf4e084`.

### evaluation:569238

Calls written directly in this body: `ownerVoiceWakeText`, `stripAgentProfileUpdates`, `stripAutomationWakeDeliveryGuidance`, `stripGroupTurnClosing`, `stripInstructionsUpdates`, `stripLeadingSandTurnAssemblyNotes`, `stripMemoryContextBlocks`, `stripSystemReminderBlocks`.

SHA-256 of the source span: `3bbd0ed4a672a62102e3119cee4ceaf5a044697965289dcf1373af118cf4e084`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
