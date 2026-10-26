# `accountScopedSettingsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687646-687652](../../../../../../../reference/runtime/host-main.cjs#L687646-L687652) | `FunctionDeclaration` | no | `settings` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687646-687652](../../../../../../../reference/runtime/host-main.cjs#L687646-L687652) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:687646

Calls written directly in this body: `accountScopedSettingsSchema.parse`, `copyAccountScopedSetting`.

SHA-256 of the source span: `7cb805f322a454220fc846f7ae4aa3f030d9935787bef12d899bc7bb2d241c8a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
