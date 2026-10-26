# `createServerTranscriptTail/handleRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713593-713599](../../../../../../../reference/runtime/host-main.cjs#L713593-L713599) | `ArrowFunctionExpression` | yes | `frame, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713593-713599](../../../../../../../reference/runtime/host-main.cjs#L713593-L713599) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:713593

Calls written directly in this body: `readGenerationFor`, `tailStateKey`, `withAgent`.

SHA-256 of the source span: `4bf59f574cc0aa7e2b9e4bf5541d4a5bbd1bf7b8ab1c92e59b06e6fe2bf83b73`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
