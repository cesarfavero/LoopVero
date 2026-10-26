# `precedingTimestamp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript-window-edge.ts` · [Module README](../../../../../modules/shared/transcript/transcript-window-edge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712728-712747](../../../../../../reference/runtime/host-main.cjs#L712728-L712747) | `FunctionDeclaration` | no | `rows, start, cut` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712728-712747](../../../../../../reference/runtime/host-main.cjs#L712728-L712747) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:712728

Calls written directly in this body: `Math.max`, `duplicateRowIndices`, `duplicates.has`, `isAgentPeerMessageEntry`, `isTimelineHiddenEntry`, `isValidTimestampMs`.

Assignment or increment targets: `index`, `runStartMs`.

SHA-256 of the source span: `f2b0cd3d24c4acc9e3de2688c39b4cdbd4be015154f8e8bedc35b7625886d2f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
