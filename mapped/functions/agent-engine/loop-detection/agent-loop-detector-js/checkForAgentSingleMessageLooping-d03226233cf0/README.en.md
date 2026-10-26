# `checkForAgentSingleMessageLooping`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624670-624760](../../../../../../reference/runtime/host-main.cjs#L624670-L624760) | `FunctionDeclaration` | no | `params` |
| [evaluation:311037-311127](../../../../../../reference/runtime/sand-eval-runner.cjs#L311037-L311127) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624670-624760](../../../../../../reference/runtime/host-main.cjs#L624670-L624760) | 9 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:311037-311127](../../../../../../reference/runtime/sand-eval-runner.cjs#L311037-L311127) | 9 | 0 | 0 | 7 | 0 | 0 |

### host:624670

Calls written directly in this body: `eventTracker.trackLoopDetected`, `fingerprintAgentLoopEvidence`, `getAgentEventTracker`, `getAgentSingleMessageLoopInfo`, `logger41.info`, `logger41.warn`, `loopDetectionCounter.increment`, `loopInfo.pattern.slice`, `params.ctx.get`, `params.detector.addText`, `params.detector.loopDetected`, `params.detector.timedOut`, `performance.now`, `reportLoopObservation`, `singleMessageLoopCheckLatency.histogram`.

SHA-256 of the source span: `74be576ef4d05b20fde80c243eabdc7965dee3364f165b56649854cdffb55b0e`.

### evaluation:311037

Calls written directly in this body: `eventTracker.trackLoopDetected`, `fingerprintAgentLoopEvidence`, `getAgentEventTracker`, `getAgentSingleMessageLoopInfo`, `logger16.info`, `logger16.warn`, `loopDetectionCounter.increment`, `loopInfo.pattern.slice`, `params.ctx.get`, `params.detector.addText`, `params.detector.loopDetected`, `params.detector.timedOut`, `performance.now`, `reportLoopObservation`, `singleMessageLoopCheckLatency.histogram`.

SHA-256 of the source span: `d9267becc91dde57e91b1943aa339b10ef045bf7a5157e3654ef27d04dce47fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
