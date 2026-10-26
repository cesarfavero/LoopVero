# `removeSqliteDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717367-717381](../../../../../../reference/runtime/host-main.cjs#L717367-L717381) | `FunctionDeclaration` | no | `options2` |
| [state-worker:775-789](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L775-L789) | `FunctionDeclaration` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717367-717381](../../../../../../reference/runtime/host-main.cjs#L717367-L717381) | 0 | 1 | 0 | 0 | 0 | 0 |
| [state-worker:775-789](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L775-L789) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:717367

Calls written directly in this body: `removePathWithRetries`.

SHA-256 of the source span: `c27485867914acbb3e708a1462ec7993841de1c03ae3e51cc5b40b4d9b8e1feb`.

### state-worker:775

Calls written directly in this body: `removePathWithRetries`.

SHA-256 of the source span: `80999ef48ca7d1fd01300b332111e8e5281ca5496c2a83c8b1ba7c949fdfb2db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
