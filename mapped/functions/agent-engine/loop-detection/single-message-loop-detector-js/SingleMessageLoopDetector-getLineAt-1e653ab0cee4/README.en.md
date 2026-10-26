# `SingleMessageLoopDetector.getLineAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624368-624371](../../../../../../reference/runtime/host-main.cjs#L624368-L624371) | `method` | no | `logicalIndex` |
| [evaluation:310490-310493](../../../../../../reference/runtime/sand-eval-runner.cjs#L310490-L310493) | `method` | no | `logicalIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624368-624371](../../../../../../reference/runtime/host-main.cjs#L624368-L624371) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:310490-310493](../../../../../../reference/runtime/sand-eval-runner.cjs#L310490-L310493) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:624368

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a0ccba9036dae61dea482c4827ed0139246a73247a8052a2ed9a096728792d65`.

### evaluation:310490

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a0ccba9036dae61dea482c4827ed0139246a73247a8052a2ed9a096728792d65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
