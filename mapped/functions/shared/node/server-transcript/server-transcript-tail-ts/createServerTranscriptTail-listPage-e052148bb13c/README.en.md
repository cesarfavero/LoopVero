# `createServerTranscriptTail/listPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713377-713421](../../../../../../../reference/runtime/host-main.cjs#L713377-L713421) | `ArrowFunctionExpression` | yes | `state, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713377-713421](../../../../../../../reference/runtime/host-main.cjs#L713377-L713421) | 7 | 1 | 2 | 1 | 1 | 0 |

### host:713377

Calls written directly in this body: `Math.max`, `Math.min`, `alignedServerPage`, `bodies.get`, `decodeBody`, `deps.client.list`, `entries.push`, `kept.filter`, `listed.toReversed`, `new ServerTranscriptTailReadError`, `reportDroppedRows`, `resolveBodies`, `sessionRequestFieldOmittingDefault`, `splitListedPage`.

Assignment or increment targets: `oldestListedSeq`.

Explicit throw targets: `ServerTranscriptTailReadError`.

SHA-256 of the source span: `e21091eb6b6e7bce8d99881cbc0f4a4f743d29c72cc877118960460b3ccc01f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
