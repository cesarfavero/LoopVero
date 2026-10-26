# `openSqliteForSalvage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717441-717452](../../../../../../reference/runtime/host-main.cjs#L717441-L717452) | `FunctionDeclaration` | no | `options2` |
| [state-worker:849-860](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L849-L860) | `FunctionDeclaration` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717441-717452](../../../../../../reference/runtime/host-main.cjs#L717441-L717452) | 1 | 0 | 0 | 3 | 0 | 1 |
| [state-worker:849-860](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L849-L860) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:717441

Calls written directly in this body: `checkSandDataDatabaseSync`, `db.close`, `openSqliteForSalvageInPlace`, `reportFallback`.

SHA-256 of the source span: `4804df30e1dd67b4c05d0077f874081b577f67f8a6d5b5b4a18e695a1dd2a2a6`.

### state-worker:849

Calls written directly in this body: `checkSandDataDatabaseSync`, `db.close`, `openSqliteForSalvageInPlace`, `reportFallback`.

SHA-256 of the source span: `d519173ca856a3ab782039903c8f598ffb5c4324507e6eaf2754233fe7a550a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
