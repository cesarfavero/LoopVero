# `findPendingRecovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-db.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:1355-1396](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1355-L1396) | `FunctionDeclaration` | no | `dbPath, recovery` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1355-1396](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1355-L1396) | 5 | 2 | 0 | 2 | 0 | 0 |

### state-worker:1355

Calls written directly in this body: `.sort`, `markerNames.at`, `markerNames.slice`, `name.endsWith`, `name.startsWith`, `names.filter`, `names.includes`, `quarantinePathFor`, `recovery.removeSqliteDb`, `removeSandDataFileSync`.

SHA-256 of the source span: `79e72454a0c544446937f009ed4bf37d86cb2ae609a1062d1f5a2ef997e53d9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
