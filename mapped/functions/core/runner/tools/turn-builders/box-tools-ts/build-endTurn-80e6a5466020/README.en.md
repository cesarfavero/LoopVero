# `build/endTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779023-779026](../../../../../../../../reference/runtime/host-main.cjs#L779023-L779026) | `ArrowFunctionExpression` | no | `{ toolCallId }` |
| [host:779140-779143](../../../../../../../../reference/runtime/host-main.cjs#L779140-L779143) | `ArrowFunctionExpression` | no | `{ toolCallId }` |
| [evaluation:578757-578760](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578757-L578760) | `ArrowFunctionExpression` | no | `{ toolCallId }` |
| [evaluation:578874-578877](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578874-L578877) | `ArrowFunctionExpression` | no | `{ toolCallId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779023-779026](../../../../../../../../reference/runtime/host-main.cjs#L779023-L779026) | 0 | 0 | 0 | 0 | 0 | 0 |
| [host:779140-779143](../../../../../../../../reference/runtime/host-main.cjs#L779140-L779143) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:578757-578760](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578757-L578760) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:578874-578877](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578874-L578877) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:779023

Calls written directly in this body: `toolHandoff.stopOtherTools`, `turn.pauseThisRun`.

SHA-256 of the source span: `4e4601b99f551ea57905a42e9e0cb074a963c51ff282f749bded97e4efdebcfa`.

### host:779140

Calls written directly in this body: `toolHandoff.stopOtherTools`, `turn.pauseThisRun`.

SHA-256 of the source span: `4e4601b99f551ea57905a42e9e0cb074a963c51ff282f749bded97e4efdebcfa`.

### evaluation:578757

Calls written directly in this body: `toolHandoff.stopOtherTools`, `turn.pauseThisRun`.

SHA-256 of the source span: `4e4601b99f551ea57905a42e9e0cb074a963c51ff282f749bded97e4efdebcfa`.

### evaluation:578874

Calls written directly in this body: `toolHandoff.stopOtherTools`, `turn.pauseThisRun`.

SHA-256 of the source span: `4e4601b99f551ea57905a42e9e0cb074a963c51ff282f749bded97e4efdebcfa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
