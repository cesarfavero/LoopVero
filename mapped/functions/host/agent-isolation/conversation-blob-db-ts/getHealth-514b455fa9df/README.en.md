# `getHealth`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-db.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:1021-1027](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1021-L1027) | `FunctionDeclaration` | no | `db` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1021-1027](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1021-L1027) | 1 | 0 | 0 | 2 | 0 | 1 |

### state-worker:1021

Calls written directly in this body: `isSqliteCorruptError`, `runQuickCheck`.

SHA-256 of the source span: `56ad4292bd9bdee9c1b124e7b7fbb7c95de0b806fa413c61b9e5b08c4eaff46e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
