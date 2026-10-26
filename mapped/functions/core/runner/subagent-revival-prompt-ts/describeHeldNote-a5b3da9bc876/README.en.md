# `describeHeldNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-revival-prompt.ts` · [Module README](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583885-583887](../../../../../../reference/runtime/sand-eval-runner.cjs#L583885-L583887) | `FunctionDeclaration` | no | `heldForMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583885-583887](../../../../../../reference/runtime/sand-eval-runner.cjs#L583885-L583887) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583885

Calls written directly in this body: `describeHeldDuration`.

SHA-256 of the source span: `5bc6d3b303a4088d2580fa9f815e5d08676cb9f48fb574c771b870cfbb42b830`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
