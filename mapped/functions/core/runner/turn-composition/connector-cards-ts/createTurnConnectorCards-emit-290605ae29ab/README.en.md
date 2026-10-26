# `createTurnConnectorCards/emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-composition/connector-cards.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/connector-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584141-584149](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584141-L584149) | `ArrowFunctionExpression` | no | `message, timestampMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584141-584149](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584141-L584149) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:584141 uses an implicit arrow-function return.

### evaluation:584141

Calls written directly in this body: `turnToolHost.emitUpdate`.

SHA-256 of the source span: `1ea451a26dc1a785e5f19c25c50cccb0b1d6f4495d6793753b1990a9e270cfb8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
