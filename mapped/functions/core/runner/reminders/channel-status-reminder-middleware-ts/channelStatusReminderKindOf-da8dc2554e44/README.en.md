# `channelStatusReminderKindOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480361-480370](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480361-L480370) | `FunctionDeclaration` | no | `spec, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480361-480370](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480361-L480370) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:480361

Calls written directly in this body: `.trimStart`, `openings.find`, `textOf`.

SHA-256 of the source span: `fe2812fa1732d0944886a476ecac054780e994dcee7a273d6f56c9869bcd5e3a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
