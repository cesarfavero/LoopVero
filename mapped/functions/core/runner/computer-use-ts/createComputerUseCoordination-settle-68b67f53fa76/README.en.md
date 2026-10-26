# `createComputerUseCoordination/settle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525373-525378](../../../../../../reference/runtime/sand-eval-runner.cjs#L525373-L525378) | `ArrowFunctionExpression` | no | `build2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525373-525378](../../../../../../reference/runtime/sand-eval-runner.cjs#L525373-L525378) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525373

Calls written directly in this body: `runCodeAdmissionLabel`, `runCodeOffer.settle`.

Assignment or increment targets: `codeMode`, `firstRunCodeAdmission`.

SHA-256 of the source span: `02ded6167a97d6c99967cd63aac5704cec018eac3099445c2d542198a930d29d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
