# `transcriptEntryOfJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript-entry-serde.ts` · [Module README](../../../../../modules/shared/transcript/transcript-entry-serde-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712619-712626](../../../../../../reference/runtime/host-main.cjs#L712619-L712626) | `FunctionDeclaration` | no | `parsed2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712619-712626](../../../../../../reference/runtime/host-main.cjs#L712619-L712626) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:712619

Calls written directly in this body: `isValidTranscriptEntry`, `withBoxEnvSecretTargetKeys`, `withEmailDraftFrom`, `withValidRenderCards`, `withVisualizationHeight`, `withVoiceCallNudgeCounts`.

SHA-256 of the source span: `38e54ef0dd3f6730bcb03489adde7fdfdb101912c7df14c5ac7ef20d9fb275f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
