# `createServerTranscriptTail/currentStamp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713115-713119](../../../../../../../reference/runtime/host-main.cjs#L713115-L713119) | `ArrowFunctionExpression` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713115-713119](../../../../../../../reference/runtime/host-main.cjs#L713115-L713119) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:713115 uses an implicit arrow-function return.

### host:713115

Calls written directly in this body: `epochOf`, `transcriptReplicaKeyForSession`.

SHA-256 of the source span: `b06f64b83737064f32c7027f40e64c95b789c6ccf1c49359b524e3176245e169`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
