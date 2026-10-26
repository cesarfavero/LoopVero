# `_MeetingsTools.update`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773259-773333](../../../../../../reference/runtime/host-main.cjs#L773259-L773333) | `method` | yes | `deps, args` |
| [evaluation:572485-572559](../../../../../../reference/runtime/sand-eval-runner.cjs#L572485-L572559) | `method` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773259-773333](../../../../../../reference/runtime/host-main.cjs#L773259-L773333) | 19 | 0 | 5 | 6 | 2 | 0 |
| [evaluation:572485-572559](../../../../../../reference/runtime/sand-eval-runner.cjs#L572485-L572559) | 19 | 0 | 5 | 6 | 2 | 0 |

### host:773259

Calls written directly in this body: `Date.now`, `MeetingJoinRefusals.from`, `MeetingSites.parse`, `_MeetingsTools.acknowledgedLine`, `_MeetingsTools.answeredNote`, `_MeetingsTools.askConsent`, `_MeetingsTools.renderRow`, `_MeetingsTools.reviewInstruction`, `_MeetingsTools.reviewJoin`, `_MeetingsTools.scheduleOf`, `_MeetingsTools.scheduleReviewOf`, `_MeetingsTools.unknownMeeting`, `deps.meetings.readMeetingUrl`, `deps.meetings.recordJoinRefused`, `deps.meetings.updateMeeting`, `new SandMeetingsError`, `refuse2`.

Assignment or increment targets: `joinAnswered`, `move2`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `213a9cdb9f8547c75886f97d0a9c7239078a66fbe22a0360c7155533020a23dd`.

### evaluation:572485

Calls written directly in this body: `Date.now`, `MeetingJoinRefusals.from`, `MeetingSites.parse`, `_MeetingsTools.acknowledgedLine`, `_MeetingsTools.answeredNote`, `_MeetingsTools.askConsent`, `_MeetingsTools.renderRow`, `_MeetingsTools.reviewInstruction`, `_MeetingsTools.reviewJoin`, `_MeetingsTools.scheduleOf`, `_MeetingsTools.scheduleReviewOf`, `_MeetingsTools.unknownMeeting`, `deps.meetings.readMeetingUrl`, `deps.meetings.recordJoinRefused`, `deps.meetings.updateMeeting`, `new SandMeetingsError`, `refuse3`.

Assignment or increment targets: `joinAnswered`, `move2`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `b4d30b834ef19de4dfeea773c51119d27144e3b40b68d356002a301d49d8e470`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
