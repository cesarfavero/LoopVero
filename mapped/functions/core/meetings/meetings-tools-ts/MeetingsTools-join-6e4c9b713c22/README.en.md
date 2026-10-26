# `_MeetingsTools.join`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773165-773196](../../../../../../reference/runtime/host-main.cjs#L773165-L773196) | `method` | yes | `deps, args` |
| [evaluation:572391-572422](../../../../../../reference/runtime/sand-eval-runner.cjs#L572391-L572422) | `method` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773165-773196](../../../../../../reference/runtime/host-main.cjs#L773165-L773196) | 8 | 0 | 4 | 4 | 1 | 0 |
| [evaluation:572391-572422](../../../../../../reference/runtime/sand-eval-runner.cjs#L572391-L572422) | 8 | 0 | 4 | 4 | 1 | 0 |

### host:773165

Calls written directly in this body: `MeetingLinkCopy.labelWithoutQuery`, `MeetingSites.parse`, `_MeetingsTools.acknowledgedLine`, `_MeetingsTools.answeredNote`, `_MeetingsTools.askConsent`, `_MeetingsTools.joinNotApproved`, `_MeetingsTools.requireScheduleLead`, `_MeetingsTools.reviewAndJoin`, `_MeetingsTools.reviewInstruction`, `_MeetingsTools.scheduleOf`, `deps.meetings.readJoinedMeeting`, `new SandMeetingsError`, `refuse2`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `be160f682e0d77a412dc3f6220fd10f0c27d1c1c2e4dcd3c89ba915d0b88d9b9`.

### evaluation:572391

Calls written directly in this body: `MeetingLinkCopy.labelWithoutQuery`, `MeetingSites.parse`, `_MeetingsTools.acknowledgedLine`, `_MeetingsTools.answeredNote`, `_MeetingsTools.askConsent`, `_MeetingsTools.joinNotApproved`, `_MeetingsTools.requireScheduleLead`, `_MeetingsTools.reviewAndJoin`, `_MeetingsTools.reviewInstruction`, `_MeetingsTools.scheduleOf`, `deps.meetings.readJoinedMeeting`, `new SandMeetingsError`, `refuse3`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `7f97e47d5057936dcc6323d2c6b6b898efa7267ec3c0f20860e6f34665087c5d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
