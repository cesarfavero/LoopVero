# `createServerTranscriptTail/readFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714019-714024](../../../../../../../reference/runtime/host-main.cjs#L714019-L714024) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714019-714024](../../../../../../../reference/runtime/host-main.cjs#L714019-L714024) | 2 | 0 | 0 | 0 | 1 | 0 |

### host:714019

Calls written directly in this body: `String`, `fallBack`, `new ServerTranscriptTailReadError`.

Explicit throw targets: `ServerTranscriptTailReadError`.

SHA-256 of the source span: `3d376481deacb7887d7f98ff68745551f3eb9817220235a923e9c7abf3e1a5b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
