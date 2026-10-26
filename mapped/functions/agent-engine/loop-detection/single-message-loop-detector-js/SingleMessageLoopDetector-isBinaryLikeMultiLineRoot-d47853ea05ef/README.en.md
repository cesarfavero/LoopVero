# `SingleMessageLoopDetector.isBinaryLikeMultiLineRoot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/single-message-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624254-624262](../../../../../../reference/runtime/host-main.cjs#L624254-L624262) | `method` | no | `period` |
| [evaluation:310376-310384](../../../../../../reference/runtime/sand-eval-runner.cjs#L310376-L310384) | `method` | no | `period` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624254-624262](../../../../../../reference/runtime/host-main.cjs#L624254-L624262) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:310376-310384](../../../../../../reference/runtime/sand-eval-runner.cjs#L310376-L310384) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:624254

Calls written directly in this body: `this.getLineAt`, `this.isBinaryLikeLine`.

Assignment or increment targets: `j2`.

SHA-256 of the source span: `711d5773f9cce65149e0119f9582bbb0c70a0f1b6f1abd1b003b3c415cefc722`.

### evaluation:310376

Calls written directly in this body: `this.getLineAt`, `this.isBinaryLikeLine`.

Assignment or increment targets: `j2`.

SHA-256 of the source span: `711d5773f9cce65149e0119f9582bbb0c70a0f1b6f1abd1b003b3c415cefc722`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
