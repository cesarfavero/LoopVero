# `checkAndHandleLoopOnToolResultAppend/applyNudge`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:311414-311437](../../../../../../reference/runtime/sand-eval-runner.cjs#L311414-L311437) | `ArrowFunctionExpression` | no | `loopResult2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311414-311437](../../../../../../reference/runtime/sand-eval-runner.cjs#L311414-L311437) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:311414

Calls written directly in this body: `appendMessage`, `createLoopReminderMessage`, `logShimFiring`, `multiMessageLoopNudge.applied`, `params.appliedNudgeFingerprints.add`, `params.appliedNudgeFingerprints.has`, `reportLoopMitigationObservation`.

SHA-256 of the source span: `244201444f2df0c19797454f1422b9747a62d10a24854353b34ef238a2592640`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
