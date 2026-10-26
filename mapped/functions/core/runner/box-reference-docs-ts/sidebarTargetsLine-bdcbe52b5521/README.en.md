# `sidebarTargetsLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558397-558412](../../../../../../reference/runtime/host-main.cjs#L558397-L558412) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558397-558412](../../../../../../reference/runtime/host-main.cjs#L558397-L558412) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:558397

Calls written directly in this body: `.join`, `.map`, `annotationsFor`, `byLocation.get`, `byLocation.set`, `controlPhrase`, `joinClauses`, `names3.push`, `new Map`.

SHA-256 of the source span: `e722cb30b70a8d20848e2a3491a9dc5deb65c5873ff38b4a78695f8707da98d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
