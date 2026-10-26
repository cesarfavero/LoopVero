# `makeInFlightByteBudget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478320-478349](../../../../../../../reference/runtime/host-main.cjs#L478320-L478349) | `FunctionDeclaration` | no | `budgetBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478320-478349](../../../../../../../reference/runtime/host-main.cjs#L478320-L478349) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:478320

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8f345b88876273609ba03c25339c2b97a4e55e418e7b12cb267e7673a9d7b8e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
