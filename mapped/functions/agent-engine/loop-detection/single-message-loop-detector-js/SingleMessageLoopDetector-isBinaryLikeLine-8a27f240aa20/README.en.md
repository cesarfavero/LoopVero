# `SingleMessageLoopDetector.isBinaryLikeLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624237-624250](../../../../../../reference/runtime/host-main.cjs#L624237-L624250) | `method` | no | `line` |
| [evaluation:310359-310372](../../../../../../reference/runtime/sand-eval-runner.cjs#L310359-L310372) | `method` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624237-624250](../../../../../../reference/runtime/host-main.cjs#L624237-L624250) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:310359-310372](../../../../../../reference/runtime/sand-eval-runner.cjs#L310359-L310372) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:624237

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `hasBit`.

SHA-256 of the source span: `9f0374e1c721c28e8043b5310d0e716f63f73debf3551a8280df507f19cade60`.

### evaluation:310359

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `hasBit`.

SHA-256 of the source span: `9f0374e1c721c28e8043b5310d0e716f63f73debf3551a8280df507f19cade60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
