# `findLatestRootBlobIdInDatabase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22339-22359](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22339-L22359) | `FunctionDeclaration` | no | `db` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22339-22359](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22339-L22359) | 4 | 2 | 0 | 1 | 0 | 0 |

### state-worker:22339

Calls written directly in this body: `blobStatement.iterate`, `db.prepare`, `fromHex`, `idStatement.iterate`, `isBetterRoot`, `new Set`, `presentIds.add`, `scoreRootCandidate`.

Assignment or increment targets: `bestId`, `bestScore`.

SHA-256 of the source span: `e397bc6cc0ed29e34ecba71616a33a9df2403a331d50888ccb218fcb97e6ce84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
