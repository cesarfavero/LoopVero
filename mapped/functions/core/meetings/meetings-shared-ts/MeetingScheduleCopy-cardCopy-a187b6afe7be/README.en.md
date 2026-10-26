# `_MeetingScheduleCopy.cardCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meetings-shared.ts` · [Module README](../../../../../modules/core/meetings/meetings-shared-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772670-772692](../../../../../../reference/runtime/host-main.cjs#L772670-L772692) | `method` | no | `{     schedule,     scheduleId,     calendarEvent,     firstStartAtMs   }` |
| [evaluation:571896-571918](../../../../../../reference/runtime/sand-eval-runner.cjs#L571896-L571918) | `method` | no | `{     schedule,     scheduleId,     calendarEvent,     firstStartAtMs   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772670-772692](../../../../../../reference/runtime/host-main.cjs#L772670-L772692) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:571896-571918](../../../../../../reference/runtime/sand-eval-runner.cjs#L571896-L571918) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:772670

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ddf90f47c6a4efcad53c578459f739765d9a26762d8038df201d6ccfdd8b614f`.

### evaluation:571896

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ddf90f47c6a4efcad53c578459f739765d9a26762d8038df201d6ccfdd8b614f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
