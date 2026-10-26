# `_MeetingScheduleCopy.summary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meetings-shared.ts` · [Module README](../../../../../modules/core/meetings/meetings-shared-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772693-772698](../../../../../../reference/runtime/host-main.cjs#L772693-L772698) | `method` | no | `review` |
| [evaluation:571919-571924](../../../../../../reference/runtime/sand-eval-runner.cjs#L571919-L571924) | `method` | no | `review` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772693-772698](../../../../../../reference/runtime/host-main.cjs#L772693-L772698) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571919-571924](../../../../../../reference/runtime/sand-eval-runner.cjs#L571919-L571924) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772693

Calls written directly in this body: `.map`, `Object.entries`, `_MeetingScheduleCopy.reviewRecord`, `facts.join`.

SHA-256 of the source span: `51ed81e0ebe45d49cd679868246eb5bdf1cce0b943988d8918948a29d9904464`.

### evaluation:571919

Calls written directly in this body: `.map`, `Object.entries`, `_MeetingScheduleCopy.reviewRecord`, `facts.join`.

SHA-256 of the source span: `51ed81e0ebe45d49cd679868246eb5bdf1cce0b943988d8918948a29d9904464`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
