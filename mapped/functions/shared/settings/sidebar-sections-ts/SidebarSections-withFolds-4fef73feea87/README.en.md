# `_SidebarSections.withFolds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/settings/sidebar-sections.ts` · [Module README](../../../../../modules/shared/settings/sidebar-sections-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687464-687470](../../../../../../reference/runtime/host-main.cjs#L687464-L687470) | `method` | no | `sections, collapsedSectionIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687464-687470](../../../../../../reference/runtime/host-main.cjs#L687464-L687470) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:687464

Calls written directly in this body: `new Set`, `sections.map`.

SHA-256 of the source span: `8afdb0dd13c3cf793df927b017e68446fd4eca2b5caa3396c2ec99330e2cdf3c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
