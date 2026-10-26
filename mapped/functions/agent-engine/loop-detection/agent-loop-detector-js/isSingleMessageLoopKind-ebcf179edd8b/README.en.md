# `isSingleMessageLoopKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624609-624611](../../../../../../reference/runtime/host-main.cjs#L624609-L624611) | `FunctionDeclaration` | no | `kind` |
| [evaluation:310741-310743](../../../../../../reference/runtime/sand-eval-runner.cjs#L310741-L310743) | `FunctionDeclaration` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624609-624611](../../../../../../reference/runtime/host-main.cjs#L624609-L624611) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:310741-310743](../../../../../../reference/runtime/sand-eval-runner.cjs#L310741-L310743) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:624609

Calls written directly in this body: `SINGLE_MESSAGE_LOOP_KINDS.has`.

SHA-256 of the source span: `d8e1ef340d9bb2c7a7c4f3967493569913a5047b6924ade9cbecc080f25d8ba0`.

### evaluation:310741

Calls written directly in this body: `SINGLE_MESSAGE_LOOP_KINDS.has`.

SHA-256 of the source span: `d8e1ef340d9bb2c7a7c4f3967493569913a5047b6924ade9cbecc080f25d8ba0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
