# `storeIdField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-store-sync-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-store-sync-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:455965-455967](../../../../../../../reference/runtime/host-main.cjs#L455965-L455967) | `FunctionDeclaration` | no | `storeId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455965-455967](../../../../../../../reference/runtime/host-main.cjs#L455965-L455967) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:455965

Calls written directly in this body: `brandedOrInvalidId`.

SHA-256 of the source span: `03ea3395b3bbe6b914a432239d51bc2c6df17cef1016a2671c8b61c9c1a04690`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
