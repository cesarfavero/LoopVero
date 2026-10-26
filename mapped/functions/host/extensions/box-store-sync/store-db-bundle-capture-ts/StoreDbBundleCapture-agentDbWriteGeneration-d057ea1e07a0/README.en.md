# `StoreDbBundleCapture.agentDbWriteGeneration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480228-480230](../../../../../../../reference/runtime/host-main.cjs#L480228-L480230) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480228-480230](../../../../../../../reference/runtime/host-main.cjs#L480228-L480230) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:480228

Calls written directly in this body: `args.relPath.endsWith`, `this.getWriteGeneration`.

SHA-256 of the source span: `0cc5112b4566ba304dd198ecc078c1f148afa5a3d56e3da0ad073415457c43e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
