# `meetingIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-join-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772755-772766](../../../../../../reference/runtime/host-main.cjs#L772755-L772766) | `FunctionDeclaration` | no | `url2` |
| [evaluation:571981-571992](../../../../../../reference/runtime/sand-eval-runner.cjs#L571981-L571992) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772755-772766](../../../../../../reference/runtime/host-main.cjs#L772755-L772766) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:571981-571992](../../../../../../reference/runtime/sand-eval-runner.cjs#L571981-L571992) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:772755

Calls written directly in this body: `MeetingSites.parse`, `new URL`.

SHA-256 of the source span: `cf658ab424bc2c11e66ff42c1041abff285d170d942c627656a6c0b4380bd78f`.

### evaluation:571981

Calls written directly in this body: `MeetingSites.parse`, `new URL`.

SHA-256 of the source span: `80244b5dc37373a5399c7a481a6231de2143a27d3ae27cc0b994593f470cb098`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
