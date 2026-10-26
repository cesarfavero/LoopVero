# `makeInFlightByteBudget/release`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478343-478347](../../../../../../../reference/runtime/host-main.cjs#L478343-L478347) | `FunctionExpression` | no | `byteCount` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478343-478347](../../../../../../../reference/runtime/host-main.cjs#L478343-L478347) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:478343

Calls written directly in this body: `Math.max`, `admitWaiters`.

Assignment or increment targets: `inFlightBytes`.

SHA-256 of the source span: `c7f56a9bfb7796badab2e08fe8085079e3e794c9342cf77d251566a7b834ce8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
