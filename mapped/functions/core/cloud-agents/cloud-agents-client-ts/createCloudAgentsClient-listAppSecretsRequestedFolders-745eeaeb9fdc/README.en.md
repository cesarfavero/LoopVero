# `createCloudAgentsClient/listAppSecretsRequestedFolders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513296-513303](../../../../../../reference/runtime/host-main.cjs#L513296-L513303) | `FunctionDeclaration` | yes | `bcId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513296-513303](../../../../../../reference/runtime/host-main.cjs#L513296-L513303) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:513296

Calls written directly in this body: `.getBackgroundComposerConversation`, `appSecretsRequestedFoldersOf`, `bcId.trim`, `client`, `new GetBackgroundComposerConversationRequest`.

SHA-256 of the source span: `3308f3f6e3c08b304ff821f90cef78ea36d7a415cba8fdac3fabf9f72995dca2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
