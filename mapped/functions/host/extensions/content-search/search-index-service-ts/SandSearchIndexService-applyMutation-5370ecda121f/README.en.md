# `SandSearchIndexService.applyMutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542283-542305](../../../../../../../reference/runtime/host-main.cjs#L542283-L542305) | `method` | no | `mutation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542283-542305](../../../../../../../reference/runtime/host-main.cjs#L542283-L542305) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:542283

Calls written directly in this body: `this.agentNeedsReindex`, `this.agentRemoved`, `this.conversationCleared`, `this.entriesUpserted`, `this.entryDeleted`.

SHA-256 of the source span: `1686398369189a33a71febd01248125a4fb14787b072dce51a66148a150fcfab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
