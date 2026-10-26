# `slackBotMention`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/team-bot-prompt.ts` · [Module README](../../../../../modules/core/runner/team-bot-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538564-538569](../../../../../../reference/runtime/sand-eval-runner.cjs#L538564-L538569) | `FunctionDeclaration` | no | `slack` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538564-538569](../../../../../../reference/runtime/sand-eval-runner.cjs#L538564-L538569) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538564

Calls written directly in this body: `slack.botName.trim`, `slack.botUserId.trim`.

SHA-256 of the source span: `6fd8de58bbfee68eafa580d59fa5fc318aa1d59c6724ef2039a115bb1ce1799b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
