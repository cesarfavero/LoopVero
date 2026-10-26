# `SingleMessageLoopDetector.checkForMultiLineLoop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624377-624438](../../../../../../reference/runtime/host-main.cjs#L624377-L624438) | `method` | no | `{ caller, deadlineMs }` |
| [evaluation:310499-310560](../../../../../../reference/runtime/sand-eval-runner.cjs#L310499-L310560) | `method` | no | `{ caller, deadlineMs }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624377-624438](../../../../../../reference/runtime/host-main.cjs#L624377-L624438) | 10 | 2 | 0 | 3 | 0 | 0 |
| [evaluation:310499-310560](../../../../../../reference/runtime/sand-eval-runner.cjs#L310499-L310560) | 10 | 2 | 0 | 3 | 0 | 0 |

### host:624377

Calls written directly in this body: `Math.floor`, `Math.max`, `Math.min`, `pattern.push`, `pattern.reduce`, `performance.now`, `this.config.multiLineLoopMinPTimesK`, `this.config.multiLineLoopMinPTimesKInCodeFence`, `this.config.multiLineLoopMinRepetitionsInCodeFence`, `this.config.multiLineLoopMinTotalChars`, `this.config.multiLineLoopMinTotalCharsInCodeFence`, `this.getLineAt`, `this.hooks.onMultiLineCheck`, `this.isBinaryLikeMultiLineRoot`, `this.markTimedOutIfNeeded`.

Assignment or increment targets: `j2`, `minPTimesK`, `minReps`, `minTotalChars`, `p2`, `this.detectedMultiLinePattern`, `this.multiLinePeriodMatchRunLengths[computed]`.

SHA-256 of the source span: `183ed0e7147a556f633c70da7114a7d78bcfacbf07d5dc3881d75e6ea7b6c856`.

### evaluation:310499

Calls written directly in this body: `Math.floor`, `Math.max`, `Math.min`, `pattern.push`, `pattern.reduce`, `performance.now`, `this.config.multiLineLoopMinPTimesK`, `this.config.multiLineLoopMinPTimesKInCodeFence`, `this.config.multiLineLoopMinRepetitionsInCodeFence`, `this.config.multiLineLoopMinTotalChars`, `this.config.multiLineLoopMinTotalCharsInCodeFence`, `this.getLineAt`, `this.hooks.onMultiLineCheck`, `this.isBinaryLikeMultiLineRoot`, `this.markTimedOutIfNeeded`.

Assignment or increment targets: `j2`, `minPTimesK`, `minReps`, `minTotalChars`, `p2`, `this.detectedMultiLinePattern`, `this.multiLinePeriodMatchRunLengths[computed]`.

SHA-256 of the source span: `183ed0e7147a556f633c70da7114a7d78bcfacbf07d5dc3881d75e6ea7b6c856`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
