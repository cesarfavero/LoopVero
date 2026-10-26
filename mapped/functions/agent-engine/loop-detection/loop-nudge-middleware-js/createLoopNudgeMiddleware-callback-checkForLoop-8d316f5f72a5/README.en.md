# `createLoopNudgeMiddleware/<callback>/checkForLoop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/loop-nudge-middleware.js` · [Module README](../../../../../modules/agent-engine/loop-detection/loop-nudge-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:458243-458275](../../../../../../reference/runtime/sand-eval-runner.cjs#L458243-L458275) | `ArrowFunctionExpression` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:458243-458275](../../../../../../reference/runtime/sand-eval-runner.cjs#L458243-L458275) | 0 | 0 | 0 | 0 | 0 | 3 |

### evaluation:458243

Calls written directly in this body: `checkAndHandleLoopOnToolResultAppend`, `executor.getMessages`, `logger58.warn`, `thrownValueClass`.

Assignment or increment targets: `errorClass`.

SHA-256 of the source span: `be72c5e9ce4e7ec9c3520a813e07ebfef7778e0e64589943c3d903bc7d30a4e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
