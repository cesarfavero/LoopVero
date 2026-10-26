# `createServerTranscriptTail/probeWhileWaiting`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713927-713944](../../../../../../../reference/runtime/host-main.cjs#L713927-L713944) | `ArrowFunctionExpression` | yes | `signal, retry2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713927-713944](../../../../../../../reference/runtime/host-main.cjs#L713927-L713944) | 6 | 1 | 2 | 5 | 0 | 0 |

### host:713927

Calls written directly in this body: `backendWatchPace.schedule`, `clock.monotonicNow`, `deps.client.probeBackend`, `elapsedMs`, `nextBackendProbeStep`, `noteBackendObservation`, `pace.dispose`, `settle3`.

SHA-256 of the source span: `4e831d2ec10c9a2c38546b39754742ffa0ab5c795b93a2a6ab7e3170e5204277`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
