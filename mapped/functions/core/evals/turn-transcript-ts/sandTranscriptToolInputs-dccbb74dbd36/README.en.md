# `sandTranscriptToolInputs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/evals/turn-transcript.ts` · [Module README](../../../../../modules/core/evals/turn-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628394-628402](../../../../../../reference/runtime/sand-eval-runner.cjs#L628394-L628402) | `FunctionDeclaration` | no | `transcripts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628394-628402](../../../../../../reference/runtime/sand-eval-runner.cjs#L628394-L628402) | 1 | 2 | 0 | 1 | 0 | 0 |

### evaluation:628394

Calls written directly in this body: `inputs.has`, `inputs.set`, `new Map`, `toolCallParts`, `transcripts.subagents.map`.

SHA-256 of the source span: `afeb8bf7135387b3a3205bbe95e643ea8a61c95c2cdc949bbdf438249fbc7919`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
