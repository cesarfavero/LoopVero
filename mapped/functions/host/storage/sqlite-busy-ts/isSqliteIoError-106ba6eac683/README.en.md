# `isSqliteIoError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-busy.ts` · [Module README](../../../../../modules/host/storage/sqlite-busy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480286-480288](../../../../../../reference/runtime/host-main.cjs#L480286-L480288) | `FunctionDeclaration` | no | `error64` |
| [state-worker:695-697](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L695-L697) | `FunctionDeclaration` | no | `error` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480286-480288](../../../../../../reference/runtime/host-main.cjs#L480286-L480288) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:695-697](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L695-L697) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:480286

Calls written directly in this body: `sqlitePrimaryCode`.

SHA-256 of the source span: `520f516b23a80e4c675f2d2923c0a4f0622b334930f7bbc8ed23d64213b241c5`.

### state-worker:695

Calls written directly in this body: `sqlitePrimaryCode`.

SHA-256 of the source span: `c76d1460c0980f17eb0a201fa316b99c6b71def6244314d1ead86fa8deb415a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
