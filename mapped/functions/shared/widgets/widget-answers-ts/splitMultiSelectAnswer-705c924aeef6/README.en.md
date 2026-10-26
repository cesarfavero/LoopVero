# `splitMultiSelectAnswer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/widgets/widget-answers.ts` · [Module README](../../../../../modules/shared/widgets/widget-answers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706690-706692](../../../../../../reference/runtime/host-main.cjs#L706690-L706692) | `FunctionDeclaration` | no | `answer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706690-706692](../../../../../../reference/runtime/host-main.cjs#L706690-L706692) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706690

Calls written directly in this body: `answer.split`, `normalizeMultiSelectAnswerValues`.

SHA-256 of the source span: `6146eee6f0b9bf884882cf6354e6ddc5e8de8bb1e9b6555b7acda3e797ef61a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
