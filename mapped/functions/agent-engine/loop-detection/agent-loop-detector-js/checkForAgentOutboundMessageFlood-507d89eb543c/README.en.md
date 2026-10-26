# `checkForAgentOutboundMessageFlood`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:311148-311236](../../../../../../reference/runtime/sand-eval-runner.cjs#L311148-L311236) | `FunctionDeclaration` | no | `params, reporting` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311148-311236](../../../../../../reference/runtime/sand-eval-runner.cjs#L311148-L311236) | 10 | 2 | 0 | 5 | 0 | 0 |

### evaluation:311148

Calls written directly in this body: `.sort`, `.trackLoopDetected`, `convertCoreMessagesToLoopFormat`, `currentMessageForLoopDetection`, `findLastUserMessageIndex`, `fingerprintAgentLoopEvidence`, `getAgentEventTracker`, `logger16.warn`, `loopDetectionCounter.increment`, `loopDetectionLatency.histogram`, `loopMessages.slice`, `msg.toolResultTexts.some`, `new Set`, `performance.now`, `reportLoopObservation`, `runToolNames.add`, `runToolNames.clear`, `toolCalls3.every`.

Assignment or increment targets: `run`.

SHA-256 of the source span: `dfacdd6f21c8790836109d7dc0a59b5fe5c7a96a4acc0e609f4593f80b89e285`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
