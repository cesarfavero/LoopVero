# `createServerTranscriptTail/noteBodyLost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713271-713282](../../../../../../../reference/runtime/host-main.cjs#L713271-L713282) | `ArrowFunctionExpression` | no | `state, row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713271-713282](../../../../../../../reference/runtime/host-main.cjs#L713271-L713282) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:713271

Calls written directly in this body: `Number`, `bodySourceOf`, `deps.onRowLost`, `state.lostBodies.get`, `state.lostBodies.set`.

SHA-256 of the source span: `198b2f6997684ba053e7a9d1371b611542cdea109b4235e2e137e45bf213ef81`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
