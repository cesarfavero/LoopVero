# `createServerTranscriptTail/deferBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713283-713296](../../../../../../../reference/runtime/host-main.cjs#L713283-L713296) | `ArrowFunctionExpression` | no | `state, row, arrival` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713283-713296](../../../../../../../reference/runtime/host-main.cjs#L713283-L713296) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:713283

Calls written directly in this body: `deps.log`, `noteBodyLost`, `scheduleBodyRetry`, `state.pendingBodies.delete`, `state.pendingBodies.get`, `state.pendingBodies.set`.

SHA-256 of the source span: `c4ba41081d9792b2b2c6bcbe24ed3778db63c7836e74b558f8aa1c3dfb0dbf8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
