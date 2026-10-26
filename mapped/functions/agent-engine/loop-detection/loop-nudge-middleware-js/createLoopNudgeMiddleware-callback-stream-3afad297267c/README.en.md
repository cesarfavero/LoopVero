# `createLoopNudgeMiddleware/<callback>/stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/loop-nudge-middleware.js` · [Module README](../../../../../modules/agent-engine/loop-detection/loop-nudge-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:458288-458294](../../../../../../reference/runtime/sand-eval-runner.cjs#L458288-L458294) | `FunctionExpression` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:458288-458294](../../../../../../reference/runtime/sand-eval-runner.cjs#L458288-L458294) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:458288

Calls written directly in this body: `.at`, `checkForLoop`, `executor.getMessages`, `executor.stream`.

Assignment or increment targets: `lastCtx`.

SHA-256 of the source span: `54457396ffa7893e3aba3b6f651b7f932f5b062847702c05d2875639ea89d6cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
