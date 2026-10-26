# `duplicateRowIndices`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript-window-edge.ts` · [Module README](../../../../../modules/shared/transcript/transcript-window-edge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712716-712727](../../../../../../reference/runtime/host-main.cjs#L712716-L712727) | `FunctionDeclaration` | no | `rows, from2, to3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712716-712727](../../../../../../reference/runtime/host-main.cjs#L712716-L712727) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:712716

Calls written directly in this body: `duplicates.add`, `getEntryRowKey`, `isTimelineHiddenEntry`, `new Set`, `seenKeys.add`, `seenKeys.has`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `95eb9566d77819a91565ece7fdc316f246a04cce2e2aca2ea6e418b2d18f55ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
