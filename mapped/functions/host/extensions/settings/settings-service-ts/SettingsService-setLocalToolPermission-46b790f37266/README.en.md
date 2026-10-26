# `SettingsService.setLocalToolPermission`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/settings/settings-service.ts` · [Module README](../../../../../../modules/host/extensions/settings/settings-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728746-728752](../../../../../../../reference/runtime/host-main.cjs#L728746-L728752) | `method` | no | `permission, machineId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728746-728752](../../../../../../../reference/runtime/host-main.cjs#L728746-L728752) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:728746

Calls written directly in this body: `this.store.setLocalToolPermission`, `this.store.setLocalToolPermissionForMachine`.

SHA-256 of the source span: `dff66905cb204958b7f0fd8d25c52dfcd053b3218b536f5e109003f73a9697b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
