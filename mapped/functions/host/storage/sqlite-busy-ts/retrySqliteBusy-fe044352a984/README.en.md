# `retrySqliteBusy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-busy.ts` · [Module README](../../../../../modules/host/storage/sqlite-busy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480296-480317](../../../../../../reference/runtime/host-main.cjs#L480296-L480317) | `FunctionDeclaration` | yes | `operation, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480296-480317](../../../../../../reference/runtime/host-main.cjs#L480296-L480317) | 2 | 1 | 2 | 1 | 2 | 1 |

### host:480296

Calls written directly in this body: `Math.max`, `backoff2.schedule`, `createRetryPolicy`, `isSqliteBusyError`, `operation`.

Assignment or increment targets: `attempt`, `lastError`.

Explicit throw targets: `error64`, `lastError`.

SHA-256 of the source span: `cfe89cc16be2022d3fce3dd806aa145b48a73e7d4d912d34b9ed8d1d94275176`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
