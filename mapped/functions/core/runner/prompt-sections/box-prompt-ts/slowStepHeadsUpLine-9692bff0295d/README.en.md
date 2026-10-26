# `slowStepHeadsUpLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/box-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/box-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528982-528985](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528982-L528985) | `FunctionDeclaration` | no | `configured2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528982-528985](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528982-L528985) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528982

Calls written directly in this body: `.trim`, `configured2.replace`.

SHA-256 of the source span: `88bd1268ae758da09daeddcdf85f0525b15be72f47716ddcc987cab3e9794015`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
