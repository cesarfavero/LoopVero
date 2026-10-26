# `boxStoreManifestConflictTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-store-sync-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-store-sync-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:455926-455945](../../../../../../../reference/runtime/host-main.cjs#L455926-L455945) | `FunctionDeclaration` | no | `info2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455926-455945](../../../../../../../reference/runtime/host-main.cjs#L455926-L455945) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:455926

Calls written directly in this body: `brandedId`, `brandedOrInvalidId`, `logFields`.

SHA-256 of the source span: `e8e19547fef2da8fd14bcde16e225b5a46ba6f1e6d9f57bd3cf981d62004de34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
