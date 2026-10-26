# `StartOfTurnAckReminderMiddleware.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/start-of-turn-ack-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/start-of-turn-ack-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587055-587060](../../../../../../reference/runtime/sand-eval-runner.cjs#L587055-L587060) | `method` | no | `innerExecutor, threshold, message, reactionAcknowledged` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587055-587060](../../../../../../reference/runtime/sand-eval-runner.cjs#L587055-L587060) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:587055

Calls written directly in this body: `super`.

Assignment or increment targets: `this.message`, `this.reactionAcknowledged`, `this.threshold`.

SHA-256 of the source span: `354e75c202ecb73d193b06c23174a93e314df4013a557d07b941ffe51bf162c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
