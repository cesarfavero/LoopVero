# `SandBoxStoreServiceObjectStore.putContentAddressed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474921-474948](../../../../../../../reference/runtime/host-main.cjs#L474921-L474948) | `method` | yes | `key, bytes, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474921-474948](../../../../../../../reference/runtime/host-main.cjs#L474921-L474948) | 3 | 0 | 3 | 1 | 1 | 0 |

### host:474921

Calls written directly in this body: `BigInt`, `assertWorkingStateContentAddressedKeyMatchesSha`, `classifyConditionalPutStatus`, `new SandBoxStoreSyncError`, `putOnce`, `sha256Hex`, `this.presignWrite`.

Assignment or increment targets: `response`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `5c0aea81c2642fbe1df30047094a80114f867ea74184932e1ca5ce33e8ee6bb1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
