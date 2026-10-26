# `SingleMessageLoopDetector.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624155-624182](../../../../../../reference/runtime/host-main.cjs#L624155-L624182) | `method` | no | `config2, hooks` |
| [evaluation:310277-310304](../../../../../../reference/runtime/sand-eval-runner.cjs#L310277-L310304) | `method` | no | `config2, hooks` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624155-624182](../../../../../../reference/runtime/host-main.cjs#L624155-L624182) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310277-310304](../../../../../../reference/runtime/sand-eval-runner.cjs#L310277-L310304) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:624155

Calls written directly in this body: `.fill`, `new Array`, `this.config.maxCheckTimeMs`, `this.config.maxLineLength`, `this.config.multiLineLoopMinRepetitions`, `this.config.singleLineLoopMaxP`, `this.config.singleLineLoopMinPTimesK`, `this.config.singleLineLoopMinRepetitions`.

Assignment or increment targets: `this.MAX_CHECK_TIME_MS`, `this.MAX_LINE_LENGTH`, `this.MAX_LINE_QUEUE_SIZE`, `this.MULTI_LINE_LOOP_MIN_REPETITIONS`, `this.SINGLE_LINE_LOOP_MAX_P_LIMIT`, `this.SINGLE_LINE_LOOP_MIN_P_TIMES_K`, `this.SINGLE_LINE_LOOP_MIN_REPETITIONS`, `this.config`, `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`, `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.didTimeout`, `this.hooks`, `this.insideCodeFence`, `this.lineBuffer`, `this.lineCount`, `this.multiLinePeriodMatchRunLengths`, `this.periodMatchRunLengths`, `this.startIdx`.

SHA-256 of the source span: `ec69da385ac5d2125551663c6d7760f8c6f6abdfef93f45aef6dc5232ee24c52`.

### evaluation:310277

Calls written directly in this body: `.fill`, `new Array`, `this.config.maxCheckTimeMs`, `this.config.maxLineLength`, `this.config.multiLineLoopMinRepetitions`, `this.config.singleLineLoopMaxP`, `this.config.singleLineLoopMinPTimesK`, `this.config.singleLineLoopMinRepetitions`.

Assignment or increment targets: `this.MAX_CHECK_TIME_MS`, `this.MAX_LINE_LENGTH`, `this.MAX_LINE_QUEUE_SIZE`, `this.MULTI_LINE_LOOP_MIN_REPETITIONS`, `this.SINGLE_LINE_LOOP_MAX_P_LIMIT`, `this.SINGLE_LINE_LOOP_MIN_P_TIMES_K`, `this.SINGLE_LINE_LOOP_MIN_REPETITIONS`, `this.config`, `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`, `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.didTimeout`, `this.hooks`, `this.insideCodeFence`, `this.lineBuffer`, `this.lineCount`, `this.multiLinePeriodMatchRunLengths`, `this.periodMatchRunLengths`, `this.startIdx`.

SHA-256 of the source span: `ec69da385ac5d2125551663c6d7760f8c6f6abdfef93f45aef6dc5232ee24c52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
