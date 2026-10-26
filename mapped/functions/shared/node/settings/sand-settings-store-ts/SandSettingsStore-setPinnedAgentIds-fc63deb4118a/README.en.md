# `_SandSettingsStore.setPinnedAgentIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688390-688392](../../../../../../../reference/runtime/host-main.cjs#L688390-L688392) | `method` | no | `ids` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688390-688392](../../../../../../../reference/runtime/host-main.cjs#L688390-L688392) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:688390

Calls written directly in this body: `new Set`, `this.loadForWrite`, `this.persist`.

SHA-256 of the source span: `f47d165f137d07c6868b3d2c8fb9843e23abfd453c40e96f479d7cc3b742785d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
