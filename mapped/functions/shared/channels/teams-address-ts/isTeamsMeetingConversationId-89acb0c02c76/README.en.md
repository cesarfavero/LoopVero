# `isTeamsMeetingConversationId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/teams-address.ts` · [Module README](../../../../../modules/shared/channels/teams-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754788-754790](../../../../../../reference/runtime/host-main.cjs#L754788-L754790) | `FunctionDeclaration` | no | `conversationId` |
| [evaluation:538140-538142](../../../../../../reference/runtime/sand-eval-runner.cjs#L538140-L538142) | `FunctionDeclaration` | no | `conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754788-754790](../../../../../../reference/runtime/host-main.cjs#L754788-L754790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538140-538142](../../../../../../reference/runtime/sand-eval-runner.cjs#L538140-L538142) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754788

Calls written directly in this body: `conversationId.startsWith`.

SHA-256 of the source span: `0d8144c6b730207a6fab6900230793cfef54b53b0014a2bf623f832a362c13ee`.

### evaluation:538140

Calls written directly in this body: `conversationId.startsWith`.

SHA-256 of the source span: `0d8144c6b730207a6fab6900230793cfef54b53b0014a2bf623f832a362c13ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
