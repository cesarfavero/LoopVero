# `createCloudAgentsClient/getTranscriptDump`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513268-513289](../../../../../../reference/runtime/host-main.cjs#L513268-L513289) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513268-513289](../../../../../../reference/runtime/host-main.cjs#L513268-L513289) | 2 | 0 | 3 | 2 | 0 | 1 |

### host:513268

Calls written directly in this body: `args.bcId.trim`, `backend.getBackgroundComposerConversation`, `backend.getBackgroundComposerInfo`, `buildTranscriptJsonl`, `buildTranscriptJsonlInSlices`, `classifyReadFailure`, `client`, `createEventLoopSlicer`, `infoRequest`, `mapRunStatus`, `new GetBackgroundComposerConversationRequest`.

Assignment or increment targets: `run`.

SHA-256 of the source span: `79822faa9f19e770aeb569aad17298bc33a011d7c90322c78e8f55335585fe88`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
