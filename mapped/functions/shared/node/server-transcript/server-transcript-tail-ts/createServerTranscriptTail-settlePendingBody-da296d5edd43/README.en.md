# `createServerTranscriptTail/settlePendingBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713297-713302](../../../../../../../reference/runtime/host-main.cjs#L713297-L713302) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713297-713302](../../../../../../../reference/runtime/host-main.cjs#L713297-L713302) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:713297

Calls written directly in this body: `args.state.pendingBodies.delete`, `args.state.pendingBodies.get`.

SHA-256 of the source span: `e159dbd5f4de6d8287f2eca7df0e6071191ea5c2c40e0062be75e1b404c32774`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
