# `createServerTranscriptTail/loop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713945-714018](../../../../../../../reference/runtime/host-main.cjs#L713945-L714018) | `ArrowFunctionExpression` | yes | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713945-714018](../../../../../../../reference/runtime/host-main.cjs#L713945-L714018) | 15 | 1 | 5 | 4 | 0 | 1 |

### host:713945

Calls written directly in this body: `.catch`, `AbortSignal.any`, `backendReturn.arm`, `backendReturn.noteFailure`, `backendReturn.noteSilence`, `backendReturnWait.dispose`, `cleanReconnectPause.schedule`, `clock.monotonicNow`, `deps.log`, `endOutage`, `errorLogTag`, `fallBack`, `networkReturnJitter.schedule`, `new AbortController`, `park`, `probeWhileWaiting`, `retryBackoff.schedule`, `runOnce`, `settle3`, `watchLifetime.abort`.

Assignment or increment targets: `failures2`, `outageStartedAt`, `outcome`, `pendingRetryWait`.

SHA-256 of the source span: `8a43f2316e5432eade22fbb24ea5e18a35f0c9cba4bcae2bb36e8f0350df5c6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
