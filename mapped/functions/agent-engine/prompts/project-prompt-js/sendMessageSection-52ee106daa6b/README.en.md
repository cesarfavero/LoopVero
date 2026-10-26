# `sendMessageSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641018-641033](../../../../../../reference/runtime/host-main.cjs#L641018-L641033) | `FunctionDeclaration` | no | `sendMessageToolName, { askQuestionAvailable, sendFirstRule, progressBullet }` |
| [evaluation:431631-431646](../../../../../../reference/runtime/sand-eval-runner.cjs#L431631-L431646) | `FunctionDeclaration` | no | `sendMessageToolName, { askQuestionAvailable, sendFirstRule, progressBullet }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641018-641033](../../../../../../reference/runtime/host-main.cjs#L641018-L641033) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431631-431646](../../../../../../reference/runtime/sand-eval-runner.cjs#L431631-L431646) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:641018

Calls written directly in this body: `.join`, `askThroughSendMessageBullet`, `paragraphs.filter`.

SHA-256 of the source span: `01f8a31fa24310757f2aee8313d814dda92ca3eefd87ada081f407aab9a49a98`.

### evaluation:431631

Calls written directly in this body: `.join`, `askThroughSendMessageBullet`, `paragraphs.filter`.

SHA-256 of the source span: `01f8a31fa24310757f2aee8313d814dda92ca3eefd87ada081f407aab9a49a98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
