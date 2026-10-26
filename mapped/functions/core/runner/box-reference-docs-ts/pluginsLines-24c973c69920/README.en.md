# `pluginsLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558422-558434](../../../../../../reference/runtime/host-main.cjs#L558422-L558434) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558422-558434](../../../../../../reference/runtime/host-main.cjs#L558422-L558434) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:558422

Calls written directly in this body: `.map`, `MAP.plugins.native.filter`, `annotationsFor`, `gateRead`, `joinClauses`, `quote`.

SHA-256 of the source span: `1ded30c7790c813b920abb21d932d9e7ed29f44b28cab9ed8a2fba14e3dab355`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
