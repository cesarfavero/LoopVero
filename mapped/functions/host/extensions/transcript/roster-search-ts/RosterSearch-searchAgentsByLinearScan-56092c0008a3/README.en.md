# `RosterSearch.searchAgentsByLinearScan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-search.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739166-739190](../../../../../../../reference/runtime/host-main.cjs#L739166-L739190) | `method` | yes | `normalized, limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739166-739190](../../../../../../../reference/runtime/host-main.cjs#L739166-L739190) | 3 | 2 | 1 | 1 | 1 | 1 |

### host:739166

Calls written directly in this body: `getTranscript`, `isStoreUnreadable`, `results.push`, `results.slice`, `results.sort`, `this.tm.contentSearch.findTranscriptMatches`, `this.tm.getActiveAgentId`, `this.tm.sessionStore.listAgents`, `this.tm.sessionStore.readAgentTranscriptEntries`.

Assignment or increment targets: `entries`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `486e3381582b1ddd5af37ce7b7efb3a6206e67d822ae14070037f6c2412e0b19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
