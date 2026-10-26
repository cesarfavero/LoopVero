# `slackAudienceLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sessions/slack-conversation-prompt.ts` · [Module README](../../../../../../modules/core/runner/sessions/slack-conversation-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538280-538292](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538280-L538292) | `FunctionDeclaration` | no | `conversation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538280-538292](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538280-L538292) | 5 | 0 | 0 | 4 | 0 | 0 |

### evaluation:538280

Calls written directly in this body: `isDirectMessageChannel`, `privateAudience`, `sharedAudience`.

SHA-256 of the source span: `fef655131885fc3d66a45ae09794ad8613482a6f849773df8ef2fe0be03a3f18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
