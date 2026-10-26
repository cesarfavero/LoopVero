# `isSendMessageReminderMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/send-message-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483093-483096](../../../../../../reference/runtime/sand-eval-runner.cjs#L483093-L483096) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483093-483096](../../../../../../reference/runtime/sand-eval-runner.cjs#L483093-L483096) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483093

Calls written directly in this body: `getUserMessageText`, `text3.includes`.

SHA-256 of the source span: `97f52dcf9c74df5df93afc022e39845975df116566ed4cefc1da42d833f50852`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
