# `meetingDraftMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755371-755407](../../../../../../../reference/runtime/host-main.cjs#L755371-L755407) | `FunctionDeclaration` | yes | `meetings, { meetingId, body }` |
| [evaluation:541251-541287](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541251-L541287) | `FunctionDeclaration` | yes | `meetings, { meetingId, body }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755371-755407](../../../../../../../reference/runtime/host-main.cjs#L755371-L755407) | 6 | 0 | 2 | 1 | 5 | 0 |
| [evaluation:541251-541287](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541251-L541287) | 6 | 0 | 2 | 1 | 5 | 0 |

### host:755371

Calls written directly in this body: `MeetingChannelAddress.of`, `meetings.getMeeting`, `meetings.readMarkedInternal`, `new DraftRefusedError`.

Explicit throw targets: `DraftRefusedError`.

SHA-256 of the source span: `2a092b0cd4b455b6300e91f00de780b4c480bd88bcca346c550b724bf42a5dfe`.

### evaluation:541251

Calls written directly in this body: `MeetingChannelAddress.of`, `meetings.getMeeting`, `meetings.readMarkedInternal`, `new DraftRefusedError`.

Explicit throw targets: `DraftRefusedError`.

SHA-256 of the source span: `2a092b0cd4b455b6300e91f00de780b4c480bd88bcca346c550b724bf42a5dfe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
