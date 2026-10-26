# `ForwardingInteractionListener.sendUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583207-583267](../../../../../../reference/runtime/sand-eval-runner.cjs#L583207-L583267) | `method` | yes | `ctx, update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583207-583267](../../../../../../reference/runtime/sand-eval-runner.cjs#L583207-L583267) | 15 | 0 | 1 | 1 | 0 | 0 |

### evaluation:583207

Calls written directly in this body: `STREAM_UPDATE_CASES.has`, `SURFACE_UNRESOLVED_TOOL_CASES.has`, `ctx.get`, `getOutlineToolCallName`, `getOutlineToolCallStatus`, `getOutlineToolCallSummary`, `getToolCallActivityArgs`, `process.stderr.write`, `super.sendUpdate`, `this.observers.onSummaryLifecycle`, `this.observers.onSurfaceUnresolvedPending`, `this.observers.onToolCall`, `this.observers.resolveToolName`, `this.onUpdate`, `turnUsageFromTurnEnded`.

Assignment or increment targets: `this.staleDropLogged`.

SHA-256 of the source span: `e2c0c6cafa6fc28316e1f14cf7133e22a65c8a6138b13d5388843ee5ed389ebd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
