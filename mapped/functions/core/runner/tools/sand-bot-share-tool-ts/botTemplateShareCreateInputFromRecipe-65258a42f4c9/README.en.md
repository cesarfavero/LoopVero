# `botTemplateShareCreateInputFromRecipe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-bot-share-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-bot-share-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771148-771184](../../../../../../../reference/runtime/host-main.cjs#L771148-L771184) | `FunctionDeclaration` | no | `args` |
| [evaluation:570382-570418](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570382-L570418) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771148-771184](../../../../../../../reference/runtime/host-main.cjs#L771148-L771184) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:570382-570418](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570382-L570418) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:771148

Calls written directly in this body: `botTemplateDraftSchema.safeParse`, `encodeBotTemplateRecipe`, `nonEmptyAvatar`, `recipeArgChars`, `resolveGrokBotMark`, `stampBotTemplateShareArgs`, `stamped.error.issues.some`.

SHA-256 of the source span: `341eeebf21387a8d139d8b3e351b3b7bf1f31768529bcefed2ef189f9a5cc73a`.

### evaluation:570382

Calls written directly in this body: `botTemplateDraftSchema.safeParse`, `encodeBotTemplateRecipe`, `nonEmptyAvatar`, `recipeArgChars`, `resolveGrokBotMark`, `stampBotTemplateShareArgs`, `stamped.error.issues.some`.

SHA-256 of the source span: `341eeebf21387a8d139d8b3e351b3b7bf1f31768529bcefed2ef189f9a5cc73a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
