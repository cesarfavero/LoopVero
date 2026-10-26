# `mayBeTeamsChannelConversationId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/teams-address.ts` · [Module README](../../../../../modules/shared/channels/teams-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754785-754787](../../../../../../reference/runtime/host-main.cjs#L754785-L754787) | `FunctionDeclaration` | no | `conversationId` |
| [evaluation:538137-538139](../../../../../../reference/runtime/sand-eval-runner.cjs#L538137-L538139) | `FunctionDeclaration` | no | `conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754785-754787](../../../../../../reference/runtime/host-main.cjs#L754785-L754787) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538137-538139](../../../../../../reference/runtime/sand-eval-runner.cjs#L538137-L538139) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754785

Calls written directly in this body: `isTeamsChannelConversationId`, `isTeamsLegacyConversationId`.

SHA-256 of the source span: `f54107680e9c3c0ebfb939a735a321fded90d0e5a94677791ddc25945349b3c8`.

### evaluation:538137

Calls written directly in this body: `isTeamsChannelConversationId`, `isTeamsLegacyConversationId`.

SHA-256 of the source span: `f54107680e9c3c0ebfb939a735a321fded90d0e5a94677791ddc25945349b3c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
