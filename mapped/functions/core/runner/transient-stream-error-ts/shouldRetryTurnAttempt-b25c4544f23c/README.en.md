# `shouldRetryTurnAttempt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590053-590073](../../../../../../reference/runtime/sand-eval-runner.cjs#L590053-L590073) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590053-590073](../../../../../../reference/runtime/sand-eval-runner.cjs#L590053-L590073) | 9 | 0 | 0 | 9 | 0 | 0 |

### evaluation:590053

Calls written directly in this body: `classifyInferenceHookTurnFailure`, `input2.automationIsRetryable`, `isFirstTokenStallError`, `isModelFallbackRetryError`, `isModelStreamWallClockLimitError`, `isProviderContentPolicyBlock`, `isRetryableProviderError`, `isStreamIdleError`.

SHA-256 of the source span: `a198992e9bd19f4e314f9dab3461ae70168b6a48b3b1861e5797bb920487992d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
