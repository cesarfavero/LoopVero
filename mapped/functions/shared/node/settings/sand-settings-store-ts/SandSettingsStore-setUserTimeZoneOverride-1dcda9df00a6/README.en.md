# `_SandSettingsStore.setUserTimeZoneOverride`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688172-688176](../../../../../../../reference/runtime/host-main.cjs#L688172-L688176) | `method` | no | `timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688172-688176](../../../../../../../reference/runtime/host-main.cjs#L688172-L688176) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:688172

Calls written directly in this body: `storedSandSettingText`, `this.loadForWrite`, `this.persist`.

SHA-256 of the source span: `d2b103480eb5a0c0c5250fc3386a46b993b48669781c86fbdb457b725718978b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
