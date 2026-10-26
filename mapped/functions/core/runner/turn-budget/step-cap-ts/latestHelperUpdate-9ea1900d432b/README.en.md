# `latestHelperUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/step-cap.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/step-cap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587307-587320](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587307-L587320) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587307-587320](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587307-L587320) | 5 | 1 | 0 | 4 | 0 | 0 |

### evaluation:587307

Calls written directly in this body: `.trim`, `/<summary_content>([\s\S]*?)<\/summary_content>/.exec`, `[computed].trim`, `isInjectedReminderMessage`, `isSummaryMessage`, `lastAssistantText`, `textOf4`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `5657a7f6e4e615f08c5765e2bea3d513ec3ccc4134ecd5eda367be2932861e66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
