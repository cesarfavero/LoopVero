# `slackWhereLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sessions/slack-conversation-prompt.ts` · [Module README](../../../../../../modules/core/runner/sessions/slack-conversation-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538261-538279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538261-L538279) | `FunctionDeclaration` | no | `conversation, gates = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538261-538279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538261-L538279) | 10 | 0 | 0 | 6 | 0 | 0 |

### evaluation:538261

Calls written directly in this body: `isDirectMessageChannel`, `speakersSentence`.

SHA-256 of the source span: `c6bdb20e5cd3a248aa7bb1feef09f4a5e61e5c0ab1372b640dcc5eaa8821e3d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
