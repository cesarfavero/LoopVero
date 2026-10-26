# `createLoopNudgeMiddleware/<callback>/appendMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/loop-nudge-middleware.js` · [Module README](../../../../../modules/agent-engine/loop-detection/loop-nudge-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:458278-458286](../../../../../../reference/runtime/sand-eval-runner.cjs#L458278-L458286) | `FunctionExpression` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:458278-458286](../../../../../../reference/runtime/sand-eval-runner.cjs#L458278-L458286) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:458278

Calls written directly in this body: `Array.isArray`, `checkForLoop`, `executor.appendMessages`, `messagesToAppend.some`.

SHA-256 of the source span: `15d5daf22b5096b795f6dca063d9622441ee24632e3fd504ce2bb708d7fce56c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
