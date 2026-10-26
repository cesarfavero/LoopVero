# `botTemplateRecipeJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/bot-templates/bot-template-recipe.ts` · [Module README](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494777-494779](../../../../../../reference/runtime/host-main.cjs#L494777-L494779) | `FunctionDeclaration` | no | `template` |
| [evaluation:570284-570286](../../../../../../reference/runtime/sand-eval-runner.cjs#L570284-L570286) | `FunctionDeclaration` | no | `template` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494777-494779](../../../../../../reference/runtime/host-main.cjs#L494777-L494779) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570284-570286](../../../../../../reference/runtime/sand-eval-runner.cjs#L570284-L570286) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494777

Calls written directly in this body: `JSON.stringify`, `withShippedClientRequiredTitle`.

SHA-256 of the source span: `81c3e5b345bcb3f24ac2f4d8931c703450892fe06492c2d6bc32b1b03c640458`.

### evaluation:570284

Calls written directly in this body: `JSON.stringify`, `withShippedClientRequiredTitle`.

SHA-256 of the source span: `81c3e5b345bcb3f24ac2f4d8931c703450892fe06492c2d6bc32b1b03c640458`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
