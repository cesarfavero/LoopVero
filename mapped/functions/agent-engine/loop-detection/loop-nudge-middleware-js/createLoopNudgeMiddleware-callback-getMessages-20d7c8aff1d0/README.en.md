# `createLoopNudgeMiddleware/<callback>/getMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/loop-nudge-middleware.js` · [Module README](../../../../../modules/agent-engine/loop-detection/loop-nudge-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:458296-458298](../../../../../../reference/runtime/sand-eval-runner.cjs#L458296-L458298) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:458296-458298](../../../../../../reference/runtime/sand-eval-runner.cjs#L458296-L458298) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:458296

Calls written directly in this body: `executor.getMessages`.

SHA-256 of the source span: `d3ed8be1e4a9b0ac96472867f916d6b319ad2fcd17cd27a729bf53df9146a83c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
