# `_MeetingChannel.startedText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-channel.ts` · [Module README](../../../../../modules/shared/meetings/meeting-channel-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772494-772502](../../../../../../reference/runtime/host-main.cjs#L772494-L772502) | `method` | no | `meeting` |
| [evaluation:571720-571728](../../../../../../reference/runtime/sand-eval-runner.cjs#L571720-L571728) | `method` | no | `meeting` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772494-772502](../../../../../../reference/runtime/host-main.cjs#L772494-L772502) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571720-571728](../../../../../../reference/runtime/sand-eval-runner.cjs#L571720-L571728) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772494

Calls written directly in this body: `.join`, `MeetingChannelAddress.of`.

SHA-256 of the source span: `d6b3141a5493c76523715f63abfb8ddfa83dd6a5265ff48429533b266df5008f`.

### evaluation:571720

Calls written directly in this body: `.join`, `MeetingChannelAddress.of`.

SHA-256 of the source span: `d6b3141a5493c76523715f63abfb8ddfa83dd6a5265ff48429533b266df5008f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
