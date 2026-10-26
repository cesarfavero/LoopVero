# `SingleMessageLoopDetector.addLineToQueue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624356-624364](../../../../../../reference/runtime/host-main.cjs#L624356-L624364) | `method` | no | `line` |
| [evaluation:310478-310486](../../../../../../reference/runtime/sand-eval-runner.cjs#L310478-L310486) | `method` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624356-624364](../../../../../../reference/runtime/host-main.cjs#L624356-L624364) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310478-310486](../../../../../../reference/runtime/sand-eval-runner.cjs#L310478-L310486) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:624356

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.lineBuffer[computed]`, `this.lineCount`, `this.startIdx`.

SHA-256 of the source span: `bebd5de0a7792f984b0f3509f7e7c246a01ecad141ccaafa1f2b8015f5406998`.

### evaluation:310478

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.lineBuffer[computed]`, `this.lineCount`, `this.startIdx`.

SHA-256 of the source span: `bebd5de0a7792f984b0f3509f7e7c246a01ecad141ccaafa1f2b8015f5406998`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
