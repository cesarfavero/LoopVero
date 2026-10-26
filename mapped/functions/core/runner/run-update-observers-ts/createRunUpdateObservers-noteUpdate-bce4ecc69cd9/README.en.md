# `createRunUpdateObservers/noteUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/run-update-observers.ts` · [Module README](../../../../../modules/core/runner/run-update-observers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589727-589751](../../../../../../reference/runtime/sand-eval-runner.cjs#L589727-L589751) | `ArrowFunctionExpression` | no | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589727-589751](../../../../../../reference/runtime/sand-eval-runner.cjs#L589727-L589751) | 7 | 0 | 0 | 5 | 0 | 0 |

### evaluation:589727

Calls written directly in this body: `isSandAutoReviewCardMessage`, `run.collectors.collectAgentMessage`, `run.collectors.collectSendMessage`, `run.collectors.collectText`, `run.observeFirstToken`, `run.pause`.

SHA-256 of the source span: `97953873e7157108e239c6a9230d17ca6b5d0f26be83cec6f2446b45ce96d15c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
