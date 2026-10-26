# `executorWritesPagesLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/multitask-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/multitask-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754465-754465](../../../../../../../reference/runtime/host-main.cjs#L754465-L754465) | `ArrowFunctionExpression` | no | `toolName, visualizeOffered` |
| [evaluation:537168-537168](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537168-L537168) | `ArrowFunctionExpression` | no | `toolName, visualizeOffered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754465-754465](../../../../../../../reference/runtime/host-main.cjs#L754465-L754465) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:754465 uses an implicit arrow-function return.
| [evaluation:537168-537168](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537168-L537168) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:537168 uses an implicit arrow-function return.

### host:754465

Calls written directly in this body: `pageDeliverable`.

SHA-256 of the source span: `7b6ec94791ed973b532289742813415875c7aa160b7368407e948e7dd8caad9f`.

### evaluation:537168

Calls written directly in this body: `pageDeliverable`.

SHA-256 of the source span: `7b6ec94791ed973b532289742813415875c7aa160b7368407e948e7dd8caad9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
