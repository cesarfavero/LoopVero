# `InputTokenLimitError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/prompt-executor.js` · [Module README](../../../../modules/chat-inference/prompt-executor-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:618015-618018](../../../../../reference/runtime/host-main.cjs#L618015-L618018) | `method` | no | `message = "Input token limit exceeded"` |
| [evaluation:287386-287389](../../../../../reference/runtime/sand-eval-runner.cjs#L287386-L287389) | `method` | no | `message = "Input token limit exceeded"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:618015-618018](../../../../../reference/runtime/host-main.cjs#L618015-L618018) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:287386-287389](../../../../../reference/runtime/sand-eval-runner.cjs#L287386-L287389) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:618015

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `b3628b39f14ea50444fd5193f5ef1f1e7b205572285e0f4bcb28dc7035c8ebeb`.

### evaluation:287386

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `b3628b39f14ea50444fd5193f5ef1f1e7b205572285e0f4bcb28dc7035c8ebeb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
