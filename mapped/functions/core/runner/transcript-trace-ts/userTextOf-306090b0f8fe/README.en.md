# `userTextOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/transcript-trace.ts` · [Module README](../../../../../modules/core/runner/transcript-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765671-765677](../../../../../../reference/runtime/host-main.cjs#L765671-L765677) | `FunctionDeclaration` | no | `text3` |
| [evaluation:559036-559042](../../../../../../reference/runtime/sand-eval-runner.cjs#L559036-L559042) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765671-765677](../../../../../../reference/runtime/host-main.cjs#L765671-L765677) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:559036-559042](../../../../../../reference/runtime/sand-eval-runner.cjs#L559036-L559042) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:765671

Calls written directly in this body: `stripContextTags`, `stripSandPromptMarkers`, `stripped.replace`, `stripped.trim`.

Assignment or increment targets: `stripped`.

SHA-256 of the source span: `828bcff30855c242cd3de55c3429e6383b087ac9e3f78013623994f3f08a33ed`.

### evaluation:559036

Calls written directly in this body: `stripContextTags`, `stripSandPromptMarkers`, `stripped.replace`, `stripped.trim`.

Assignment or increment targets: `stripped`.

SHA-256 of the source span: `828bcff30855c242cd3de55c3429e6383b087ac9e3f78013623994f3f08a33ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
