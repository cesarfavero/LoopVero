# `SingleMessageLoopDetector.getSingleLineLoopInfo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624468-624476](../../../../../../reference/runtime/host-main.cjs#L624468-L624476) | `method` | no | `(none)` |
| [evaluation:310590-310598](../../../../../../reference/runtime/sand-eval-runner.cjs#L310590-L310598) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624468-624476](../../../../../../reference/runtime/host-main.cjs#L624468-L624476) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:310590-310598](../../../../../../reference/runtime/sand-eval-runner.cjs#L310590-L310598) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:624468

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ba53d5b23f0850f02a75fbcd6e18d8954c99c780660a5aceac4904fcfe09db4a`.

### evaluation:310590

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ba53d5b23f0850f02a75fbcd6e18d8954c99c780660a5aceac4904fcfe09db4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
