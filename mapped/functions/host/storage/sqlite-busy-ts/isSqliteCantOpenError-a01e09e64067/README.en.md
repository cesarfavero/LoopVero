# `isSqliteCantOpenError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-busy.ts` · [Module README](../../../../../modules/host/storage/sqlite-busy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480289-480291](../../../../../../reference/runtime/host-main.cjs#L480289-L480291) | `FunctionDeclaration` | no | `error64` |
| [state-worker:698-700](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L698-L700) | `FunctionDeclaration` | no | `error` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480289-480291](../../../../../../reference/runtime/host-main.cjs#L480289-L480291) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:698-700](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L698-L700) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:480289

Calls written directly in this body: `sqlitePrimaryCode`.

SHA-256 of the source span: `abcbcf8db921f95123e4e49af5d413bbb5d5ac35a8a844bd9a2f45c08b6a6c0a`.

### state-worker:698

Calls written directly in this body: `sqlitePrimaryCode`.

SHA-256 of the source span: `3ed4e7bd0f81eeafabba86728a5e121f8cff0e9d54b8a9f57dae5d0691fe9b51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
