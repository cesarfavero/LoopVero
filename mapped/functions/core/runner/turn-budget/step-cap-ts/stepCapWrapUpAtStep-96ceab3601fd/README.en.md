# `stepCapWrapUpAtStep`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/step-cap.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/step-cap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587284-587286](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587284-L587286) | `FunctionDeclaration` | no | `maxSteps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587284-587286](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587284-L587286) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587284

Calls written directly in this body: `Math.ceil`, `Math.max`.

SHA-256 of the source span: `7e54c9461a71d023c521ca2d461ca9cb2ba6944eea0d6f360b8409fc73346e31`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
