# `build/reviewSteer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/turn-builders/subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781172-781197](../../../../../../../../reference/runtime/host-main.cjs#L781172-L781197) | `ArrowFunctionExpression` | yes | `steerCtx, steerArgs` |
| [evaluation:581519-581544](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581519-L581544) | `ArrowFunctionExpression` | yes | `steerCtx, steerArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781172-781197](../../../../../../../../reference/runtime/host-main.cjs#L781172-L781197) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:581519-581544](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581519-L581544) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:781172

Calls written directly in this body: `buildSandSubagentSteerReviewTarget`, `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandSubagentAction`, `subagentController.getRunningSubagent`, `turn.getAutoReviewUserInstructions`.

SHA-256 of the source span: `176b48ab812845ccde9e5c2380d9fdd03ac5105e90764df4202f49c0df1ce049`.

### evaluation:581519

Calls written directly in this body: `buildSandSubagentSteerReviewTarget`, `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandSubagentAction`, `subagentController.getRunningSubagent`, `turn.getAutoReviewUserInstructions`.

SHA-256 of the source span: `176b48ab812845ccde9e5c2380d9fdd03ac5105e90764df4202f49c0df1ce049`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
