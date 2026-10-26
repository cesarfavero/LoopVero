# `SingleMessageLoopDetector.reset`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624489-624499](../../../../../../reference/runtime/host-main.cjs#L624489-L624499) | `method` | no | `(none)` |
| [evaluation:310611-310621](../../../../../../reference/runtime/sand-eval-runner.cjs#L310611-L310621) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624489-624499](../../../../../../reference/runtime/host-main.cjs#L624489-L624499) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310611-310621](../../../../../../reference/runtime/sand-eval-runner.cjs#L310611-L310621) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:624489

Calls written directly in this body: `this.clearCurrentLine`, `this.multiLinePeriodMatchRunLengths.fill`, `this.periodMatchRunLengths.fill`.

Assignment or increment targets: `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.didTimeout`, `this.insideCodeFence`, `this.lineCount`, `this.startIdx`.

SHA-256 of the source span: `a7e172d92eb50ff907750216799612988899da7b38d72ab57a7a065b0370165e`.

### evaluation:310611

Calls written directly in this body: `this.clearCurrentLine`, `this.multiLinePeriodMatchRunLengths.fill`, `this.periodMatchRunLengths.fill`.

Assignment or increment targets: `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.didTimeout`, `this.insideCodeFence`, `this.lineCount`, `this.startIdx`.

SHA-256 of the source span: `a7e172d92eb50ff907750216799612988899da7b38d72ab57a7a065b0370165e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
