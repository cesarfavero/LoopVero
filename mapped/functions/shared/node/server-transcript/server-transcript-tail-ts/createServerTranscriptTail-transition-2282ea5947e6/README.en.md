# `createServerTranscriptTail/transition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712995-713002](../../../../../../../reference/runtime/host-main.cjs#L712995-L713002) | `ArrowFunctionExpression` | no | `next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712995-713002](../../../../../../../reference/runtime/host-main.cjs#L712995-L713002) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:712995

Calls written directly in this body: `lifetime.abort`, `lifetimeOf`, `recovery.dispose`, `recoveryTimerOf`.

Assignment or increment targets: `phase`.

SHA-256 of the source span: `405eda29881df074e39ef77733febbd12768cbf1c0af7ab1fa284cc03f0661c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
