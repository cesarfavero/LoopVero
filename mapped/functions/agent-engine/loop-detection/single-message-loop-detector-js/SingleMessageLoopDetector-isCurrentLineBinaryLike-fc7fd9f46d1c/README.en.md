# `SingleMessageLoopDetector.isCurrentLineBinaryLike`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624229-624231](../../../../../../reference/runtime/host-main.cjs#L624229-L624231) | `method` | no | `(none)` |
| [evaluation:310351-310353](../../../../../../reference/runtime/sand-eval-runner.cjs#L310351-L310353) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624229-624231](../../../../../../reference/runtime/host-main.cjs#L624229-L624231) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:310351-310353](../../../../../../reference/runtime/sand-eval-runner.cjs#L310351-L310353) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:624229

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `155c3394ad0bee3f25c3963fe406c58b393689d67ce29797cb0ad7c4dd040224`.

### evaluation:310351

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `155c3394ad0bee3f25c3963fe406c58b393689d67ce29797cb0ad7c4dd040224`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
