# `createTurnPromptExecutor/onEvents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/turn-composition/prompt-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/prompt-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587425-587452](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587425-L587452) | `ArrowFunctionExpression` | no | `events` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587425-587452](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587425-L587452) | 2 | 2 | 0 | 0 | 0 | 0 |

### evaluation:587425

Calls written directly in this body: `actionAuditor.record`, `events.map`, `host.toolTargets.take`, `observeToolCallEvents`, `onToolCallEvents`, `toolResultAuditRecord`, `turnToolHost.getConversationId`, `turnToolHost.resolveBoxId`, `turnToolHost.toolDecisionAudit.settle`.

SHA-256 of the source span: `c46f8ded727409e06fdd073d5dbcc212050cadc463825a02ff02e0b5043cfbc8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
