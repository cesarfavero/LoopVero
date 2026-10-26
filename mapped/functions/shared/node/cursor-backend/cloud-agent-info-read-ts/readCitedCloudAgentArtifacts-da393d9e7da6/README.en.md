# `readCitedCloudAgentArtifacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508589-508615](../../../../../../../reference/runtime/host-main.cjs#L508589-L508615) | `FunctionDeclaration` | yes | `client, bcId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508589-508615](../../../../../../../reference/runtime/host-main.cjs#L508589-L508615) | 2 | 0 | 2 | 5 | 0 | 2 |

### host:508589

Calls written directly in this body: `classifyReadFailure`, `isArtifactsUnavailableError`, `listCloudAgentArtifactRefs`, `planCloudAgentArtifacts`, `plannedCloudAgentArtifactFiles`, `readCloudAgentReport`.

Assignment or increment targets: `listed`, `summary`.

SHA-256 of the source span: `907a2b7f3273d5a286671a04075104f90a55d48a3a9e5470bfb5252176b278b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
