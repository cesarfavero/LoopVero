# `createTurnSettle/firstPartyToolCallsForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590818-590825](../../../../../../reference/runtime/sand-eval-runner.cjs#L590818-L590825) | `ArrowFunctionExpression` | no | `messages, excluded` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590818-590825](../../../../../../reference/runtime/sand-eval-runner.cjs#L590818-L590825) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590818

Calls written directly in this body: `deliveredFirstPartyToolCalls`, `host.externalSendFirstPartyTools`, `new Set`, `skippedToolCallIds`, `tools.map`.

SHA-256 of the source span: `63f0e86490e468ea757ecf4c51365aee371fd5e47d2c416ad5ece98336cfa0df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
