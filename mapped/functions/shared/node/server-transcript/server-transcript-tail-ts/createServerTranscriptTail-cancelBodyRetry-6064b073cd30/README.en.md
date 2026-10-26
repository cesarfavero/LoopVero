# `createServerTranscriptTail/cancelBodyRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713124-713127](../../../../../../../reference/runtime/host-main.cjs#L713124-L713127) | `ArrowFunctionExpression` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713124-713127](../../../../../../../reference/runtime/host-main.cjs#L713124-L713127) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:713124

Calls written directly in this body: `state.bodyRetry.handle.dispose`.

Assignment or increment targets: `state.bodyRetry`.

SHA-256 of the source span: `c3195b411c210f0766318a1a750f4102b2d4e25e0f627c122c4b9aa86e5f4f5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
