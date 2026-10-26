# `_MeetingChannel.endedText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-channel.ts` · [Module README](../../../../../modules/shared/meetings/meeting-channel-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772503-772540](../../../../../../reference/runtime/host-main.cjs#L772503-L772540) | `method` | no | `meeting` |
| [evaluation:571729-571766](../../../../../../reference/runtime/sand-eval-runner.cjs#L571729-L571766) | `method` | no | `meeting` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772503-772540](../../../../../../reference/runtime/host-main.cjs#L772503-L772540) | 11 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:571729-571766](../../../../../../reference/runtime/sand-eval-runner.cjs#L571729-L571766) | 11 | 0 | 0 | 4 | 0 | 0 |

### host:772503

Calls written directly in this body: `.join`.

SHA-256 of the source span: `fa9f3f51746758a3fc6420ce672b589fb721c82f23a3c5856220584e5a326a5a`.

### evaluation:571729

Calls written directly in this body: `.join`.

SHA-256 of the source span: `fa9f3f51746758a3fc6420ce672b589fb721c82f23a3c5856220584e5a326a5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
