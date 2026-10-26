# `isMainTranscriptPageEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/main-transcript-page.ts` · [Module README](../../../../../modules/shared/transcript/main-transcript-page-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490367-490371](../../../../../../reference/runtime/host-main.cjs#L490367-L490371) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490367-490371](../../../../../../reference/runtime/host-main.cjs#L490367-L490371) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:490367

Calls written directly in this body: `PAGE_KINDS.has`, `isBranchedEntry`.

SHA-256 of the source span: `b11d04a2726aad10ee08e66cbed87e7d367a62273cc219ed4e81ef41cfbd8ad4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
