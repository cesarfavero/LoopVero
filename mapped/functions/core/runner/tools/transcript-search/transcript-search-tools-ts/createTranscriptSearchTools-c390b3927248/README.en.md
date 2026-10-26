# `createTranscriptSearchTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771440-771460](../../../../../../../../reference/runtime/host-main.cjs#L771440-L771460) | `FunctionDeclaration` | no | `search` |
| [evaluation:570674-570694](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570674-L570694) | `FunctionDeclaration` | no | `search` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771440-771460](../../../../../../../../reference/runtime/host-main.cjs#L771440-L771460) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570674-570694](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570674-L570694) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771440

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `138aacaa79f8e3e8c4a2276ca926b783def6c9f7c045e1d0f3f703f955206542`.

### evaluation:570674

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `138aacaa79f8e3e8c4a2276ca926b783def6c9f7c045e1d0f3f703f955206542`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
