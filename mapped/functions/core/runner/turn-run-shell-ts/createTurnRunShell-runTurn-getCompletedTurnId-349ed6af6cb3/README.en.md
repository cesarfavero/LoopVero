# `createTurnRunShell/runTurn/getCompletedTurnId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591790-591790](../../../../../../reference/runtime/sand-eval-runner.cjs#L591790-L591790) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591790-591790](../../../../../../reference/runtime/sand-eval-runner.cjs#L591790-L591790) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:591790 uses an implicit arrow-function return.

### evaluation:591790

Calls written directly in this body: `endTurnHold.heldBy`.

SHA-256 of the source span: `83d088a0ce2342edee17b443a45e3bfceb257d99322dee29a03ecb3ab9865790`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
