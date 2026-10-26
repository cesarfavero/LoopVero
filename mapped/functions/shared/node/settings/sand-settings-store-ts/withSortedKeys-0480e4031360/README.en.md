# `withSortedKeys`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687660-687670](../../../../../../../reference/runtime/host-main.cjs#L687660-L687670) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687660-687670](../../../../../../../reference/runtime/host-main.cjs#L687660-L687670) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:687660

Calls written directly in this body: `.map`, `.sort`, `Array.isArray`, `Object.entries`, `Object.fromEntries`, `value.map`.

SHA-256 of the source span: `5ac96b949fc8ea43c2b5912938f585fa4e6cf2da1572df40f89be8e76aabee85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
