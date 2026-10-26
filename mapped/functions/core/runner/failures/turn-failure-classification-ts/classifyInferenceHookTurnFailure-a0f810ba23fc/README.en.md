# `classifyInferenceHookTurnFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/failures/turn-failure-classification.ts` · [Module README](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736160-736163](../../../../../../../reference/runtime/host-main.cjs#L736160-L736163) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589660-589663](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589660-L589663) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736160-736163](../../../../../../../reference/runtime/host-main.cjs#L736160-L736163) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589660-589663](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589660-L589663) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:736160

Calls written directly in this body: `classifyExpectedTurnFailure`, `isSandInferenceHookFailure`.

SHA-256 of the source span: `84160b23bfdc7c28faaf3ad3d3db32c999ed4bb5a8bc18f5f211f93449e5f242`.

### evaluation:589660

Calls written directly in this body: `classifyExpectedTurnFailure`, `isSandInferenceHookFailure`.

SHA-256 of the source span: `57fd441801e26f4379f31b7bd486f3f56b959e3db93964dfbdd2ff4acdd8ea00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
