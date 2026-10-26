# `createTurnRunShell/runTurn/buildTurnAgent/captureFirstStreamMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592254-592259](../../../../../../reference/runtime/sand-eval-runner.cjs#L592254-L592259) | `ArrowFunctionExpression` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592254-592259](../../../../../../reference/runtime/sand-eval-runner.cjs#L592254-L592259) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:592254

Calls written directly in this body: `settle2.captureFollowupLabelingMessages`, `settle2.captureTurnStartMessages`.

SHA-256 of the source span: `2801f26624fc3c8f7c7036cbd62d706ae6cba83d201cb6cb38856aa8014929ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
