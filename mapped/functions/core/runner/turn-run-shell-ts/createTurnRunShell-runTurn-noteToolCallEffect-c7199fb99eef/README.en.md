# `createTurnRunShell/runTurn/noteToolCallEffect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591922-591925](../../../../../../reference/runtime/sand-eval-runner.cjs#L591922-L591925) | `ArrowFunctionExpression` | no | `settled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591922-591925](../../../../../../reference/runtime/sand-eval-runner.cjs#L591922-L591925) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:591922

Calls written directly in this body: `inFlightToolCallEffects.add`, `settled.finally`.

SHA-256 of the source span: `79c8c98e2245e505d1f91a3a113129d6f6bf2bdcf6428496895bce0f27476a47`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
