# `BoxStoreTransfer.sweepLeakedTemps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479868-479889](../../../../../../../reference/runtime/host-main.cjs#L479868-L479889) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479868-479889](../../../../../../../reference/runtime/host-main.cjs#L479868-L479889) | 2 | 2 | 1 | 1 | 0 | 1 |

### host:479868

Calls written directly in this body: `.map`, `absPath.includes`, `dedupeNestedRoots`, `this.deps.categories.filter`, `walkNodes`.

Assignment or increment targets: `removed`.

SHA-256 of the source span: `3215fe90e28048dc4939631f077e9f5ca9340ed24e63182c5d95cfb47c88ff44`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
