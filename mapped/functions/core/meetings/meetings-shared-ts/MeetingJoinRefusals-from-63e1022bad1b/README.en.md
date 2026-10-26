# `_MeetingJoinRefusals.from`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meetings-shared.ts` · [Module README](../../../../../modules/core/meetings/meetings-shared-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772561-772568](../../../../../../reference/runtime/host-main.cjs#L772561-L772568) | `method` | no | `{ reason, url: url2, schedule }` |
| [evaluation:571787-571794](../../../../../../reference/runtime/sand-eval-runner.cjs#L571787-L571794) | `method` | no | `{ reason, url: url2, schedule }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772561-772568](../../../../../../reference/runtime/host-main.cjs#L772561-L772568) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571787-571794](../../../../../../reference/runtime/sand-eval-runner.cjs#L571787-L571794) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:772561

Calls written directly in this body: `MeetingSites.parse`, `_MeetingJoinRefusals.timing`.

SHA-256 of the source span: `3f6c11f27a185c6a0b99c0d57813bd68455613f789afbd7f68a08524a1b44dbf`.

### evaluation:571787

Calls written directly in this body: `MeetingSites.parse`, `_MeetingJoinRefusals.timing`.

SHA-256 of the source span: `3f6c11f27a185c6a0b99c0d57813bd68455613f789afbd7f68a08524a1b44dbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
