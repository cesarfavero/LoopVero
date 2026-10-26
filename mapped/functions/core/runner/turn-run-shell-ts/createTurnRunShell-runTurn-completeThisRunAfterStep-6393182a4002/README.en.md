# `createTurnRunShell/runTurn/completeThisRunAfterStep`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591849-591851](../../../../../../reference/runtime/sand-eval-runner.cjs#L591849-L591851) | `ArrowFunctionExpression` | no | `step, toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591849-591851](../../../../../../reference/runtime/sand-eval-runner.cjs#L591849-L591851) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:591849

Calls written directly in this body: `completeThisRun`, `endTurnHold.noteEndTurnStep`.

SHA-256 of the source span: `d70b403e6b1cd1252a57c5f8cd3945b2685a7e06288db255808ef97b4c961d6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
