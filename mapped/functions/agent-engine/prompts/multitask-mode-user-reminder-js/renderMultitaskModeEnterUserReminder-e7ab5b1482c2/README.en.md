# `renderMultitaskModeEnterUserReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/multitask-mode-user-reminder.js` · [Module README](../../../../../modules/agent-engine/prompts/multitask-mode-user-reminder-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:638495-638499](../../../../../../reference/runtime/host-main.cjs#L638495-L638499) | `FunctionDeclaration` | no | `subagentToolName, options2 = {}` |
| [evaluation:427225-427229](../../../../../../reference/runtime/sand-eval-runner.cjs#L427225-L427229) | `FunctionDeclaration` | no | `subagentToolName, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:638495-638499](../../../../../../reference/runtime/host-main.cjs#L638495-L638499) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:427225-427229](../../../../../../reference/runtime/sand-eval-runner.cjs#L427225-L427229) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:638495

Calls written directly in this body: `renderMultitaskModeEnterUserReminderInner`.

SHA-256 of the source span: `87dc618b45e425bd51899b1bfc5f188882d3d9d2b5cd5919f7fe95f038649f49`.

### evaluation:427225

Calls written directly in this body: `renderMultitaskModeEnterUserReminderInner`.

SHA-256 of the source span: `87dc618b45e425bd51899b1bfc5f188882d3d9d2b5cd5919f7fe95f038649f49`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
