# `composeSandPromptStreamObservers/onRequestStart/onServedModel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529433-529437](../../../../../../reference/runtime/sand-eval-runner.cjs#L529433-L529437) | `FunctionExpression` | no | `modelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529433-529437](../../../../../../reference/runtime/sand-eval-runner.cjs#L529433-L529437) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:529433

Calls written directly in this body: `safelyObservePromptStream`.

SHA-256 of the source span: `e7b918fd11fc24a07f3a8b8ce6e2ec5045c00077af83524bb1a5a2f46faaa6a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
