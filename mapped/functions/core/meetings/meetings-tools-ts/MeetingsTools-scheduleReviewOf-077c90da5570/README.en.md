# `_MeetingsTools.scheduleReviewOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773392-773400](../../../../../../reference/runtime/host-main.cjs#L773392-L773400) | `method` | no | `{ scheduleId, calendarEvent }, schedule, meetings` |
| [evaluation:572618-572626](../../../../../../reference/runtime/sand-eval-runner.cjs#L572618-L572626) | `method` | no | `{ scheduleId, calendarEvent }, schedule, meetings` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773392-773400](../../../../../../reference/runtime/host-main.cjs#L773392-L773400) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572618-572626](../../../../../../reference/runtime/sand-eval-runner.cjs#L572618-L572626) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:773392

Calls written directly in this body: `meetings.firstStartAtMs`.

SHA-256 of the source span: `356dfde4bc3a5d989fc2b87282e6c619018e8d2f0ba3a9d724304ba4420b69f1`.

### evaluation:572618

Calls written directly in this body: `meetings.firstStartAtMs`.

SHA-256 of the source span: `356dfde4bc3a5d989fc2b87282e6c619018e8d2f0ba3a9d724304ba4420b69f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
