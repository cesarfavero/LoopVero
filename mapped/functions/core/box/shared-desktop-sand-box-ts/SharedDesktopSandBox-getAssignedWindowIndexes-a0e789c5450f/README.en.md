# `SharedDesktopSandBox.getAssignedWindowIndexes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555153-555156](../../../../../../reference/runtime/host-main.cjs#L555153-L555156) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555153-555156](../../../../../../reference/runtime/host-main.cjs#L555153-L555156) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:555153

Calls written directly in this body: `.filter`, `.map`, `.sort`, `new Set`.

SHA-256 of the source span: `e6c3ecfe330662f982f480f7f28f1f3c7919e2c1343ac20355f7bc23132a5b69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
