# `_MeetingsTools.reviewJoin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773349-773370](../../../../../../reference/runtime/host-main.cjs#L773349-L773370) | `method` | yes | `deps, target` |
| [evaluation:572575-572596](../../../../../../reference/runtime/sand-eval-runner.cjs#L572575-L572596) | `method` | yes | `deps, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773349-773370](../../../../../../reference/runtime/host-main.cjs#L773349-L773370) | 2 | 0 | 1 | 2 | 1 | 0 |
| [evaluation:572575-572596](../../../../../../reference/runtime/sand-eval-runner.cjs#L572575-L572596) | 2 | 0 | 1 | 2 | 1 | 0 |

### host:773349

Calls written directly in this body: `deps.meetings.firstStartAtMs`, `deps.reviewJoin.review`, `new SandMeetingsError`, `refuse2`, `reviewCallId`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `0c814f361d67eacd8e9d50f9767aa72146343c6675a8137691932566b02b216c`.

### evaluation:572575

Calls written directly in this body: `deps.meetings.firstStartAtMs`, `deps.reviewJoin.review`, `new SandMeetingsError`, `refuse3`, `reviewCallId`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `0e39bd54b29d20e944d73f3590bd25492b1a89ce7d1b1e218df28a4a5a8faf83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
