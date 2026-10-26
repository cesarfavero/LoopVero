# `requestAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/evals/turn-transcript.ts` · [Module README](../../../../../modules/core/evals/turn-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628440-628451](../../../../../../reference/runtime/sand-eval-runner.cjs#L628440-L628451) | `FunctionDeclaration` | no | `update, subagentByRequestId, mainRequestIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628440-628451](../../../../../../reference/runtime/sand-eval-runner.cjs#L628440-L628451) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:628440

Calls written directly in this body: `mainRequestIds.has`, `subagentByRequestId.get`.

SHA-256 of the source span: `ba428b6a420c294488a5a483a81a7aeaa4a59d4cc4f2b1336f2dc16d15c4ecb2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
