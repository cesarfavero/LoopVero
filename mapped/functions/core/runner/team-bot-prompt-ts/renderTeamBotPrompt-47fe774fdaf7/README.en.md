# `renderTeamBotPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/team-bot-prompt.ts` · [Module README](../../../../../modules/core/runner/team-bot-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538599-538613](../../../../../../reference/runtime/sand-eval-runner.cjs#L538599-L538613) | `FunctionDeclaration` | no | `identity2, gates = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538599-538613](../../../../../../reference/runtime/sand-eval-runner.cjs#L538599-L538613) | 5 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538599

Calls written directly in this body: `.join`, `slackLine`, `teamOpeningLine`, `teamsEnabledLine`.

SHA-256 of the source span: `ad383ed96c403b54763880dcb43ab46e227f7273e0ac177915e21214cd36c746`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
