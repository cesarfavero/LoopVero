# `runSandEvalRequest/onUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/run.ts` · [Module README](../../../../modules/evaluation/run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630269-630282](../../../../../reference/runtime/sand-eval-runner.cjs#L630269-L630282) | `FunctionExpression` | no | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630269-630282](../../../../../reference/runtime/sand-eval-runner.cjs#L630269-L630282) | 4 | 0 | 0 | 0 | 0 | 0 |

### evaluation:630269

Calls written directly in this body: `deliveredMessages.push`, `mergeTurnUsage`, `renderDeliveredMessage`, `toolCalls3.push`, `updates.push`.

Assignment or increment targets: `lastSentMessageId`, `reactionApplied`, `sentMessageCount`, `tokenUsage`.

SHA-256 of the source span: `8482c1d3a5a6a8ccf05d5482584bb7d07859b3f214af35ec1ce5e4a06efc024c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
