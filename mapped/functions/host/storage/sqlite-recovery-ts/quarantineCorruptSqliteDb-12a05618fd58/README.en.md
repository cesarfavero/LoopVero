# `quarantineCorruptSqliteDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717382-717440](../../../../../../reference/runtime/host-main.cjs#L717382-L717440) | `FunctionDeclaration` | no | `options2` |
| [state-worker:790-848](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L790-L848) | `FunctionDeclaration` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717382-717440](../../../../../../reference/runtime/host-main.cjs#L717382-L717440) | 4 | 2 | 0 | 3 | 0 | 5 |
| [state-worker:790-848](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L790-L848) | 4 | 2 | 0 | 3 | 0 | 5 |

### host:717382

Calls written directly in this body: `.replace`, `.toISOString`, `copySandDataFileSync`, `new Date`, `removeSandDataFileSync`, `removeSqliteDb`, `removeSqliteSidecars`.

Assignment or increment targets: `copied`.

SHA-256 of the source span: `7c94b53b685a783fbd2937d787b7e8962424d2fa37049161ffb397d27a82faa9`.

### state-worker:790

Calls written directly in this body: `.replace`, `.toISOString`, `copySandDataFileSync`, `new Date`, `removeSandDataFileSync`, `removeSqliteDb`, `removeSqliteSidecars`.

Assignment or increment targets: `copied`.

SHA-256 of the source span: `9ed29c33606a01d0dc3a3f89a280cbbd3b91570b4620ebcca23bfe6bebab063f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
