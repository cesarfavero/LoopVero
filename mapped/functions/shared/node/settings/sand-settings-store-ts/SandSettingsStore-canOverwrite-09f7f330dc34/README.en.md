# `_SandSettingsStore.canOverwrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687903-687906](../../../../../../../reference/runtime/host-main.cjs#L687903-L687906) | `method` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687903-687906](../../../../../../../reference/runtime/host-main.cjs#L687903-L687906) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:687903

Calls written directly in this body: `parseJsonOrUndefined`, `persistedSettingsSchema.safeParse`.

SHA-256 of the source span: `3f62a25f1fbc2f8227cf428800b68f0e697b9acb9deb0cff78d49ded0a52cad0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
