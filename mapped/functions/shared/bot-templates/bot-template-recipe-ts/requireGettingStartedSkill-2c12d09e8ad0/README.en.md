# `requireGettingStartedSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/bot-templates/bot-template-recipe.ts` · [Module README](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494725-494734](../../../../../../reference/runtime/host-main.cjs#L494725-L494734) | `FunctionDeclaration` | no | `template, ctx` |
| [evaluation:570232-570241](../../../../../../reference/runtime/sand-eval-runner.cjs#L570232-L570241) | `FunctionDeclaration` | no | `template, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494725-494734](../../../../../../reference/runtime/host-main.cjs#L494725-L494734) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:570232-570241](../../../../../../reference/runtime/sand-eval-runner.cjs#L570232-L570241) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:494725

Calls written directly in this body: `ctx.addIssue`, `template.skills.some`.

SHA-256 of the source span: `7f157dcc33edfc733f202cd95a6f104989d192a2bb221349e19d86c4c4cb91b8`.

### evaluation:570232

Calls written directly in this body: `ctx.addIssue`, `template.skills.some`.

SHA-256 of the source span: `d26e6169219fb73de5e5b587c4da2b853987853cec449f548fc0c1275e21068b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
