# `rowShows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557697-557699](../../../../../../reference/runtime/host-main.cjs#L557697-L557699) | `FunctionDeclaration` | no | `row, facts` |
| [evaluation:546133-546135](../../../../../../reference/runtime/sand-eval-runner.cjs#L546133-L546135) | `FunctionDeclaration` | no | `row, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557697-557699](../../../../../../reference/runtime/host-main.cjs#L557697-L557699) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546133-546135](../../../../../../reference/runtime/sand-eval-runner.cjs#L546133-L546135) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557697

Calls written directly in this body: `visibilityHolds`.

SHA-256 of the source span: `3318903501867416f4cff8c0ba284e1bc1a1e0cef0f3571a2b43f443468637d7`.

### evaluation:546133

Calls written directly in this body: `visibilityHolds`.

SHA-256 of the source span: `3318903501867416f4cff8c0ba284e1bc1a1e0cef0f3571a2b43f443468637d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
