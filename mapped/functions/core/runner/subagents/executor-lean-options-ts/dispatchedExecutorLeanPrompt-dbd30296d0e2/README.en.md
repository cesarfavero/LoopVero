# `dispatchedExecutorLeanPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/executor-lean-options.ts` · [Module README](../../../../../../modules/core/runner/subagents/executor-lean-options-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582742-582750](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582742-L582750) | `FunctionDeclaration` | no | `gates, dispatch, inheritsParentRun` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582742-582750](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582742-L582750) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:582742

Calls written directly in this body: `gates.executorForkContext`, `gates.executorLeanPrompt`, `gates.executorSendRules`.

SHA-256 of the source span: `754a6d366e5b48daee80d9a8e99800ba529b0b7636becff499e3f502f631da98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
