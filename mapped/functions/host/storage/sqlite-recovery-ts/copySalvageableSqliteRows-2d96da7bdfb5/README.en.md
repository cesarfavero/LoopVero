# `copySalvageableSqliteRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717507-717550](../../../../../../reference/runtime/host-main.cjs#L717507-L717550) | `FunctionDeclaration` | no | `source, selectSql, insert, toParams, log5` |
| [state-worker:915-958](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L915-L958) | `FunctionDeclaration` | no | `source, selectSql, insert, toParams, log` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717507-717550](../../../../../../reference/runtime/host-main.cjs#L717507-L717550) | 3 | 1 | 0 | 2 | 0 | 4 |
| [state-worker:915-958](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L915-L958) | 3 | 1 | 0 | 2 | 0 | 4 |

### host:717507

Calls written directly in this body: `insert.run`, `isUnknownRecord2`, `iterator.next`, `iterator.return`, `log5`, `pinnedRowIterator`, `source.prepare`, `toParams`.

Assignment or increment targets: `copied`, `iterator`, `next`, `skipped2`, `tail`.

SHA-256 of the source span: `f304c25bf631a33c095790df65e7fffe3846a81c17205758be9cdbde93fecf25`.

### state-worker:915

Calls written directly in this body: `insert.run`, `isUnknownRecord`, `iterator.next`, `iterator.return`, `log`, `pinnedRowIterator`, `source.prepare`, `toParams`.

Assignment or increment targets: `copied`, `iterator`, `next`, `skipped`, `tail`.

SHA-256 of the source span: `e89661dba84c4f4b655b6b64398ac667890d84586b2a18884b34bece2474fd06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
