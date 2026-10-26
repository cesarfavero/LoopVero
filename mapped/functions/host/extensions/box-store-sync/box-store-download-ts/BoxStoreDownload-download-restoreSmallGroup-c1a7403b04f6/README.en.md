# `BoxStoreDownload.download/restoreSmallGroup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477926-477970](../../../../../../../reference/runtime/host-main.cjs#L477926-L477970) | `ArrowFunctionExpression` | yes | `group, pending` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477926-477970](../../../../../../../reference/runtime/host-main.cjs#L477926-L477970) | 3 | 4 | 3 | 3 | 0 | 2 |

### host:477926

Calls written directly in this body: `byteBudget.acquire`, `byteBudget.release`, `copyInFailureOf`, `destinationPaths.get`, `errorMessage`, `recordFailure`, `reportProgress`, `sha256Hex`, `store.get`, `writeVerifiedBytes`.

Assignment or increment targets: `blob`, `bytes`, `files`, `verified`.

SHA-256 of the source span: `5d5888e8ce1552090bebc05c88f9cd103b7dc0ba4c13c307b6cd626a1b10cb2c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
