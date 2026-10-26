# `_SandSettingsStore.setToolPermissions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688305-688310](../../../../../../../reference/runtime/host-main.cjs#L688305-L688310) | `method` | no | `permissions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688305-688310](../../../../../../../reference/runtime/host-main.cjs#L688305-L688310) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:688305

Calls written directly in this body: `Object.keys`, `rawToolPermissionsWith`, `this.load`, `this.persist`.

SHA-256 of the source span: `4f32ab52674f74b673dfe0deea3247045d0ad2de487811fda7bfd5249e250dcc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
