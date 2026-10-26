# `_SidebarSections.assignAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/settings/sidebar-sections.ts` · [Module README](../../../../../modules/shared/settings/sidebar-sections-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687471-687485](../../../../../../reference/runtime/host-main.cjs#L687471-L687485) | `method` | no | `sections, agentIds, sectionId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687471-687485](../../../../../../reference/runtime/host-main.cjs#L687471-L687485) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:687471

Calls written directly in this body: `_SidebarSections.normalize`, `new Set`, `normalized.map`, `normalized.some`, `stripped.map`.

SHA-256 of the source span: `a88aa285655e6cf799f12d8591903cfaad68c8e60b5e842fadcec8e77ae08dbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
