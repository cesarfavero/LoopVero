# `_MeetingScheduleCopy.reviewRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meetings-shared.ts` · [Module README](../../../../../modules/core/meetings/meetings-shared-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772627-772669](../../../../../../reference/runtime/host-main.cjs#L772627-L772669) | `method` | no | `{     schedule,     scheduleId,     calendarEvent,     firstStartAtMs   }` |
| [evaluation:571853-571895](../../../../../../reference/runtime/sand-eval-runner.cjs#L571853-L571895) | `method` | no | `{     schedule,     scheduleId,     calendarEvent,     firstStartAtMs   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772627-772669](../../../../../../reference/runtime/host-main.cjs#L772627-L772669) | 8 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:571853-571895](../../../../../../reference/runtime/sand-eval-runner.cjs#L571853-L571895) | 8 | 0 | 0 | 4 | 0 | 0 |

### host:772627

Calls written directly in this body: `.toISOString`, `_MeetingScheduleCopy.repeatDescription`, `new Date`.

SHA-256 of the source span: `b9fed845322dc8aa99f937d3388078dc4a94226567285977c8890da43a1c550c`.

### evaluation:571853

Calls written directly in this body: `.toISOString`, `_MeetingScheduleCopy.repeatDescription`, `new Date`.

SHA-256 of the source span: `b9fed845322dc8aa99f937d3388078dc4a94226567285977c8890da43a1c550c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
