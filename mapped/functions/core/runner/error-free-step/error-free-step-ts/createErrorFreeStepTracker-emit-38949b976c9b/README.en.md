# `createErrorFreeStepTracker/emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/error-free-step/error-free-step.ts` · [Module README](../../../../../../modules/core/runner/error-free-step/error-free-step-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589028-589034](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589028-L589034) | `FunctionDeclaration` | no | `turn, outcome, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589028-589034](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589028-L589034) | 0 | 0 | 0 | 0 | 0 | 1 |

### evaluation:589028

Calls written directly in this body: `errorFreeStep.increment`, `errorLogTag`, `logger104.warn`.

SHA-256 of the source span: `069c8b7dfc0b9d20dd36f97bb74c45009eb633da18cf4cf7e098c8024662c2bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
