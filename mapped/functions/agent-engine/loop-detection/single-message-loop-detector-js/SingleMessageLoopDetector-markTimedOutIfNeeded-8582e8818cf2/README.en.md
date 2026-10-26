# `SingleMessageLoopDetector.markTimedOutIfNeeded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624439-624453](../../../../../../reference/runtime/host-main.cjs#L624439-L624453) | `method` | no | `{ caller, deadlineMs, phase, startTime }` |
| [evaluation:310561-310575](../../../../../../reference/runtime/sand-eval-runner.cjs#L310561-L310575) | `method` | no | `{ caller, deadlineMs, phase, startTime }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624439-624453](../../../../../../reference/runtime/host-main.cjs#L624439-L624453) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:310561-310575](../../../../../../reference/runtime/sand-eval-runner.cjs#L310561-L310575) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:624439

Calls written directly in this body: `performance.now`, `this.hooks.onTimeout`.

Assignment or increment targets: `this.didTimeout`.

SHA-256 of the source span: `11f044d29539e1f3ca93a4df13a2013d4d830d8c222de02df3370c9d45d01d96`.

### evaluation:310561

Calls written directly in this body: `performance.now`, `this.hooks.onTimeout`.

Assignment or increment targets: `this.didTimeout`.

SHA-256 of the source span: `11f044d29539e1f3ca93a4df13a2013d4d830d8c222de02df3370c9d45d01d96`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
