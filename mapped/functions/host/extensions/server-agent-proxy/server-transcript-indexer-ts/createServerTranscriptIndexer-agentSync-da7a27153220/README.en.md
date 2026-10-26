# `createServerTranscriptIndexer/agentSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714183-714196](../../../../../../../reference/runtime/host-main.cjs#L714183-L714196) | `ArrowFunctionExpression` | no | `current2, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714183-714196](../../../../../../../reference/runtime/host-main.cjs#L714183-L714196) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:714183

Calls written directly in this body: `current2.agents.get`, `current2.agents.set`.

SHA-256 of the source span: `8b3d8493969e37e69df6e3f4af83e14f065c3e9701f3ba7663c06ad29f7fc392`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
