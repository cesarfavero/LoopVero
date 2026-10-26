# `teamsBotMention`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/team-bot-prompt.ts` · [Module README](../../../../../modules/core/runner/team-bot-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538585-538588](../../../../../../reference/runtime/sand-eval-runner.cjs#L538585-L538588) | `FunctionDeclaration` | no | `teams` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538585-538588](../../../../../../reference/runtime/sand-eval-runner.cjs#L538585-L538588) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538585

Calls written directly in this body: `teams.botName.trim`.

SHA-256 of the source span: `af6eba7793fcc954c111eb2546ba1f48a9773ccdb7994f678852f2bbcf9987a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
