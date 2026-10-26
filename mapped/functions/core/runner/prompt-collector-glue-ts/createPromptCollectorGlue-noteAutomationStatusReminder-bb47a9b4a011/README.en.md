# `createPromptCollectorGlue/noteAutomationStatusReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534019-534025](../../../../../../reference/runtime/sand-eval-runner.cjs#L534019-L534025) | `ArrowFunctionExpression` | no | `reminder, compactionEpoch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534019-534025](../../../../../../reference/runtime/sand-eval-runner.cjs#L534019-L534025) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:534019

Calls written directly in this body: `persistAutomationStatusReminder`.

Assignment or increment targets: `lastAutomationStatusCompactionEpoch`, `lastAutomationStatusReminder`.

SHA-256 of the source span: `eac43972b8b4be4012ae1bc77831f086eddd9b95014aa3a77e6abaaa20efbe8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
