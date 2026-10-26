# `_SandSettingsStore.load`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687780-687861](../../../../../../../reference/runtime/host-main.cjs#L687780-L687861) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687780-687861](../../../../../../../reference/runtime/host-main.cjs#L687780-L687861) | 22 | 0 | 0 | 4 | 0 | 1 |

### host:687780

Calls written directly in this body: `JSON.parse`, `_SandSettingsStore.storable`, `accountScopedSettingsOf`, `emptySettings`, `new Set`, `normalizeMcpCustomInstructions`, `normalizeMcpCustomInstructionsByServerId`, `normalizeMcpDisabledToolsByServerId`, `persistedSettingsSchema.safeParse`, `this.readText`, `this.refusalsLogged.clear`, `this.reportUnreadable`.

Assignment or increment targets: `cause`, `json3`, `this.readRefused`, `this.unreadable`.

SHA-256 of the source span: `757983dd3a6f1b334e34028069e5ce171a11aa23a38c07d11cb37a322d49ff02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
