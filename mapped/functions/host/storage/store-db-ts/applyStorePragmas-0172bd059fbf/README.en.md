# `applyStorePragmas`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/store-db.ts` · [Module README](../../../../../modules/host/storage/store-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478857-478868](../../../../../../reference/runtime/host-main.cjs#L478857-L478868) | `FunctionDeclaration` | no | `db, options2` |
| [state-worker:734-745](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L734-L745) | `FunctionDeclaration` | no | `db, options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478857-478868](../../../../../../reference/runtime/host-main.cjs#L478857-L478868) | 2 | 0 | 0 | 0 | 1 | 1 |
| [state-worker:734-745](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L734-L745) | 2 | 0 | 0 | 0 | 1 | 1 |

### host:478857

Calls written directly in this body: `db.exec`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `5bc9fb9bf6dec730b134248a307b0eda2867b26194b6fee1cae859b8b9b87300`.

### state-worker:734

Calls written directly in this body: `db.exec`.

Explicit throw targets: `error`.

SHA-256 of the source span: `4193d56e82bf733332fc677f30eab26c5e33a2da9b23f67f414460490626d909`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
