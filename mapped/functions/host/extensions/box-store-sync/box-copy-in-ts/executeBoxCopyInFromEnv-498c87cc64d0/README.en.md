# `executeBoxCopyInFromEnv`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483269-483550](../../../../../../../reference/runtime/host-main.cjs#L483269-L483550) | `FunctionDeclaration` | yes | `env, createTelemetryClient` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483269-483550](../../../../../../../reference/runtime/host-main.cjs#L483269-L483550) | 9 | 1 | 6 | 5 | 0 | 1 |

### host:483269

Calls written directly in this body: `.catch`, `Date.now`, `acquireCopyInLock`, `buildCopyInStatusFromResult`, `copyInFailureOf`, `createDeadlinePolicy`, `createIdleWatchdogPolicy`, `createPollingPolicy2`, `createRetryPolicy`, `createSandDurableFileOwner`, `errorMessage`, `getAgentStoreRpcServiceOverride`, `getBoxStoreBackendPolicy`, `getSandRootDir`, `isBoxStoreCopyInEnabled`, `isBoxStorePackBuildEnabled`, `isLegacyBoxStoreHydrateSkipped`, `lock.release`, `log5`, `logFields`, `makeCopyInAccessTokenGetter`, `makeCopyInStatusWriter`, `new AgentStoreObjectStoreProvider`, `new BoxStoreSync`, `new SandSourceMap`, `new SandStructuredLogTelemetry`, `new Set`, `outcomeToExitCode`, `pinBoxStoreDiagnosticsReporter`, `readSandProcessEnvironment`, `reportCopyIn`, `resolveBoxObjectStoreProvider`, `resolveCopyInAttempts`, `resolveCopyInConcurrency`, `resolveCopyInDownloadOwner`, `resolveCopyInStoreId`, `resolveCopyInStuckThresholdMs`, `resolveSandBoxIdentityTags`, `result.failures.slice`, `runBoxCopyInWithRetry`, `shouldHydrateFromLegacyStore`, `stuckWatchdog.arm`, `stuckWatchdogHandle.dispose`, `telemetry.dispose`, `telemetry.reportBoxCopyIn`, `writeStatus`.

Assignment or increment targets: `legacyFallbackReason`.

SHA-256 of the source span: `8c201c8c8d8e95b6ede34583d945884e9c55046f094eadd6c3d03adb8fa86e0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
