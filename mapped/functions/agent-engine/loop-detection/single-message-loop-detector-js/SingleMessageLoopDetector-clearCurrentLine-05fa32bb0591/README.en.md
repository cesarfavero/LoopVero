# `SingleMessageLoopDetector.clearCurrentLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624214-624220](../../../../../../reference/runtime/host-main.cjs#L624214-L624220) | `method` | no | `(none)` |
| [evaluation:310336-310342](../../../../../../reference/runtime/sand-eval-runner.cjs#L310336-L310342) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624214-624220](../../../../../../reference/runtime/host-main.cjs#L624214-L624220) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310336-310342](../../../../../../reference/runtime/sand-eval-runner.cjs#L310336-L310342) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:624214

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`.

SHA-256 of the source span: `af434c39f17629af289f5fb142c65fe35409a24ab213d38b618bc2406dcb8c8f`.

### evaluation:310336

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`.

SHA-256 of the source span: `af434c39f17629af289f5fb142c65fe35409a24ab213d38b618bc2406dcb8c8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
