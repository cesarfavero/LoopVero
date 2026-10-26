# `SettingsService.listSidebarSections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/settings/settings-service.ts` · [Module README](../../../../../../modules/host/extensions/settings/settings-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728759-728761](../../../../../../../reference/runtime/host-main.cjs#L728759-L728761) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728759-728761](../../../../../../../reference/runtime/host-main.cjs#L728759-L728761) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:728759

Calls written directly in this body: `this.store.getSidebarSections`.

SHA-256 of the source span: `149af6a15fa191c0c90897d6c7dddb6c5f585b5b1944d90eb3bff2b7ce97e0dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
