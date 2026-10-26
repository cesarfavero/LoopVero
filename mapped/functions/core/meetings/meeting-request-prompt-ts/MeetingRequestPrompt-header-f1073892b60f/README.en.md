# `_MeetingRequestPrompt.header`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/meetings/meeting-request-prompt.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754077-754079](../../../../../../reference/runtime/host-main.cjs#L754077-L754079) | `method` | no | `request5` |
| [evaluation:535873-535875](../../../../../../reference/runtime/sand-eval-runner.cjs#L535873-L535875) | `method` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754077-754079](../../../../../../reference/runtime/host-main.cjs#L754077-L754079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535873-535875](../../../../../../reference/runtime/sand-eval-runner.cjs#L535873-L535875) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754077

Calls written directly in this body: `.join`, `_MeetingRequestPrompt.headerLines`.

SHA-256 of the source span: `eb5551fafd3d3814093a2af8d967ed23376ad59006f212e3a6f2bd8a2a2d14de`.

### evaluation:535873

Calls written directly in this body: `.join`, `_MeetingRequestPrompt.headerLines`.

SHA-256 of the source span: `718471ae5269c1dd2991a308ace978ecb778f8b86cc3f15d775713efe9182ca9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
