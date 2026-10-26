# `_SidebarSections.areEqual`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/settings/sidebar-sections.ts` · [Module README](../../../../../modules/shared/settings/sidebar-sections-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687458-687463](../../../../../../reference/runtime/host-main.cjs#L687458-L687463) | `method` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687458-687463](../../../../../../reference/runtime/host-main.cjs#L687458-L687463) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:687458

Calls written directly in this body: `left.every`.

SHA-256 of the source span: `3a5d40e7278ade3b17192929c9b31c8648c29de8b996786c9d4815d372cfd0ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
