# `readSandHostEnvironment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-environment.ts` · [Module README](../../../../modules/host/host-environment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494115-494174](../../../../../reference/runtime/host-main.cjs#L494115-L494174) | `FunctionDeclaration` | no | `env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494115-494174](../../../../../reference/runtime/host-main.cjs#L494115-L494174) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494115

Calls written directly in this body: `Number`, `byteLimitOverride`, `conversationGcOverride`, `csnapsBinPathOf`, `env.SAND_DEV_INFERENCE_TOKEN_FILE.trim`, `env.SAND_INFERENCE_RENEWAL_CREDENTIAL.trim`, `env[computed].trim`, `getAgentStoreRpcServiceOverride`, `getBoxStoreBackendPolicy`, `hostBundleBaseUrlOverride`, `isAffirmative`, `isBoxStoreCopyInEnabled`, `isBoxStoreSyncEnabled`, `isNegative`, `jitterRatio`, `managedSetupRunAs`, `positiveInt`, `readSandProcessEnvironment`, `resolveSandStreamTuning`, `trimmedNonEmpty`.

SHA-256 of the source span: `c0319a521c19011b6f43a76dd0fdd8be1ebfce5348ad2849fb31637db3d884a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
