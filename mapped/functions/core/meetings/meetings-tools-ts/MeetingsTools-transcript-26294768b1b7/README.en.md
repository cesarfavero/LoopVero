# `_MeetingsTools.transcript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773464-773474](../../../../../../reference/runtime/host-main.cjs#L773464-L773474) | `method` | yes | `deps, args` |
| [evaluation:572690-572700](../../../../../../reference/runtime/sand-eval-runner.cjs#L572690-L572700) | `method` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773464-773474](../../../../../../reference/runtime/host-main.cjs#L773464-L773474) | 3 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:572690-572700](../../../../../../reference/runtime/sand-eval-runner.cjs#L572690-L572700) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:773464

Calls written directly in this body: `_MeetingsTools.renderTranscript`, `_MeetingsTools.unknownMeeting`, `deps.meetings.readTranscript`.

SHA-256 of the source span: `7ec1eda70501c7686e90f5ae947b201a6881dec554cc21f935ba8de2a4f24676`.

### evaluation:572690

Calls written directly in this body: `_MeetingsTools.renderTranscript`, `_MeetingsTools.unknownMeeting`, `deps.meetings.readTranscript`.

SHA-256 of the source span: `7ec1eda70501c7686e90f5ae947b201a6881dec554cc21f935ba8de2a4f24676`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
