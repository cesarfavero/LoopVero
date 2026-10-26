# `_MeetingChatSender.review/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-sender.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760433-760433](../../../../../../reference/runtime/host-main.cjs#L760433-L760433) | `ArrowFunctionExpression` | no | `prompt, reviewSignal` |
| [evaluation:551248-551248](../../../../../../reference/runtime/sand-eval-runner.cjs#L551248-L551248) | `ArrowFunctionExpression` | no | `prompt, reviewSignal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760433-760433](../../../../../../reference/runtime/host-main.cjs#L760433-L760433) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:760433 uses an implicit arrow-function return.
| [evaluation:551248-551248](../../../../../../reference/runtime/sand-eval-runner.cjs#L551248-L551248) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:551248 uses an implicit arrow-function return.

### host:760433

Calls written directly in this body: `this.deps.meetings.runChatReview`.

SHA-256 of the source span: `1298c1bcff6e373d5807f1e9bf26873f5e5229d408b62d33a76dd661ef264794`.

### evaluation:551248

Calls written directly in this body: `this.deps.meetings.runChatReview`.

SHA-256 of the source span: `1298c1bcff6e373d5807f1e9bf26873f5e5229d408b62d33a76dd661ef264794`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
