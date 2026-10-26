# `SingleMessageLoopDetector.addText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624269-624352](../../../../../../reference/runtime/host-main.cjs#L624269-L624352) | `method` | no | `{ newText, caller }` |
| [evaluation:310391-310474](../../../../../../reference/runtime/sand-eval-runner.cjs#L310391-L310474) | `method` | no | `{ newText, caller }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624269-624352](../../../../../../reference/runtime/host-main.cjs#L624269-L624352) | 15 | 2 | 0 | 6 | 0 | 0 |
| [evaluation:310391-310474](../../../../../../reference/runtime/sand-eval-runner.cjs#L310391-L310474) | 15 | 2 | 0 | 6 | 0 | 0 |

### host:624269

Calls written directly in this body: `/\s/.test`, `Math.floor`, `Math.max`, `Math.min`, `performance.now`, `this.addLineToQueue`, `this.appendToCurrentLine`, `this.checkForMultiLineLoop`, `this.clearCurrentLine`, `this.config.singleLineLoopMinPTimesKInCodeFence`, `this.config.singleLineLoopMinRepetitionsInCodeFence`, `this.currentLine.slice`, `this.currentLine.trim`, `this.hooks.onSingleLineCheck`, `this.isCurrentLineBinaryLike`, `this.isCurrentLineBoxBorder`, `this.loopDetected`, `this.markTimedOutIfNeeded`, `this.periodMatchRunLengths.fill`, `this.updateCodeFenceStateOnLineEnd`.

Assignment or increment targets: `minPTimesK`, `p2`, `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.periodMatchRunLengths[computed]`.

SHA-256 of the source span: `4d1b3f535cc17a13abbf16d9fd06d080e0a87e20dd9f9b778ae9a607e2423607`.

### evaluation:310391

Calls written directly in this body: `/\s/.test`, `Math.floor`, `Math.max`, `Math.min`, `performance.now`, `this.addLineToQueue`, `this.appendToCurrentLine`, `this.checkForMultiLineLoop`, `this.clearCurrentLine`, `this.config.singleLineLoopMinPTimesKInCodeFence`, `this.config.singleLineLoopMinRepetitionsInCodeFence`, `this.currentLine.slice`, `this.currentLine.trim`, `this.hooks.onSingleLineCheck`, `this.isCurrentLineBinaryLike`, `this.isCurrentLineBoxBorder`, `this.loopDetected`, `this.markTimedOutIfNeeded`, `this.periodMatchRunLengths.fill`, `this.updateCodeFenceStateOnLineEnd`.

Assignment or increment targets: `minPTimesK`, `p2`, `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.periodMatchRunLengths[computed]`.

SHA-256 of the source span: `4d1b3f535cc17a13abbf16d9fd06d080e0a87e20dd9f9b778ae9a607e2423607`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
