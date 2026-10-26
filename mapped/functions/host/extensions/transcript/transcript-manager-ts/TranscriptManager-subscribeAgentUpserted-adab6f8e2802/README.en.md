# `TranscriptManager.subscribeAgentUpserted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783406-783408](../../../../../../../reference/runtime/host-main.cjs#L783406-L783408) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783406-783408](../../../../../../../reference/runtime/host-main.cjs#L783406-L783408) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783406

Calls written directly in this body: `this.roster.subscribeAgentUpserted`.

SHA-256 of the source span: `3e5c39ebcd20c7d4695d448e53eda4f8746bbc48d811e57f31f8c80bc0f335b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
