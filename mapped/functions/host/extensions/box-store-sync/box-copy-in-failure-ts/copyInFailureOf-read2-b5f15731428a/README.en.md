# `copyInFailureOf/read2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in-failure.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473956-473987](../../../../../../../reference/runtime/host-main.cjs#L473956-L473987) | `ArrowFunctionExpression` | no | `error65` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473956-473987](../../../../../../../reference/runtime/host-main.cjs#L473956-L473987) | 9 | 1 | 0 | 6 | 0 | 0 |

### host:473956

Calls written directly in this body: `isCopyInNativeCode`, `read2`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `efee5ad2594e93da620bd08c05f6b4370de73846306f0bc2fb1e45779499e9ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
