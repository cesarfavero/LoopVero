# `resolveEmailRouteVerification`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735337-735392](../../../../../../../reference/runtime/host-main.cjs#L735337-L735392) | `FunctionDeclaration` | yes | `execute, route, options2` |
| [evaluation:540902-540957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540902-L540957) | `FunctionDeclaration` | yes | `execute, route, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735337-735392](../../../../../../../reference/runtime/host-main.cjs#L735337-L735392) | 12 | 0 | 4 | 8 | 0 | 0 |
| [evaluation:540902-540957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540902-L540957) | 12 | 0 | 4 | 8 | 0 | 0 |

### host:735337

Calls written directly in this body: `String`, `emailSenderRead`, `execute`, `readGmailDefaultSendAs`, `readSendingAddresses`, `sender.parseRepliedTo`, `sender.parseRepliedToLink`, `sender.parseSender`, `sender.replyRead`, `verificationExecuteFailure`.

Assignment or increment targets: `sendAs`, `sendingAddress`.

SHA-256 of the source span: `b3cccb3a004ae9b06aa4d6baeda4e683641219f3bee41f4566d33475ecb5dd75`.

### evaluation:540902

Calls written directly in this body: `String`, `emailSenderRead`, `execute`, `readGmailDefaultSendAs`, `readSendingAddresses`, `sender.parseRepliedTo`, `sender.parseRepliedToLink`, `sender.parseSender`, `sender.replyRead`, `verificationExecuteFailure`.

Assignment or increment targets: `sendAs`, `sendingAddress`.

SHA-256 of the source span: `eec76c74532a442bb66b6ec93bbcf0514f47b3bd20c7ec77526d07463114cdd5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
