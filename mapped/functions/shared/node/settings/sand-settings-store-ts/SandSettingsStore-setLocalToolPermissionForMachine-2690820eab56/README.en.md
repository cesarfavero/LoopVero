# `_SandSettingsStore.setLocalToolPermissionForMachine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688367-688369](../../../../../../../reference/runtime/host-main.cjs#L688367-L688369) | `method` | no | `machineId, permission` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688367-688369](../../../../../../../reference/runtime/host-main.cjs#L688367-L688369) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:688367

Calls written directly in this body: `this.setLocalToolPermissionsForMachines`.

SHA-256 of the source span: `c1384a3cb50f09fa395e34d58424ca0687e9a02871bcd90c67ba5e557c7d7054`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
