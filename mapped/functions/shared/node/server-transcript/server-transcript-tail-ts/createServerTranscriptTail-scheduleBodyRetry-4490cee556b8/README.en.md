# `createServerTranscriptTail/scheduleBodyRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713445-713452](../../../../../../../reference/runtime/host-main.cjs#L713445-L713452) | `ArrowFunctionExpression` | no | `state, attempt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713445-713452](../../../../../../../reference/runtime/host-main.cjs#L713445-L713452) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:713445

Calls written directly in this body: `acceptsAgent`, `bodyRetryBackoff.schedule`, `retryPendingBodiesAfter`.

Assignment or increment targets: `state.bodyRetry`.

SHA-256 of the source span: `6985f0540e0f032a545b6677e9a26402f7df357a15646cecc0f1e7a030696e65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
