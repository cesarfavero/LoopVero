# `classifyAgentError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/turn-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/turn-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736911-736951](../../../../../../../reference/runtime/host-main.cjs#L736911-L736951) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736911-736951](../../../../../../../reference/runtime/host-main.cjs#L736911-L736951) | 11 | 0 | 0 | 12 | 0 | 0 |

### host:736911

Calls written directly in this body: `SandError.agentUnclassified`, `SandError.backendCapacityDeferred`, `SandError.backendRejected`, `SandError.checkpointPublicationFailed`, `SandError.contextWindowOverflow`, `SandError.conversationTooLarge`, `SandError.firstTokenStall`, `SandError.providerOverloaded`, `SandError.streamIdleStall`, `SandError.streamReset`, `SandError.turnBackendUnreachable`, `SandError.turnRetryable`, `brandedErrno`, `connectCodeOf`, `findSystemErrno`, `isBackendUnreachableError`, `isCheckpointPublicationFailure`, `isContextOverflowDeadEnd`, `isConversationTooLargeRefusal`, `isFirstTokenStallError`, `isProviderCapacityError`, `isRetryableProviderError`, `isStreamIdleError`, `isTransientStreamError`, `serverRetryAfterMsFromError`.

SHA-256 of the source span: `42adbeaab4de9c876fbeb1c886237348cdd6150ecdaa0f543cba85e73304e329`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
