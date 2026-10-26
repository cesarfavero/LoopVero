# `_MeetingsTools.reviewAndJoin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773197-773243](../../../../../../reference/runtime/host-main.cjs#L773197-L773243) | `method` | yes | `deps, { args, schedule, cardAnswered }` |
| [evaluation:572423-572469](../../../../../../reference/runtime/sand-eval-runner.cjs#L572423-L572469) | `method` | yes | `deps, { args, schedule, cardAnswered }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773197-773243](../../../../../../reference/runtime/host-main.cjs#L773197-L773243) | 8 | 0 | 4 | 4 | 1 | 1 |
| [evaluation:572423-572469](../../../../../../reference/runtime/sand-eval-runner.cjs#L572423-L572469) | 8 | 0 | 4 | 4 | 1 | 1 |

### host:773197

Calls written directly in this body: `_MeetingsTools.answeredNote`, `_MeetingsTools.joinNotApproved`, `_MeetingsTools.joinedText`, `_MeetingsTools.renderRow`, `_MeetingsTools.requireScheduleLead`, `_MeetingsTools.reviewAndJoin`, `_MeetingsTools.reviewJoin`, `_MeetingsTools.scheduleReviewOf`, `calendarCheckReason`, `deps.meetings.joinMeeting`, `deps.meetings.scheduleMeeting`.

Assignment or increment targets: `row`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `1d9567d9b1ad6773d8afb3b38910cd4e7bcf37caed361dc5ed50cfacacf0cce3`.

### evaluation:572423

Calls written directly in this body: `_MeetingsTools.answeredNote`, `_MeetingsTools.joinNotApproved`, `_MeetingsTools.joinedText`, `_MeetingsTools.renderRow`, `_MeetingsTools.requireScheduleLead`, `_MeetingsTools.reviewAndJoin`, `_MeetingsTools.reviewJoin`, `_MeetingsTools.scheduleReviewOf`, `calendarCheckReason`, `deps.meetings.joinMeeting`, `deps.meetings.scheduleMeeting`.

Assignment or increment targets: `row`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `ff642bc522205495e94c5dcf1de72279e2da585e32c9620a8ae5185585487caf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
