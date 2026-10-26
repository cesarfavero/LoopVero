# `stripThinkingTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624625-624636](../../../../../../reference/runtime/host-main.cjs#L624625-L624636) | `FunctionDeclaration` | no | `text3` |
| [evaluation:310757-310768](../../../../../../reference/runtime/sand-eval-runner.cjs#L310757-L310768) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624625-624636](../../../../../../reference/runtime/host-main.cjs#L624625-L624636) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:310757-310768](../../../../../../reference/runtime/sand-eval-runner.cjs#L310757-L310768) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:624625

Calls written directly in this body: `text3.indexOf`, `text3.slice`.

Assignment or increment targets: `startIndex`, `text3`.

SHA-256 of the source span: `8c84ebb4725f81cb7ad1f8ed60d47ffac5896ff3e09bf5d60c0b94f58324ca1c`.

### evaluation:310757

Calls written directly in this body: `text3.indexOf`, `text3.slice`.

Assignment or increment targets: `startIndex`, `text3`.

SHA-256 of the source span: `8c84ebb4725f81cb7ad1f8ed60d47ffac5896ff3e09bf5d60c0b94f58324ca1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
