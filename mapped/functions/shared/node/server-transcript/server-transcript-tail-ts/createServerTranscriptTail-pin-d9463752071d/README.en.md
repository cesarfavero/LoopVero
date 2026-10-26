# `createServerTranscriptTail/pin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713003-713007](../../../../../../../reference/runtime/host-main.cjs#L713003-L713007) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713003-713007](../../../../../../../reference/runtime/host-main.cjs#L713003-L713007) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:713003

Calls written directly in this body: `deps.log`.

Assignment or increment targets: `mountedAgentId`.

SHA-256 of the source span: `ee615330af8f82d76c80bf44555fd19d7b1fa655cf55cd4e3c62963f7db4a1c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
