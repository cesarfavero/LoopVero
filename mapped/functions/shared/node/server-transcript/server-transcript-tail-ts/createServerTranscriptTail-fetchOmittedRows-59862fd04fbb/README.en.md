# `createServerTranscriptTail/fetchOmittedRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713196-713225](../../../../../../../reference/runtime/host-main.cjs#L713196-L713225) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713196-713225](../../../../../../../reference/runtime/host-main.cjs#L713196-L713225) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:713196

Calls written directly in this body: `Array.from`, `Math.min`, `Promise.all`, `new Map`.

SHA-256 of the source span: `2ebc967c4637dc1fe30c1a3020fffbf4c880122a4346ef0fb87384f469b07605`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
