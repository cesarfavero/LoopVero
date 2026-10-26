# `createCloudAgentsClient/launch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512916-513032](../../../../../../reference/runtime/host-main.cjs#L512916-L513032) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512916-513032](../../../../../../reference/runtime/host-main.cjs#L512916-L513032) | 20 | 0 | 6 | 1 | 6 | 0 |

### host:512916

Calls written directly in this body: `.startBackgroundComposerFromSnapshot`, `args.customMode.trim`, `args.startingRef.trim`, `args.title.trim`, `buildCloudAgentConversationAction`, `buildCloudAgentRequestedModel`, `buildCloudAgentUserMessage`, `buildRepoFromRemote`, `client`, `cloudAgentUrl`, `crypto.randomUUID`, `deps.getDashboardClient`, `deps.prepareNewRepo`, `new DevcontainerStartingPoint`, `new GrokBotHandoffLineage`, `new ProjectDetails`, `new SandCloudAgentCustomModeError`, `new SandCloudAgentLaunchError`, `new StartBackgroundComposerFromSnapshotRequest`, `newRepo.markLaunched`, `refuseUnboundSecretNames`, `requireCustomModesEnabled`, `resolveCloudAgentEnvironmentFields`, `resolveLaunchCustomMode`, `resolveLaunchRepoReference`, `resolvePrivateWorkerMachine`, `resolvePrivateWorkerTeamId`, `resolveSavedEnvironment`, `savedEnvironment.name.trim`, `toStartRepoConfig`.

Explicit throw targets: `SandCloudAgentCustomModeError`, `SandCloudAgentLaunchError`.

SHA-256 of the source span: `ac70e014ea39e7bae2c7389751bdc0c7baec7c39b586bc95d69d81b3d7859738`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
