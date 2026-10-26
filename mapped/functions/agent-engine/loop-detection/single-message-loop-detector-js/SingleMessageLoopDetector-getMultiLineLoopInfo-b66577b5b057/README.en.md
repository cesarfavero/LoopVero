# `SingleMessageLoopDetector.getMultiLineLoopInfo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624477-624485](../../../../../../reference/runtime/host-main.cjs#L624477-L624485) | `method` | no | `(none)` |
| [evaluation:310599-310607](../../../../../../reference/runtime/sand-eval-runner.cjs#L310599-L310607) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624477-624485](../../../../../../reference/runtime/host-main.cjs#L624477-L624485) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:310599-310607](../../../../../../reference/runtime/sand-eval-runner.cjs#L310599-L310607) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:624477

Calls written directly in this body: `this.detectedMultiLinePattern.join`.

SHA-256 of the source span: `5d1407ee59e909f5705a8670afa8ff417aaf19c5576a5aeb07db72ea549b60fc`.

### evaluation:310599

Calls written directly in this body: `this.detectedMultiLinePattern.join`.

SHA-256 of the source span: `5d1407ee59e909f5705a8670afa8ff417aaf19c5576a5aeb07db72ea549b60fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
