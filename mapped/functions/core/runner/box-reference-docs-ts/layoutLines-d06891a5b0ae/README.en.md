# `layoutLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558365-558375](../../../../../../reference/runtime/host-main.cjs#L558365-L558375) | `FunctionDeclaration` | no | `kind, facts, indent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558365-558375](../../../../../../reference/runtime/host-main.cjs#L558365-L558375) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:558365

Calls written directly in this body: `annotationsFor`, `joinClauses`, `layoutClauses`, `sandUiMapLayout`.

SHA-256 of the source span: `f373fa214f7bdada8835c02960023aaad340606488dd2f1f3fa680c708025889`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
