# `prepareAgentMediaStoreRoots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-user-handover.ts` · [Module README](../../../../modules/host/agent-user-handover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494835-494876](../../../../../reference/runtime/host-main.cjs#L494835-L494876) | `FunctionDeclaration` | yes | `agentDir, handoff2 = handPathToAgentUser, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494835-494876](../../../../../reference/runtime/host-main.cjs#L494835-L494876) | 3 | 1 | 3 | 0 | 1 | 2 |

### host:494835

Calls written directly in this body: `classifyAgentMediaRootOwnership`, `ensureSandDataDirSync`, `errorClassOf`, `findSystemErrno`, `getAgentAssetsDir`, `getAgentAttachmentsDir`, `handoff2`, `options2.observe`.

Assignment or increment targets: `agentUser`, `agentUserReadErrorClass`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `6bab5cc7a20d6b930e58ce16af48a6d32935045253e8b4d683ea89cc7714b80c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
