# `core/runner/background-work.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../../guide/components/turns/README.en.md) · [General index](../../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:590184-590186](../../../../../reference/runtime/host-main.cjs#L590184-L590186) |
| host | [host:590191-590222](../../../../../reference/runtime/host-main.cjs#L590191-L590222) |
| evaluation | [evaluation:490392-490726](../../../../../reference/runtime/sand-eval-runner.cjs#L490392-L490726) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `RevivingBackgroundWorkRegistry.constructor` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-constructor-bf08772d7e12/README.en.md) |
| `RevivingBackgroundWorkRegistry.enqueue` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-enqueue-037e6581d770/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-267d1436d1fb/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/abortAllWork` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-abortAllWork-4544680fad3e/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/abortWork` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-abortWork-a18cc9001b02/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/ack` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-ack-f8421e5d23c9/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/clearWork` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-clearWork-740e4885fd64/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/drainCompletions` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-drainCompletions-244138e76a82/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/enqueue` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-enqueue-ea13f5dd3131/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/enqueueCompletion` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-enqueueCompletion-70597b16783c/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/hasPendingCompletions` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-hasPendingCompletions-9bb795dc7ce7/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/hasRunningWork` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-hasRunningWork-f4e634fc4cd8/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/listWork` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-listWork-2af07214726b/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/markAwaitedCompletion` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-markAwaitedCompletion-f0bd81989eff/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/nack` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-nack-1328f3bb5b0c/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/pull` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-pull-fcf7c32efc8c/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/suppress` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-suppress-82881ec2b279/README.en.md) |
| `RevivingBackgroundWorkRegistry.forTurn/upsertWork` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-forTurn-upsertWork-8b440e2ff3e2/README.en.md) |
| `RevivingBackgroundWorkRegistry.recordWorkProvenance` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/RevivingBackgroundWorkRegistry-recordWorkProvenance-0c445ae6a07d/README.en.md) |
| `createBackgroundWatches` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-bb431d5d1f69/README.en.md) |
| `createBackgroundWatches/abortBackgroundShellWork` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-abortBackgroundShellWork-6114d32d26f6/README.en.md) |
| `createBackgroundWatches/cancelBackgroundShellRewatches` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-cancelBackgroundShellRewatches-e5081f1a1f1e/README.en.md) |
| `createBackgroundWatches/cancelCloudAgentWatches` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-cancelCloudAgentWatches-d5349550343c/README.en.md) |
| `createBackgroundWatches/cancelShellRewatch` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-cancelShellRewatch-aae2a013273f/README.en.md) |
| `createBackgroundWatches/drainBackgroundShellWork` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-drainBackgroundShellWork-2eebed536d01/README.en.md) |
| `createBackgroundWatches/drainCloudAgentWatches` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-drainCloudAgentWatches-e1bfb6dcea98/README.en.md) |
| `createBackgroundWatches/handleShellCompletionItem` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-handleShellCompletionItem-27f91a7f199b/README.en.md) |
| `createBackgroundWatches/handleShellWorkRegistered` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-handleShellWorkRegistered-c46422386d21/README.en.md) |
| `createBackgroundWatches/hasRunningBackgroundShellWork` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-hasRunningBackgroundShellWork-90cc645b324a/README.en.md) |
| `createBackgroundWatches/notifyShellWorkChanged` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-notifyShellWorkChanged-a814cb0c302c/README.en.md) |
| `createBackgroundWatches/pendingCloudAgentWatchBcIds` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-pendingCloudAgentWatchBcIds-4e4a6122dba0/README.en.md) |
| `createBackgroundWatches/pendingShellRewatchIds` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-pendingShellRewatchIds-5a68b2c95f27/README.en.md) |
| `createBackgroundWatches/registry3` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-registry3-59504dc7d323/README.en.md) |
| `createBackgroundWatches/watchBackgroundShell` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-watchBackgroundShell-ad63ae389581/README.en.md) |
| `createBackgroundWatches/watchBackgroundShell/cancel` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-watchBackgroundShell-cancel-d1a9a41e1291/README.en.md) |
| `createBackgroundWatches/watchBackgroundShell/settle2` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-watchBackgroundShell-settle2-32447277c602/README.en.md) |
| `createBackgroundWatches/watchCloudAgent` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-watchCloudAgent-566a1a2b03c7/README.en.md) |
| `createBackgroundWatches/watchCloudAgent/settle2` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/createBackgroundWatches-watchCloudAgent-settle2-4e62c0460a59/README.en.md) |
| `deriveBackgroundSubagentTitleFields` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/deriveBackgroundSubagentTitleFields-6c6878b5f9f0/README.en.md) |
| `formatSteerPrompt` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/formatSteerPrompt-3338fde85cbd/README.en.md) |
| `isBackgroundWorkRunning` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/isBackgroundWorkRunning-a3593664fe82/README.en.md) |
| `parseShellTerminalFooter` | 2 | [Static behavior](../../../../functions/core/runner/background-work-ts/parseShellTerminalFooter-6dc5c5728023/README.en.md) |
| `parseShellTerminalStartedAtMs` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/parseShellTerminalStartedAtMs-8177e039b6a8/README.en.md) |
| `shellRewatchPollMs` | 2 | [Static behavior](../../../../functions/core/runner/background-work-ts/shellRewatchPollMs-8913065ad528/README.en.md) |
| `spendRequestOwnsProvenance` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/spendRequestOwnsProvenance-5138fb80f314/README.en.md) |
| `watchStartedBy` | 1 | [Static behavior](../../../../functions/core/runner/background-work-ts/watchStartedBy-061c8548c5b8/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
