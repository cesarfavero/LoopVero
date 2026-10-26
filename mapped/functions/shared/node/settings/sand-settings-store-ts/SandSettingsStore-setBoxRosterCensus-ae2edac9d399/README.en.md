# `_SandSettingsStore.setBoxRosterCensus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688353-688358](../../../../../../../reference/runtime/host-main.cjs#L688353-L688358) | `method` | no | `census` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688353-688358](../../../../../../../reference/runtime/host-main.cjs#L688353-L688358) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:688353

Calls written directly in this body: `this.loadForWrite`, `this.persist`.

SHA-256 of the source span: `46e7ec456c5f78b81eb8b19b59b421a2a200811d11eac34dc9c37d834baf32e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
