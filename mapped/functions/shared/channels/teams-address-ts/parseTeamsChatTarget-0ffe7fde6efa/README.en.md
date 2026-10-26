# `parseTeamsChatTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/teams-address.ts` · [Module README](../../../../../modules/shared/channels/teams-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754791-754818](../../../../../../reference/runtime/host-main.cjs#L754791-L754818) | `FunctionDeclaration` | no | `chat` |
| [evaluation:538143-538170](../../../../../../reference/runtime/sand-eval-runner.cjs#L538143-L538170) | `FunctionDeclaration` | no | `chat` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754791-754818](../../../../../../reference/runtime/host-main.cjs#L754791-L754818) | 9 | 0 | 0 | 3 | 5 | 0 |
| [evaluation:538143-538170](../../../../../../reference/runtime/sand-eval-runner.cjs#L538143-L538170) | 9 | 0 | 0 | 3 | 5 | 0 |

### host:754791

Calls written directly in this body: `TEAMS_AAD_OBJECT_ID_PATTERN.test`, `TEAMS_CONVERSATION_ID_PATTERN.test`, `TEAMS_MESSAGE_ID_PATTERN.test`, `chat.indexOf`, `chat.slice`, `chat.startsWith`, `isTeamsChannelConversationId`, `isTeamsMeetingConversationId`, `mayBeTeamsChannelConversationId`, `new TeamsChatAddressError`.

Explicit throw targets: `TeamsChatAddressError`.

SHA-256 of the source span: `9828ee7045b85c07163224dcc86e406b30e4f8e4e9da3d691566ad83beba3428`.

### evaluation:538143

Calls written directly in this body: `TEAMS_AAD_OBJECT_ID_PATTERN.test`, `TEAMS_CONVERSATION_ID_PATTERN.test`, `TEAMS_MESSAGE_ID_PATTERN.test`, `chat.indexOf`, `chat.slice`, `chat.startsWith`, `isTeamsChannelConversationId`, `isTeamsMeetingConversationId`, `mayBeTeamsChannelConversationId`, `new TeamsChatAddressError`.

Explicit throw targets: `TeamsChatAddressError`.

SHA-256 of the source span: `9828ee7045b85c07163224dcc86e406b30e4f8e4e9da3d691566ad83beba3428`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
