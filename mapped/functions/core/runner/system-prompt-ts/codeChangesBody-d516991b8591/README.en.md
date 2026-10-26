# `codeChangesBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532950-532979](../../../../../../reference/runtime/sand-eval-runner.cjs#L532950-L532979) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532950-532979](../../../../../../reference/runtime/sand-eval-runner.cjs#L532950-L532979) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:532950

Calls written directly in this body: `.join`, `builtinScmAbsenceGuidance`, `greenfieldDeploymentSentences`.

SHA-256 of the source span: `a689970b6e46c42a89f29bc1a92cd24bdc5eb7c98cd7dc91eb26755ab9bfe3d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
