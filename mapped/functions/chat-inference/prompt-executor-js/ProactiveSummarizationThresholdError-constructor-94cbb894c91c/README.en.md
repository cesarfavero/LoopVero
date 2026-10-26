# `ProactiveSummarizationThresholdError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/prompt-executor.js` · [Module README](../../../../modules/chat-inference/prompt-executor-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:618021-618024](../../../../../reference/runtime/host-main.cjs#L618021-L618024) | `method` | no | `message = "Configured summarization threshold reached"` |
| [evaluation:287392-287395](../../../../../reference/runtime/sand-eval-runner.cjs#L287392-L287395) | `method` | no | `message = "Configured summarization threshold reached"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:618021-618024](../../../../../reference/runtime/host-main.cjs#L618021-L618024) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:287392-287395](../../../../../reference/runtime/sand-eval-runner.cjs#L287392-L287395) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:618021

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `b9d2bf166570a4119c45f450f424165ac4b824c557bc8b4390ae6c647df1c6f4`.

### evaluation:287392

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `b9d2bf166570a4119c45f450f424165ac4b824c557bc8b4390ae6c647df1c6f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
