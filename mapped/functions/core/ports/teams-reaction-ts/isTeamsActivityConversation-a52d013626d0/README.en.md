# `isTeamsActivityConversation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/teams-reaction.ts` · [Module README](../../../../../modules/core/ports/teams-reaction-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768284-768290](../../../../../../reference/runtime/host-main.cjs#L768284-L768290) | `FunctionDeclaration` | no | `conversation` |
| [evaluation:563800-563806](../../../../../../reference/runtime/sand-eval-runner.cjs#L563800-L563806) | `FunctionDeclaration` | no | `conversation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768284-768290](../../../../../../reference/runtime/host-main.cjs#L768284-L768290) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563800-563806](../../../../../../reference/runtime/sand-eval-runner.cjs#L563800-L563806) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:768284

Calls written directly in this body: `TEAMS_CONVERSATION_ID_PATTERN.test`, `TEAMS_MESSAGE_ID_PATTERN.test`, `conversation.includes`, `isTeamsMeetingConversationId`, `teamsConversationKeyOf`, `teamsConversationRootMessageIdOf`.

SHA-256 of the source span: `a53007c62c9a6231fc0d0083677fc7975f6cca9761e85636db7ed20d2a4ea27e`.

### evaluation:563800

Calls written directly in this body: `TEAMS_CONVERSATION_ID_PATTERN.test`, `TEAMS_MESSAGE_ID_PATTERN.test`, `conversation.includes`, `isTeamsMeetingConversationId`, `teamsConversationKeyOf`, `teamsConversationRootMessageIdOf`.

SHA-256 of the source span: `a53007c62c9a6231fc0d0083677fc7975f6cca9761e85636db7ed20d2a4ea27e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
