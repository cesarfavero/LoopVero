# `BoxStoreDownload.download/restoreLargeGroup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478094-478105](../../../../../../../reference/runtime/host-main.cjs#L478094-L478105) | `ArrowFunctionExpression` | yes | `group, pending` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478094-478105](../../../../../../../reference/runtime/host-main.cjs#L478094-L478105) | 2 | 1 | 2 | 0 | 0 | 0 |

### host:478094

Calls written directly in this body: `copyLargeToPath`, `destinationPaths.get`, `restoreLargeToPath`.

Assignment or increment targets: `restoredPath`.

SHA-256 of the source span: `06b918b504516a4c09e99d086f047515d7ef68837afe91045d20c6efdc9234a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
