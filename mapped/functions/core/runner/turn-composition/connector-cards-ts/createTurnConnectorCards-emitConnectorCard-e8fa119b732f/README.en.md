# `createTurnConnectorCards/emitConnectorCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-composition/connector-cards.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/connector-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584157-584176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584157-L584176) | `ArrowFunctionExpression` | yes | `emission, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584157-584176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584157-L584176) | 4 | 0 | 2 | 3 | 0 | 0 |

### evaluation:584157

Calls written directly in this body: `Date.now`, `armMcpAuthWait`, `connectorCardDedupeKey`, `connectorCardEmissionToMessage`, `connectorCardOutcomes.get`, `connectorCardOutcomes.set`, `emittedConnectorCards.add`, `emittedConnectorCards.has`, `turnToolHost.gates.automationConnectCard`.

SHA-256 of the source span: `4b3a3986eb76d4833f7e21c1a5095d4808a2c8b07bbb75d587559dbaa055067e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
