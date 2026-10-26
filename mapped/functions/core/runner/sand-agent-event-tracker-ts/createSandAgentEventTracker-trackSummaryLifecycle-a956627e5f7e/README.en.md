# `createSandAgentEventTracker/trackSummaryLifecycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-event-tracker.ts` · [Module README](../../../../../modules/core/runner/sand-agent-event-tracker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534950-534956](../../../../../../reference/runtime/sand-eval-runner.cjs#L534950-L534956) | `ArrowFunctionExpression` | no | `ctx, event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534950-534956](../../../../../../reference/runtime/sand-eval-runner.cjs#L534950-L534956) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:534950

Calls written directly in this body: `getConversationId`, `getRequestId`, `options2.getConversationId`, `options2.telemetry.reportSummaryLifecycle`.

SHA-256 of the source span: `24fd71758effb49dccd30725481690721d56f8fc0ed8b7ee0cc936125c079b38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
