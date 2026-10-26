# `createTurnRunShell/runTurn/observeFirstToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591941-591941](../../../../../../reference/runtime/sand-eval-runner.cjs#L591941-L591941) | `ArrowFunctionExpression` | no | `chunkType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591941-591941](../../../../../../reference/runtime/sand-eval-runner.cjs#L591941-L591941) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:591941 uses an implicit arrow-function return.

### evaluation:591941

Calls written directly in this body: `armedDispatchObservation.observeFirstToken`.

SHA-256 of the source span: `e74b43dc2db99bf834ba3d0b55f5f75c9d9d0f66bb1e1d7a103c48efe21b9483`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
