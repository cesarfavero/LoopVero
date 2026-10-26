# `createTurnMcpExecutorEntries/mainTurnSignedOut`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585995-585995](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585995-L585995) | `ArrowFunctionExpression` | no | `signedOutError` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585995-585995](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585995-L585995) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:585995 uses an implicit arrow-function return.

### evaluation:585995

Calls written directly in this body: `turnToolHost.activeTurnRequestSource`, `turnToolHost.gates.signedOutReconnectCard`.

SHA-256 of the source span: `61ab460579322f45e376c53b882d24f00e069e93589a31d2fc43e51eeb80ec45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
