# `encodeBotTemplateRecipe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/bot-templates/bot-template-recipe.ts` · [Module README](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494780-494782](../../../../../../reference/runtime/host-main.cjs#L494780-L494782) | `FunctionDeclaration` | no | `template` |
| [evaluation:570287-570289](../../../../../../reference/runtime/sand-eval-runner.cjs#L570287-L570289) | `FunctionDeclaration` | no | `template` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494780-494782](../../../../../../reference/runtime/host-main.cjs#L494780-L494782) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570287-570289](../../../../../../reference/runtime/sand-eval-runner.cjs#L570287-L570289) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494780

Calls written directly in this body: `.encode`, `Uint8Array.from`, `botTemplateRecipeJson`, `new TextEncoder`.

SHA-256 of the source span: `305a56b1b2c6a6ddcf857eca9283a1f491e9fdcbd0def556285dca5337899e2d`.

### evaluation:570287

Calls written directly in this body: `.encode`, `Uint8Array.from`, `botTemplateRecipeJson`, `new TextEncoder`.

SHA-256 of the source span: `305a56b1b2c6a6ddcf857eca9283a1f491e9fdcbd0def556285dca5337899e2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
