# `createDraftCalendarInviteTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/draft-calendar-invite-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/draft-calendar-invite-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764046-764101](../../../../../../../../reference/runtime/host-main.cjs#L764046-L764101) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:557420-557475](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557420-L557475) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764046-764101](../../../../../../../../reference/runtime/host-main.cjs#L764046-L764101) | 9 | 0 | 3 | 2 | 1 | 0 |
| [evaluation:557420-557475](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557420-L557475) | 9 | 0 | 3 | 2 | 1 | 0 |

### host:764046

Calls written directly in this body: `Date.now`, `args.guests.map`, `d.calendarDay.read`, `d.emitCard`, `d.ownerName`, `d.timeZone`, `dayEventsOf`, `dayNoteOf`, `inviteTimesOf`, `inviteWhenLabel`, `localDayOf`, `new SandToolInputError`, `resolveCardTaskThread`, `surfaceDisplayName`, `timeZoneOrUtc`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `1406da0f69dec5432338444559c9fd8c495c6ebb69598b8ee47555d484ba8cb5`.

### evaluation:557420

Calls written directly in this body: `Date.now`, `args.guests.map`, `d.calendarDay.read`, `d.emitCard`, `d.ownerName`, `d.timeZone`, `dayEventsOf`, `dayNoteOf`, `inviteTimesOf`, `inviteWhenLabel`, `localDayOf`, `new SandToolInputError`, `resolveCardTaskThread`, `surfaceDisplayName`, `timeZoneOrUtc`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `3a68d8c8d1fe347a4e46e633d29251e17b2232b79ce4d5246598aaeb15d1fd13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
