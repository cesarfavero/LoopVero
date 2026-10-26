# `audienceLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/session-context-prompt.ts` · [Module README](../../../../../modules/core/runner/session-context-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538380-538391](../../../../../../reference/runtime/sand-eval-runner.cjs#L538380-L538391) | `FunctionDeclaration` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538380-538391](../../../../../../reference/runtime/sand-eval-runner.cjs#L538380-L538391) | 4 | 0 | 0 | 5 | 0 | 0 |

### evaluation:538380

Calls written directly in this body: `privateAudience`, `privateTeamsDm`, `sharedAudience`, `sharedSurface`, `slackAudienceLine`, `slackConversationOf`.

SHA-256 of the source span: `cbfa43c62e77c3fc0ff896f42371374823f08b1a3055cc189b4ece3debb4aac1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
