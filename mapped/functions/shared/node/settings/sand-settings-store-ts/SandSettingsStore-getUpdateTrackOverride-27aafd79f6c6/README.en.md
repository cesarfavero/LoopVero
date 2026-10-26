# `_SandSettingsStore.getUpdateTrackOverride`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688044-688057](../../../../../../../reference/runtime/host-main.cjs#L688044-L688057) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688044-688057](../../../../../../../reference/runtime/host-main.cjs#L688044-L688057) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:688044

Calls written directly in this body: `coerceToEnabledTrack`, `this.load`, `this.setUpdateTrackOverride`.

SHA-256 of the source span: `42ecba8c2e270343fd0083c02597eddb7a082ccfe2e873258d45e63055c56da0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
