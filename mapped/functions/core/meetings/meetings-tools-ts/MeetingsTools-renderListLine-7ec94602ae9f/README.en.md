# `_MeetingsTools.renderListLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773497-773514](../../../../../../reference/runtime/host-main.cjs#L773497-L773514) | `method` | no | `row, nowMs2, externalMeetingId` |
| [evaluation:572723-572740](../../../../../../reference/runtime/sand-eval-runner.cjs#L572723-L572740) | `method` | no | `row, nowMs, externalMeetingId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773497-773514](../../../../../../reference/runtime/host-main.cjs#L773497-L773514) | 8 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572723-572740](../../../../../../reference/runtime/sand-eval-runner.cjs#L572723-L572740) | 8 | 0 | 0 | 1 | 0 | 0 |

### host:773497

Calls written directly in this body: `MeetingScheduleCopy.repeatDescription`, `_MeetingsTools.formatTime`, `_MeetingsTools.joiningIn`, `_MeetingsTools.requestedLabel`, `_MeetingsTools.titleSuffix`, `joiningIn.toLowerCase`, `parts.join`, `parts.push`.

SHA-256 of the source span: `92560c3daab932dc5ed9a62bcdab9de26061d903c9e897dfddc6f40beeb305cf`.

### evaluation:572723

Calls written directly in this body: `MeetingScheduleCopy.repeatDescription`, `_MeetingsTools.formatTime`, `_MeetingsTools.joiningIn`, `_MeetingsTools.requestedLabel`, `_MeetingsTools.titleSuffix`, `joiningIn.toLowerCase`, `parts.join`, `parts.push`.

SHA-256 of the source span: `ff7bbc179074c0a21d5338caf88b2dfc702952d48a44c21ac1d0cdb0fb53c05e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
