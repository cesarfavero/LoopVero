# `wrapDynamicInvocationToolWithTimeout/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554214-554283](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554214-L554283) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554214-554283](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554214-L554283) | 9 | 1 | 1 | 1 | 2 | 1 |

### evaluation:554214

Calls written directly in this body: `callSpan.end`, `createMcpPauseCancelledError`, `ctx.withCancel`, `guarded.execute`, `invokesDesignatedDangerousMcpTool`, `isIntentionalAbortReason2`, `parseDynamicInvocationArgs`, `performance.now`, `registerPauseCancel`, `reportDynamicOutcome`, `resolveDynamicDispatch`, `sandToolCallExecutionTimeoutMs`, `startDynamicToolCallSpan`, `unreachableToolError`, `unregisterPauseCancel`, `wrapToolWithTimeout`.

Assignment or increment targets: `rawArgs`.

Explicit throw targets: `createMcpPauseCancelledError`, `error63`.

SHA-256 of the source span: `a69f437ebf22fce57fb19f27ce5254ebceb4d0c760bcfd2c0ef20b1c777c4467`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
