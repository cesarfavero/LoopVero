# `runCloudAgentAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568115-568809](../../../../../../reference/runtime/sand-eval-runner.cjs#L568115-L568809) | `FunctionDeclaration` | yes | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568115-568809](../../../../../../reference/runtime/sand-eval-runner.cjs#L568115-L568809) | 177 | 1 | 40 | 77 | 12 | 8 |

### evaluation:568115

Calls written directly in this body: `.flatMap`, `.join`, `.map`, `JSON.stringify`, `Object.keys`, `adoptionTail`, `all.filter`, `api.cancel`, `api.delete`, `api.findByPr`, `api.get`, `api.launch`, `api.list`, `api.listArtifacts`, `api.listEnvironments`, `api.listModels`, `api.listProjectThreads`, `api.listRepositories`, `api.listWorkers`, `api.publishRepository`, `api.rename`, `api.reply`, `api.setArchived`, `args.agent_id.trim`, `args.custom_mode.trim`, `args.repo.trim`, `args.repo_url.trim`, `args.title.trim`, `artifacts.map`, `backendRejectionMessage`, `childStoreOnBoxClaim`, `cloudAgentActionNeedsReview`, `cloudAgentConfirmVerdict`, `cloudAgentLaunchSeesBotStore`, `cloudAgentMetricsScope`, `cloudAgentRuntimeDescription`, `composeCanvasScratchLaunchPrompt`, `deps.canvasCursorAgentIds.add`, `deps.describeScmConnect`, `deps.hiddenCursorAgentCardIds.add`, `deps.hiddenCursorAgentCardIds.has`, `deps.launchBlockedReason`, `deps.onFollowupSent`, `deps.onLaunched`, `deps.onRefused`, `deps.reviewAction`, `deps.steer`, `deps.unwatch`, `deps.watch`, `deriveCloudAgentHandoffLineage`, `describeCloudAgentLaunchStores`, `describeCloudAgentSecretForwardRefusal`, `describeDumpedRun`, `describeSavedEnvironments`, `describeVisibility`, `dumpCloudAgentTranscript`, `encodeURIComponent`, `errorLogTag`, `exchangeAttachmentsOf`, `filtered.flatMap`, `formatCloudAgentLaunchBlockedMessage`, `forwardedSecretsClause`, `isOwnedCloudAgentProject`, `launchCard`, `launchedIds.add`, `launchedIds.delete`, `launchedIds.has`, `lines2.join`, `lines2.push`, `loadCloudAgentAttachments`, `modelCatalogLines`, `new Map`, `new SandCloudAgentToolInputError`, `normalizeCloudAgentSecretNames`, `prDetailLine`, `process.stderr.write`, `projectView`, `projectsByActivity`, `prompt.slice`, `publishRepositoryRejectionMessage`, `published.name.toLowerCase`, `pullRequestListText`, `readCloudAgentProjectTrees`, `recordCloudAgentExchangeOutbound`, `recordCloudAgentReply`, `recordCloudAgentSecretForward`, `recordDelegationDispatched`, `renderPrLookup`, `renderProjectDetail`, `renderProjectTreeDetail`, `repoName.toLowerCase`, `requireField2`, `resolveReplyMode`, `result.connectedProviders.join`, `result.repos.map`, `result.unreachableProviders.join`, `runPublishAppAction`, `stillWorkAfterUnwatch`, `toCloudAgentEnvironment`, `unlistable.get`, `unlistable.set`, `validateModelSelection`, `watchProvenanceOf`, `workers.map`.

Assignment or increment targets: `attachments`, `knownName`, `lookup3`, `outcome`, `prClause`, `published`, `result`, `sent`, `wasRunning`.

Explicit throw targets: `SandCloudAgentToolInputError`, `error63`.

SHA-256 of the source span: `b2d145e8a8f65168dcc4188139c31458d63072fdb20ad24d1069428924ca467c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
