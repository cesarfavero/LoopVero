# `slackInstalledLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/team-bot-prompt.ts` · [Module README](../../../../../modules/core/runner/team-bot-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538578-538584](../../../../../../reference/runtime/sand-eval-runner.cjs#L538578-L538584) | `FunctionDeclaration` | no | `slack, gates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538578-538584](../../../../../../reference/runtime/sand-eval-runner.cjs#L538578-L538584) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538578

Calls written directly in this body: `slackListenersLine`.

SHA-256 of the source span: `d7c0d8b1739988ca0e64741a2efc147ac6c5cd027ab472824d4bc1486708c0ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
