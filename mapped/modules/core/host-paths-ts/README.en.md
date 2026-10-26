# `core/host-paths.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../guide/architecture/README.en.md) · [General index](../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:430771-430776](../../../../reference/runtime/host-main.cjs#L430771-L430776) |
| host | [host:430844-430956](../../../../reference/runtime/host-main.cjs#L430844-L430956) |
| evaluation | [evaluation:530384-530387](../../../../reference/runtime/sand-eval-runner.cjs#L530384-L530387) |
| evaluation | [evaluation:530453-530508](../../../../reference/runtime/sand-eval-runner.cjs#L530453-L530508) |
| state-worker | [state-worker:337-340](../../../../reference/runtime/workers/state/agent-store-worker.cjs#L337-L340) |
| state-worker | [state-worker:375-427](../../../../reference/runtime/workers/state/agent-store-worker.cjs#L375-L427) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `ensureDataRootAlias` | 1 | [Static behavior](../../../functions/core/host-paths-ts/ensureDataRootAlias-85b15d4628a3/README.en.md) |
| `getGatewayDiscoveryPath` | 1 | [Static behavior](../../../functions/core/host-paths-ts/getGatewayDiscoveryPath-513be6081393/README.en.md) |
| `getHostCrashMarkerPath` | 1 | [Static behavior](../../../functions/core/host-paths-ts/getHostCrashMarkerPath-f29496b7ac8e/README.en.md) |
| `getHostLockPath` | 1 | [Static behavior](../../../functions/core/host-paths-ts/getHostLockPath-ed6837a48fdb/README.en.md) |
| `getHostSecretsPath` | 1 | [Static behavior](../../../functions/core/host-paths-ts/getHostSecretsPath-7092387a3275/README.en.md) |
| `getHostUpgradeMarkerPath` | 1 | [Static behavior](../../../functions/core/host-paths-ts/getHostUpgradeMarkerPath-75bd574865f9/README.en.md) |
| `getHttpProxyNameOverridePath` | 1 | [Static behavior](../../../functions/core/host-paths-ts/getHttpProxyNameOverridePath-ae415a09692b/README.en.md) |
| `getSandProductionRootDir` | 3 | [Static behavior](../../../functions/core/host-paths-ts/getSandProductionRootDir-6308d45292ca/README.en.md) |
| `getSandRootDir` | 3 | [Static behavior](../../../functions/core/host-paths-ts/getSandRootDir-e11a0922b6ed/README.en.md) |
| `lstatIfExists` | 1 | [Static behavior](../../../functions/core/host-paths-ts/lstatIfExists-765cc6acdba0/README.en.md) |
| `readUserDataDirArg` | 3 | [Static behavior](../../../functions/core/host-paths-ts/readUserDataDirArg-824efb3095ac/README.en.md) |
| `reanchorSandPath` | 1 | [Static behavior](../../../functions/core/host-paths-ts/reanchorSandPath-463ad61bc5e7/README.en.md) |
| `resolveSandDataRootOverride` | 3 | [Static behavior](../../../functions/core/host-paths-ts/resolveSandDataRootOverride-abd2c1749375/README.en.md) |
| `resolveSandUserDataDir` | 3 | [Static behavior](../../../functions/core/host-paths-ts/resolveSandUserDataDir-323e4a086f5e/README.en.md) |
| `sandDataRelativeTail` | 1 | [Static behavior](../../../functions/core/host-paths-ts/sandDataRelativeTail-f2cb47f68a84/README.en.md) |
| `toModelVisibleText` | 1 | [Static behavior](../../../functions/core/host-paths-ts/toModelVisibleText-1428bde91891/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
