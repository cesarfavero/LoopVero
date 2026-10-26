# `_MeetingRequestPrompt.opening`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/meetings/meeting-request-prompt.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754099-754112](../../../../../../reference/runtime/host-main.cjs#L754099-L754112) | `method` | no | `request5` |
| [evaluation:535895-535908](../../../../../../reference/runtime/sand-eval-runner.cjs#L535895-L535908) | `method` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754099-754112](../../../../../../reference/runtime/host-main.cjs#L754099-L754112) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535895-535908](../../../../../../reference/runtime/sand-eval-runner.cjs#L535895-L535908) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:754099

Calls written directly in this body: `_MeetingRequestPrompt.headerLines`, `withReplyReminder`.

SHA-256 of the source span: `bbd7130b2b94aee8dd810fd8d726fe79b9a038a49594868d2c22f2936bc43280`.

### evaluation:535895

Calls written directly in this body: `_MeetingRequestPrompt.headerLines`, `withReplyReminder`.

SHA-256 of the source span: `e574cf22a2a8796d16cf78bce23012318aaa1408492a40b9bb1636d952864be0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
