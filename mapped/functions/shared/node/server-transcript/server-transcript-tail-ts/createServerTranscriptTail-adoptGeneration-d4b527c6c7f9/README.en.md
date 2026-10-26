# `createServerTranscriptTail/adoptGeneration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713141-713159](../../../../../../../reference/runtime/host-main.cjs#L713141-L713159) | `ArrowFunctionExpression` | no | `state, generation, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713141-713159](../../../../../../../reference/runtime/host-main.cjs#L713141-L713159) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:713141

Calls written directly in this body: `emit`, `nextStamp`, `resetForGeneration`.

Assignment or increment targets: `state.generation`.

SHA-256 of the source span: `d939a4357153c20663cf354524770a19e33093fd4e647a23f5b22b733b487b3e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
