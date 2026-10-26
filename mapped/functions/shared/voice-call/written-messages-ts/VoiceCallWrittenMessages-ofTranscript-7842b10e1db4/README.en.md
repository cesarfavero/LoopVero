# `_VoiceCallWrittenMessages.ofTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/written-messages.ts` · [Module README](../../../../../modules/shared/voice-call/written-messages-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490570-490583](../../../../../../reference/runtime/host-main.cjs#L490570-L490583) | `method` | no | `entries, limit3 = VOICE_CALL_SENT_MESSAGE_LIMIT` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490570-490583](../../../../../../reference/runtime/host-main.cjs#L490570-L490583) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:490570

Calls written directly in this body: `getChatTranscriptEntries`, `outlineSendMessageText`, `typedInTheChat`, `written.push`, `written.slice`.

SHA-256 of the source span: `a1ed56d745508c26365128c1647edd70cb281fd487fb5ea33a66364d9f37fa52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
