# `readTranscriptTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/session/agent-db-transcript-pages.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-transcript-pages-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718161-718191](../../../../../../../reference/runtime/host-main.cjs#L718161-L718191) | `FunctionDeclaration` | no | `statements, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718161-718191](../../../../../../../reference/runtime/host-main.cjs#L718161-L718191) | 10 | 1 | 0 | 1 | 0 | 0 |

### host:718161

Calls written directly in this body: `Math.max`, `Math.min`, `Number.isFinite`, `Number.isInteger`, `alignTranscriptWindowStart`, `isUnreadBoundary`, `new Map`, `parseTranscriptEntry`, `parsed2.push`, `readCloudAgentPeerIds`, `readUnreadAnchor`, `rows.toReversed`, `seqByEntry.get`, `seqByEntry.set`, `statements.listTranscriptTail.all`.

SHA-256 of the source span: `777a9c0d4841f2e10108f3960bdbd815ae6aede44d8e21810e2df118f5f6fbe9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
