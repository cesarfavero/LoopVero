# `makeInFlightByteBudget/admitWaiters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478323-478331](../../../../../../../reference/runtime/host-main.cjs#L478323-L478331) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478323-478331](../../../../../../../reference/runtime/host-main.cjs#L478323-L478331) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:478323

Calls written directly in this body: `head.admit`, `waiters.shift`.

Assignment or increment targets: `inFlightBytes`.

SHA-256 of the source span: `dbfcb92cc77f47d4b7e0c0f1cceeab8490f7e57496be3ffe1cb428c58daf1a6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
