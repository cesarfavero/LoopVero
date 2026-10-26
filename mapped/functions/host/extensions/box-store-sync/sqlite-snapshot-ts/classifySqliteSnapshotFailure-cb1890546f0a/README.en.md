# `classifySqliteSnapshotFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sqlite-snapshot.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sqlite-snapshot-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480330-480367](../../../../../../../reference/runtime/host-main.cjs#L480330-L480367) | `FunctionDeclaration` | no | `error64, operation, pathStage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480330-480367](../../../../../../../reference/runtime/host-main.cjs#L480330-L480367) | 20 | 0 | 0 | 1 | 0 | 0 |

### host:480330

Calls written directly in this body: `Number.isSafeInteger`, `brandedErrno`, `findSystemErrno`, `isSqliteBusyError`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`.

Assignment or increment targets: `cause`, `errorClass`, `resolvedPathStage`.

SHA-256 of the source span: `9fed4f7d1c3df3e10d855e601d195d79fd030d4a7fb9b30e071b786f4db35e39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
