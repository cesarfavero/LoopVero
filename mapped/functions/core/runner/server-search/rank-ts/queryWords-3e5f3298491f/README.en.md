# `queryWords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/server-search/rank.ts` · [Module README](../../../../../../modules/core/runner/server-search/rank-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765877-765879](../../../../../../../reference/runtime/host-main.cjs#L765877-L765879) | `FunctionDeclaration` | no | `query2, ignoreWords` |
| [evaluation:559241-559243](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559241-L559243) | `FunctionDeclaration` | no | `query2, ignoreWords` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765877-765879](../../../../../../../reference/runtime/host-main.cjs#L765877-L765879) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559241-559243](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559241-L559243) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765877

Calls written directly in this body: `.filter`, `.match`, `.slice`, `new Set`, `normalizeCommandText`.

SHA-256 of the source span: `5fb26910e1121f3fa39d1313ce9dcfce14a09476775c2f9cba75974eb989fa66`.

### evaluation:559241

Calls written directly in this body: `.filter`, `.match`, `.slice`, `new Set`, `normalizeCommandText`.

SHA-256 of the source span: `5fb26910e1121f3fa39d1313ce9dcfce14a09476775c2f9cba75974eb989fa66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
