# `MeetingLinkCopy.labelWithoutQuery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meetings-shared.ts` · [Module README](../../../../../modules/core/meetings/meetings-shared-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772706-772711](../../../../../../reference/runtime/host-main.cjs#L772706-L772711) | `method` | no | `url2` |
| [evaluation:571932-571937](../../../../../../reference/runtime/sand-eval-runner.cjs#L571932-L571937) | `method` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772706-772711](../../../../../../reference/runtime/host-main.cjs#L772706-L772711) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:571932-571937](../../../../../../reference/runtime/sand-eval-runner.cjs#L571932-L571937) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:772706

Calls written directly in this body: `MeetingSites.parse`, `new URL`.

SHA-256 of the source span: `eafcf7810f1ee8278c8888a0399cd0010bcd60381d9fb7803c5b6314a37943a0`.

### evaluation:571932

Calls written directly in this body: `MeetingSites.parse`, `new URL`.

SHA-256 of the source span: `946c507b74ff9cc5914e23aad9dcd6a0c342398d74d0d7b4e772cefdee6520d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
