# `withDynamicSubagentLaunchPrefetch/previewStreamingArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-launch-prefetch.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:556473-556488](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556473-L556488) | `ArrowFunctionExpression` | no | `ctx, interactionHandler, toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556473-556488](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556473-L556488) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:556473

Calls written directly in this body: `preview`.

SHA-256 of the source span: `0f8d0611ab00fb51370fc60fb0fc7f8d23d1923c13d3431f7d932c58513dedf9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
