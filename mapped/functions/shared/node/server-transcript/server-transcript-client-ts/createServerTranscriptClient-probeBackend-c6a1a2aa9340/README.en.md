# `createServerTranscriptClient/probeBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-client.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712441-712454](../../../../../../../reference/runtime/host-main.cjs#L712441-L712454) | `FunctionExpression` | yes | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712441-712454](../../../../../../../reference/runtime/host-main.cjs#L712441-L712454) | 4 | 0 | 1 | 4 | 1 | 1 |

### host:712441

Calls written directly in this body: `fetchBackendRouteStatus`, `isBackendDownError`, `isBackendDownStatus`, `lastBaseUrl.replace`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `b2155ce821ecec1ce004b84e46d99e46d477443173a023f897bb5d521ec35f96`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
