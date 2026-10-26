# `renderMultitaskModeEnterUserReminderInner`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/multitask-mode-user-reminder.js` · [Module README](../../../../../modules/agent-engine/prompts/multitask-mode-user-reminder-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:638480-638486](../../../../../../reference/runtime/host-main.cjs#L638480-L638486) | `FunctionDeclaration` | no | `subagentToolName, options2 = {}` |
| [evaluation:427210-427216](../../../../../../reference/runtime/sand-eval-runner.cjs#L427210-L427216) | `FunctionDeclaration` | no | `subagentToolName, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:638480-638486](../../../../../../reference/runtime/host-main.cjs#L638480-L638486) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:427210-427216](../../../../../../reference/runtime/sand-eval-runner.cjs#L427210-L427216) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:638480

Calls written directly in this body: `MultitaskModeEnterUserReminder`, `renderContent`.

SHA-256 of the source span: `d88dfad5f33d48c60109f608695b4f8f2ae93df4b45efb719d1f9cc279983bb7`.

### evaluation:427210

Calls written directly in this body: `MultitaskModeEnterUserReminder`, `renderContent`.

SHA-256 of the source span: `d88dfad5f33d48c60109f608695b4f8f2ae93df4b45efb719d1f9cc279983bb7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
