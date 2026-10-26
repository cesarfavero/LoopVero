# `SingleMessageLoopDetector.appendToCurrentLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624194-624213](../../../../../../reference/runtime/host-main.cjs#L624194-L624213) | `method` | no | `char` |
| [evaluation:310316-310335](../../../../../../reference/runtime/sand-eval-runner.cjs#L310316-L310335) | `method` | no | `char` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624194-624213](../../../../../../reference/runtime/host-main.cjs#L624194-L624213) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:310316-310335](../../../../../../reference/runtime/sand-eval-runner.cjs#L310316-L310335) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:624194

Calls written directly in this body: `BOX_DRAWING_CHARS.has`.

Assignment or increment targets: `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`.

SHA-256 of the source span: `21e9f0f4d6a53cc7547f494935ba8fe1a3f3e1d30c03602e6a39d5a2fc033508`.

### evaluation:310316

Calls written directly in this body: `BOX_DRAWING_CHARS.has`.

Assignment or increment targets: `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`.

SHA-256 of the source span: `21e9f0f4d6a53cc7547f494935ba8fe1a3f3e1d30c03602e6a39d5a2fc033508`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
