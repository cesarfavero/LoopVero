# `createLoopNudgeMiddleware/<callback>/checkForLoop/appendMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/loop-nudge-middleware.js` · [Module README](../../../../../modules/agent-engine/loop-detection/loop-nudge-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:458249-458249](../../../../../../reference/runtime/sand-eval-runner.cjs#L458249-L458249) | `ArrowFunctionExpression` | no | `msg` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:458249-458249](../../../../../../reference/runtime/sand-eval-runner.cjs#L458249-L458249) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:458249 uses an implicit arrow-function return.

### evaluation:458249

Calls written directly in this body: `executor.appendMessages`.

SHA-256 of the source span: `e6299d027c8e3dc926c42c7a7a3a31c17fdb772508f93cd1d2bb3c7f0367e9c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
