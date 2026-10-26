# `SandBoxStoreServiceProvider.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474777-474782](../../../../../../../reference/runtime/host-main.cjs#L474777-L474782) | `method` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474777-474782](../../../../../../../reference/runtime/host-main.cjs#L474777-L474782) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:474777

Calls written directly in this body: `createSandBoxStoreServiceClient`.

Assignment or increment targets: `this.client`, `this.manifestCommit`, `this.multipartPartSizeBytes`, `this.multipartThresholdBytes`.

SHA-256 of the source span: `863c6f0916405e37cbc9d57e1b3158b93ccca2a573f3d4600355407da3572fe4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
