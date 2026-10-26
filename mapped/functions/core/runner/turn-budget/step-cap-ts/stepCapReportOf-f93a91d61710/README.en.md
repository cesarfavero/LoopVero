# `stepCapReportOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/step-cap.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/step-cap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587321-587327](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587321-L587327) | `FunctionDeclaration` | no | `maxSteps, messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587321-587327](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587321-L587327) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587321

Calls written directly in this body: `latestHelperUpdate`, `messages.at`.

SHA-256 of the source span: `5e3208b47a5976be9cf3eccb4be1a5c9e0035a4e8dbe10853161dadcdd6c0386`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
