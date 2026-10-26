# `BoxStoreManifestStore.ancestorRefCounts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477082-477091](../../../../../../../reference/runtime/host-main.cjs#L477082-L477091) | `method` | no | `manifest` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477082-477091](../../../../../../../reference/runtime/host-main.cjs#L477082-L477091) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:477082

Calls written directly in this body: `manifest.keys`, `new Map`, `this.adjustAncestorRefCounts`, `this.manifestAncestorRefCounts.get`, `this.manifestAncestorRefCounts.set`.

Assignment or increment targets: `counts`.

SHA-256 of the source span: `71a540b24608d928be111950fdc468a1b49422840fc37f137954278b8ebbe8da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
