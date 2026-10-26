# `stripGroupTurnClosing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491181-491185](../../../../../../reference/runtime/host-main.cjs#L491181-L491185) | `FunctionDeclaration` | no | `text3` |
| [evaluation:526099-526103](../../../../../../reference/runtime/sand-eval-runner.cjs#L526099-L526103) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491181-491185](../../../../../../reference/runtime/host-main.cjs#L491181-L491185) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:526099-526103](../../../../../../reference/runtime/sand-eval-runner.cjs#L526099-L526103) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:491181

Calls written directly in this body: `.trimEnd`, `isGroupTurnPromptText`, `lastLineStartingWith`, `text3.slice`.

SHA-256 of the source span: `24a063b8b2975f2bafcaafe59aac2bb7f9a1cc87086482c2d6fbe7ba79bd3fb9`.

### evaluation:526099

Calls written directly in this body: `.trimEnd`, `isGroupTurnPromptText`, `lastLineStartingWith`, `text3.slice`.

SHA-256 of the source span: `24a063b8b2975f2bafcaafe59aac2bb7f9a1cc87086482c2d6fbe7ba79bd3fb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
