# `seededGroupChatTitleRepair`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495124-495128](../../../../../../../reference/runtime/host-main.cjs#L495124-L495128) | `FunctionDeclaration` | no | `agent, local` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495124-495128](../../../../../../../reference/runtime/host-main.cjs#L495124-L495128) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:495124

Calls written directly in this body: `agent.name.trim`, `groupChatPeopleTitleOver`, `local.name.trim`.

SHA-256 of the source span: `520a3be2815ee41f53b2655c481023bd3730daa6c4215fac22b75ca8a3bcc781`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
