# `_SidebarSections.carryFolds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/settings/sidebar-sections.ts` · [Module README](../../../../../modules/shared/settings/sidebar-sections-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687486-687500](../../../../../../reference/runtime/host-main.cjs#L687486-L687500) | `method` | no | `{     sections,     stored = []   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687486-687500](../../../../../../reference/runtime/host-main.cjs#L687486-L687500) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:687486

Calls written directly in this body: `.map`, `_SidebarSections.normalize`, `foldBySectionId.set`, `new Map`, `section.id.trim`.

SHA-256 of the source span: `5ba5315118f6a467df485591b60d3adb8c73d84dcf2c71e5aa0742b43eb3d529`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
