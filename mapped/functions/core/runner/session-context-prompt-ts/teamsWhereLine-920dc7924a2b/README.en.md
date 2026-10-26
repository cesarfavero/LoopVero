# `teamsWhereLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/session-context-prompt.ts` · [Module README](../../../../../modules/core/runner/session-context-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538333-538350](../../../../../../reference/runtime/sand-eval-runner.cjs#L538333-L538350) | `FunctionDeclaration` | no | `session, participants` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538333-538350](../../../../../../reference/runtime/sand-eval-runner.cjs#L538333-L538350) | 7 | 0 | 0 | 5 | 0 | 0 |

### evaluation:538333

Calls written directly in this body: `speakersSentence`, `teamsChannelThreadOfSessionId`, `teamsConversationAfter`.

SHA-256 of the source span: `43b0219acc7d1c14a99522c607a3761b68e0ae940b33693c64b0cbc13bd1f019`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
