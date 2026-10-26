# `describeAgentRunError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-run-error.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736810-736890](../../../../../../../reference/runtime/host-main.cjs#L736810-L736890) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736810-736890](../../../../../../../reference/runtime/host-main.cjs#L736810-L736890) | 26 | 0 | 0 | 9 | 0 | 0 |

### host:736810

Calls written directly in this body: `BackendConnectErrors.backendDetails`, `BackendConnectErrors.backendEntry`, `KNOWN_INTERNAL_ERROR_KINDS.find`, `MODEL_NAME_LEAKING_BACKEND_ERRORS.has`, `String`, `classifyExpectedTurnFailureDetails`, `custom4.detail.trim`, `custom4.title.trim`, `describeBackendDenial`, `findBackendConnectError`, `formatAgentRunError`, `inferenceHookNoticeOf`, `isBackendUnreachableError`, `isCheckpointPublicationFailure`, `isProviderCapacityError`, `isSandInferenceHookFailure`, `isSandUsageLimitReason`, `mapErrorDetailButtons`, `unifiedMoreUsageOf`, `usageLimitKindOf`, `withCursorWebsiteLinksOnly`, `withUsageLimitPrimaryAction`.

Assignment or increment targets: `detail`.

SHA-256 of the source span: `c93d413815a0f693a3eeecb58e59f5e85c4097065646aa65a9b66ea558c6ffe2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
