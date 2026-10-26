# `executeBoxCopyInFromEnv/reportCopyIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483382-483401](../../../../../../../reference/runtime/host-main.cjs#L483382-L483401) | `ArrowFunctionExpression` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483382-483401](../../../../../../../reference/runtime/host-main.cjs#L483382-L483401) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:483382

Calls written directly in this body: `Date.now`, `brandLiteralEnum`, `bucketCopyInReason`, `classifyCopyInFailure`, `logFields`, `telemetry.reportBoxCopyIn`.

SHA-256 of the source span: `48a5c544d02caf4392ccc780ec4f85539b04afeac501500f62271b8e18df1ac8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
