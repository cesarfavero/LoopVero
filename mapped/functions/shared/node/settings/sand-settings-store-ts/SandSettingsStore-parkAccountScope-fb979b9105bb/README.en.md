# `_SandSettingsStore.parkAccountScope`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688121-688134](../../../../../../../reference/runtime/host-main.cjs#L688121-L688134) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688121-688134](../../../../../../../reference/runtime/host-main.cjs#L688121-L688134) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:688121

Calls written directly in this body: `accountScopedSettingsOf`, `this.clearAccountScope`, `this.loadForWrite`, `this.persist`.

SHA-256 of the source span: `055fd0a5e89e9e003db9653399c65fd6b119150bbc6a4609859f4b688d08babc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
