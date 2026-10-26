# `makeInFlightByteBudget/acquire`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478333-478342](../../../../../../../reference/runtime/host-main.cjs#L478333-L478342) | `FunctionExpression` | yes | `byteCount` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478333-478342](../../../../../../../reference/runtime/host-main.cjs#L478333-L478342) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:478333

Calls written directly in this body: `new Promise`.

Assignment or increment targets: `inFlightBytes`.

SHA-256 of the source span: `14192104e8a769fbbb2813d99fa9e42f8c3f89c5d4086c81b46de652bb85b9a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
