# `isSqliteCorruptError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-busy.ts` · [Module README](../../../../../modules/host/storage/sqlite-busy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480292-480295](../../../../../../reference/runtime/host-main.cjs#L480292-L480295) | `FunctionDeclaration` | no | `error64` |
| [state-worker:701-704](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L701-L704) | `FunctionDeclaration` | no | `error` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480292-480295](../../../../../../reference/runtime/host-main.cjs#L480292-L480295) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:701-704](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L701-L704) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:480292

Calls written directly in this body: `sqlitePrimaryCode`.

SHA-256 of the source span: `f4f23e7690767b9ea1201aa9525d774351256e7f3282d914ffe0991deab77d57`.

### state-worker:701

Calls written directly in this body: `sqlitePrimaryCode`.

SHA-256 of the source span: `ff5b4b0551942bc42edab7834a6527ed7ffe3ffb286b47807c8a20e0acadba39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
