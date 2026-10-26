# `buildCopyInStatusFromResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482768-482786](../../../../../../../reference/runtime/host-main.cjs#L482768-L482786) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482768-482786](../../../../../../../reference/runtime/host-main.cjs#L482768-L482786) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:482768

Calls written directly in this body: `bucketCopyInReason`, `classifyCopyInFailure`, `classifyCopyInMeteredOutcome`, `redactCopyInErrorForTelemetry`.

SHA-256 of the source span: `44732a8fff0953c4ce043d4e3071dbef3b3fe781eab1a8129c87ab11e6459c11`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
