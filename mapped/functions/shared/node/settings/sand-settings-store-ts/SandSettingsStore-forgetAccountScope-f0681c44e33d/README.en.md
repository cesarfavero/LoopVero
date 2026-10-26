# `_SandSettingsStore.forgetAccountScope`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688135-688140](../../../../../../../reference/runtime/host-main.cjs#L688135-L688140) | `method` | no | `accountScope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688135-688140](../../../../../../../reference/runtime/host-main.cjs#L688135-L688140) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:688135

Calls written directly in this body: `this.loadForWrite`, `this.persist`.

SHA-256 of the source span: `fca90b8c018377d31afc3486568dfbe7e4518cd8f6f56cbaba2c04ba2dafb6a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
