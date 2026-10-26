# `_MeetingScheduleCopy.repeatDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meetings-shared.ts` · [Module README](../../../../../modules/core/meetings/meetings-shared-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772603-772626](../../../../../../reference/runtime/host-main.cjs#L772603-L772626) | `method` | no | `repeat` |
| [evaluation:571829-571852](../../../../../../reference/runtime/sand-eval-runner.cjs#L571829-L571852) | `method` | no | `repeat` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772603-772626](../../../../../../reference/runtime/host-main.cjs#L772603-L772626) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:571829-571852](../../../../../../reference/runtime/sand-eval-runner.cjs#L571829-L571852) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:772603

Calls written directly in this body: `.map`, `MEETING_WEEKDAYS.filter`, `MeetingRepeatSpec.isWeekdays`, `_MeetingScheduleCopy.ordinal`, `every`, `names3.join`.

SHA-256 of the source span: `ca6a3ff021237ada3bbd07d14d7c5bd4d48999c294cf302a575aeb78942bf85f`.

### evaluation:571829

Calls written directly in this body: `.map`, `MEETING_WEEKDAYS.filter`, `MeetingRepeatSpec.isWeekdays`, `_MeetingScheduleCopy.ordinal`, `every`, `names3.join`.

SHA-256 of the source span: `ca6a3ff021237ada3bbd07d14d7c5bd4d48999c294cf302a575aeb78942bf85f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
