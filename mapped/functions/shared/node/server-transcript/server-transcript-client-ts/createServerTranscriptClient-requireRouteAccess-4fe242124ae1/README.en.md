# `createServerTranscriptClient/requireRouteAccess`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-client.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712410-712417](../../../../../../../reference/runtime/host-main.cjs#L712410-L712417) | `ArrowFunctionExpression` | yes | `{ agentId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712410-712417](../../../../../../../reference/runtime/host-main.cjs#L712410-L712417) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:712410

Calls written directly in this body: `deps.requiredAgents.has`, `new ServerTranscriptTailDisabledError`, `requireAccess`.

Explicit throw targets: `ServerTranscriptTailDisabledError`.

SHA-256 of the source span: `5e0316519d5b9333a4a2f9017f2594ac4f5ca422ec357a659140e4d4f2ba4385`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
