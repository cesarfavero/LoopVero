# `createSandAgentEventTracker/trackSummarizationTriggered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-event-tracker.ts` · [Module README](../../../../../modules/core/runner/sand-agent-event-tracker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534938-534949](../../../../../../reference/runtime/sand-eval-runner.cjs#L534938-L534949) | `ArrowFunctionExpression` | no | `ctx, event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534938-534949](../../../../../../reference/runtime/sand-eval-runner.cjs#L534938-L534949) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:534938

Calls written directly in this body: `getConversationId`, `getRequestId`, `options2.getConversationId`, `options2.telemetry.reportSummaryPersisted`.

SHA-256 of the source span: `07315d8ffcb4228eaea8af5b95a5b219e4dbcbe5647eb18cae1de4c5e9c8c3d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
