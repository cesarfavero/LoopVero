# `defineCardSurfacing/toUrlSurface`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/card-surfacing.ts` · [Module README](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763799-763799](../../../../../../../reference/runtime/host-main.cjs#L763799-L763799) | `ArrowFunctionExpression` | yes | `card, context2` |
| [evaluation:557133-557133](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557133-L557133) | `ArrowFunctionExpression` | yes | `card, context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763799-763799](../../../../../../../reference/runtime/host-main.cjs#L763799-L763799) | 1 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:763799 uses an implicit arrow-function return.
| [evaluation:557133-557133](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557133-L557133) | 1 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:557133 uses an implicit arrow-function return.

### host:763799

Calls written directly in this body: `isCardOfType`, `spec.toUrlSurface`.

SHA-256 of the source span: `9a16daee5e0bd045ee3c7072c1ce98f3ae71bb2de6ac397a32e2365fb61be8e1`.

### evaluation:557133

Calls written directly in this body: `isCardOfType`, `spec.toUrlSurface`.

SHA-256 of the source span: `9a16daee5e0bd045ee3c7072c1ce98f3ae71bb2de6ac397a32e2365fb61be8e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
