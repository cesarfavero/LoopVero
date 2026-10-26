# `createTurnSubagentLaunch/registerReviewer/<callback>/extractConversationContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/turn-composition/subagent-launch.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/subagent-launch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587772-587776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587772-L587776) | `ArrowFunctionExpression` | no | `contextCtx, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587772-587776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587772-L587776) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:587772 uses an implicit arrow-function return.

### evaluation:587772

Calls written directly in this body: `loadLaunchReviewContext`, `prefetch.started`.

SHA-256 of the source span: `5de3508ed1d7bb58e6f2c83d502ebaf8ec16d7b95cfe45fd36a9e0cdd6328b26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
