# `parseBotTemplateRecipe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/bot-templates/bot-template-recipe.ts` · [Module README](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494783-494788](../../../../../../reference/runtime/host-main.cjs#L494783-L494788) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494783-494788](../../../../../../reference/runtime/host-main.cjs#L494783-L494788) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:494783

Calls written directly in this body: `.decode`, `JSON.parse`, `botTemplateSchema.parse`, `new BotTemplateRecipeRefused`, `new TextDecoder`.

Explicit throw targets: `BotTemplateRecipeRefused`.

SHA-256 of the source span: `e132857f54d2941ae9ac2e2c50d82f4706a2ab554010310bb8c6277b954f06ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
