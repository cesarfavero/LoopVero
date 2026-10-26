# `hasUserDeliverySincePrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480462-480477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480462-L480477) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480462-480477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480462-L480477) | 4 | 1 | 0 | 2 | 0 | 0 |

### evaluation:480462

Calls written directly in this body: `isInjectedReminderMessage`, `message.content.some`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `8b8bc5e6470339fdd6cd5ea2b70fb526a581010c96c80bfea2367080d2212cc3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
