# `linkableRowsByTab2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558266-558272](../../../../../../reference/runtime/host-main.cjs#L558266-L558272) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558266-558272](../../../../../../reference/runtime/host-main.cjs#L558266-L558272) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:558266

Calls written directly in this body: `.filter`, `.join`, `.map`, `MAP.settings.sections.map`, `new Set`, `taughtSettingsAnchorIds`.

SHA-256 of the source span: `20d084cf593c0dc966c5e157570bf45ad3dcea8d283e73042111fd734cc41bea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
