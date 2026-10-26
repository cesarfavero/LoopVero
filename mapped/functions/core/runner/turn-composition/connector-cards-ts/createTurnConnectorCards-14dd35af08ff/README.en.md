# `createTurnConnectorCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-composition/connector-cards.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/connector-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584125-584178](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584125-L584178) | `FunctionDeclaration` | no | `host, turnToolHost, turnScope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584125-584178](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584125-L584178) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584125

Calls written directly in this body: `createCardSurfacer`, `new Map`.

SHA-256 of the source span: `f5a6819a0a4d2bb5e68a28f2d18b00794fb0bdb54e5618050d7af974c7e3a6c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
