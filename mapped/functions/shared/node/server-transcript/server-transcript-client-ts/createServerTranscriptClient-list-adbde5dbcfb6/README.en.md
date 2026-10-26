# `createServerTranscriptClient/list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-client.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712459-712467](../../../../../../../reference/runtime/host-main.cjs#L712459-L712467) | `FunctionExpression` | yes | `request5, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712459-712467](../../../../../../../reference/runtime/host-main.cjs#L712459-L712467) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:712459

Calls written directly in this body: `client.listGrokBotTranscriptEntries`, `clientFor`, `parseAgentId`, `requireRouteAccess`.

SHA-256 of the source span: `5d12f255213525593a1121c04b3279649ac8a11b03a9b5629dd86f47500af6ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
