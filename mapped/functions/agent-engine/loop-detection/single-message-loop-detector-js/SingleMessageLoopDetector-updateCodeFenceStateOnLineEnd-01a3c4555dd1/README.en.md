# `SingleMessageLoopDetector.updateCodeFenceStateOnLineEnd`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624454-624463](../../../../../../reference/runtime/host-main.cjs#L624454-L624463) | `method` | no | `line` |
| [evaluation:310576-310585](../../../../../../reference/runtime/sand-eval-runner.cjs#L310576-L310585) | `method` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624454-624463](../../../../../../reference/runtime/host-main.cjs#L624454-L624463) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:310576-310585](../../../../../../reference/runtime/sand-eval-runner.cjs#L310576-L310585) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:624454

Calls written directly in this body: `line.match`.

Assignment or increment targets: `this.insideCodeFence`.

SHA-256 of the source span: `28c6b6152826e4c140a740695d9502fbe6171892ce2fe2d7055ab8f6991ce9ad`.

### evaluation:310576

Calls written directly in this body: `line.match`.

Assignment or increment targets: `this.insideCodeFence`.

SHA-256 of the source span: `28c6b6152826e4c140a740695d9502fbe6171892ce2fe2d7055ab8f6991ce9ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
