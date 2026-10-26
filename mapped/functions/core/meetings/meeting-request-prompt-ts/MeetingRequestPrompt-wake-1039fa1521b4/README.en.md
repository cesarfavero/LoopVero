# `_MeetingRequestPrompt.wake`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/meetings/meeting-request-prompt.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754041-754060](../../../../../../reference/runtime/host-main.cjs#L754041-L754060) | `method` | no | `turn` |
| [evaluation:535837-535856](../../../../../../reference/runtime/sand-eval-runner.cjs#L535837-L535856) | `method` | no | `turn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754041-754060](../../../../../../reference/runtime/host-main.cjs#L754041-L754060) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535837-535856](../../../../../../reference/runtime/sand-eval-runner.cjs#L535837-L535856) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:754041

Calls written directly in this body: `_MeetingRequestPrompt.postOutcomes`, `_MeetingRequestPrompt.wakeLines`, `withReplyReminder`.

SHA-256 of the source span: `9efcd091c6937b9353bd940b56e34f00164691b04b0f25bbc171139a47e223b5`.

### evaluation:535837

Calls written directly in this body: `_MeetingRequestPrompt.postOutcomes`, `_MeetingRequestPrompt.wakeLines`, `withReplyReminder`.

SHA-256 of the source span: `9efcd091c6937b9353bd940b56e34f00164691b04b0f25bbc171139a47e223b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
