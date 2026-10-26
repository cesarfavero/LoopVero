# `createErrorFreeStepTracker/settle2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/error-free-step/error-free-step.ts` · [Module README](../../../../../../modules/core/runner/error-free-step/error-free-step-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589035-589040](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589035-L589040) | `FunctionDeclaration` | no | `turn, verdict` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589035-589040](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589035-L589040) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:589035

Calls written directly in this body: `emit`, `turn.timer.dispose`.

Assignment or increment targets: `pending`, `turn.settled`.

SHA-256 of the source span: `d35f4f599cfaef7b330bf869264c2cccbb1ee6efad1edcaf61ec6b01f7d330da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
