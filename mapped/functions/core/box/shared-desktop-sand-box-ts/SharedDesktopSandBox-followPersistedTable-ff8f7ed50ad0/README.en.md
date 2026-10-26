# `SharedDesktopSandBox.followPersistedTable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554520-554528](../../../../../../reference/runtime/host-main.cjs#L554520-L554528) | `method` | no | `loaded` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554520-554528](../../../../../../reference/runtime/host-main.cjs#L554520-L554528) | 2 | 1 | 0 | 0 | 0 | 0 |

### host:554520

Calls written directly in this body: `loaded.assignments.get`, `this.adoptUnseatedAssignments`, `this.dropCachedSeat`, `this.establishedForks.has`.

SHA-256 of the source span: `d0c2a685581fa0206946533f19eb9ec11b75dcda5764c0e8b70a67a8b787cbac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
