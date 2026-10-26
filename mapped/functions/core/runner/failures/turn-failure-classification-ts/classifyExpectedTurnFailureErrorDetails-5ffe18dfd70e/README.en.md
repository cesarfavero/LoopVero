# `classifyExpectedTurnFailureErrorDetails`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/failures/turn-failure-classification.ts` · [Module README](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736115-736133](../../../../../../../reference/runtime/host-main.cjs#L736115-L736133) | `FunctionDeclaration` | no | `details` |
| [evaluation:589615-589633](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589615-L589633) | `FunctionDeclaration` | no | `details` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736115-736133](../../../../../../../reference/runtime/host-main.cjs#L736115-L736133) | 8 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:589615-589633](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589615-L589633) | 8 | 0 | 0 | 8 | 0 | 0 |

### host:736115

Calls written directly in this body: `BILLING_HINTED_RATE_LIMITED_CODES.has`, `RATE_LIMIT_ERROR_CODES.has`, `USAGE_LIMIT_ERROR_CODES.has`, `USAGE_LIMIT_RATE_LIMIT_REASONS.has`, `carriesBillingLimitHint`, `inferenceHookFailureOf`.

SHA-256 of the source span: `b85d69e02ceb89c0c0dd36429ac58d66d2e84bf2f505e8a9c6715dcbba6f0db3`.

### evaluation:589615

Calls written directly in this body: `BILLING_HINTED_RATE_LIMITED_CODES.has`, `RATE_LIMIT_ERROR_CODES.has`, `USAGE_LIMIT_ERROR_CODES.has`, `USAGE_LIMIT_RATE_LIMIT_REASONS.has`, `carriesBillingLimitHint`, `inferenceHookFailureOf`.

SHA-256 of the source span: `b85d69e02ceb89c0c0dd36429ac58d66d2e84bf2f505e8a9c6715dcbba6f0db3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
