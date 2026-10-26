# `createTurnPerformanceObservation/messageDispatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547855-547858](../../../../../../reference/runtime/sand-eval-runner.cjs#L547855-L547858) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547855-547858](../../../../../../reference/runtime/sand-eval-runner.cjs#L547855-L547858) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547855

Calls written directly in this body: `clock.monotonicNow`.

Assignment or increment targets: `lastMessage`.

SHA-256 of the source span: `feb28a41e8313db8abd3cba68c89fbca6a3738c4580d522d9d6704a505f4c60b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
