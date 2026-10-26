# `BoxStoreDownload.download/replaceDestinationWithTemp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477760-477786](../../../../../../../reference/runtime/host-main.cjs#L477760-L477786) | `ArrowFunctionExpression` | yes | `parent, tempName, name18, symlinkOrdinal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477760-477786](../../../../../../../reference/runtime/host-main.cjs#L477760-L477786) | 4 | 0 | 6 | 0 | 0 | 0 |

### host:477760

Calls written directly in this body: `destination.isDirectory`, `entryOf`, `inspectDestination`, `removeTreeNoFollow`, `runSymlinkStep`.

SHA-256 of the source span: `fc16ea755ff81557e69565cdcc858b974da5fd31eba70433ffcae031e3462686`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
