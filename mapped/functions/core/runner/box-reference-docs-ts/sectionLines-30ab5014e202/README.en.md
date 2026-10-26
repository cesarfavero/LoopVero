# `sectionLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558251-558265](../../../../../../reference/runtime/host-main.cjs#L558251-L558265) | `FunctionDeclaration` | no | `section, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558251-558265](../../../../../../reference/runtime/host-main.cjs#L558251-L558265) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:558251

Calls written directly in this body: `.filter`, `.join`, `.map`, `annotationsFor`, `groups.join`, `joinClauses`, `presenceSentence`, `section.controls.map`, `section.headings.filter`, `section.rows.map`, `visibilityHolds`.

SHA-256 of the source span: `580426192ef786116d3de4b5138f1f1dba1c4d64eed83671939caebfcd9ea6e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
