# `teamBotSlackListenerInvite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/team-bot-prompt.ts` · [Module README](../../../../../modules/core/runner/team-bot-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538570-538573](../../../../../../reference/runtime/sand-eval-runner.cjs#L538570-L538573) | `FunctionDeclaration` | no | `slack` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538570-538573](../../../../../../reference/runtime/sand-eval-runner.cjs#L538570-L538573) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538570

Calls written directly in this body: `slackBotMention`.

SHA-256 of the source span: `479f02313f8e0999f045085aba60985e839651323cba945a70bae006742c0b14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
