# `nextEntryId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-entry-ids.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-entry-ids-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734324-734351](../../../../../../../reference/runtime/host-main.cjs#L734324-L734351) | `FunctionDeclaration` | no | `entries, kind, storedIds = getTranscriptStoredIds(entries)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734324-734351](../../../../../../../reference/runtime/host-main.cjs#L734324-L734351) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:734324

Calls written directly in this body: `countTrailingAssistantMessages`, `countTrailingSendMessages`, `countTrailingUserAttachments`, `countUserMessages`, `entries.map`, `existingIds.add`, `firstUnusedId`, `new Set`.

SHA-256 of the source span: `0e839979a56fa47f8530ca5170440508f2f260bac57c5da5fdc83efd5bf7d6f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
