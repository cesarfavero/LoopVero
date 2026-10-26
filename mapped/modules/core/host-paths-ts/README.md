# `core/host-paths.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../guide/architecture/README.md) · [Índice geral](../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:430771-430776](../../../../reference/runtime/host-main.cjs#L430771-L430776) |
| host | [host:430844-430956](../../../../reference/runtime/host-main.cjs#L430844-L430956) |
| evaluation | [evaluation:530384-530387](../../../../reference/runtime/sand-eval-runner.cjs#L530384-L530387) |
| evaluation | [evaluation:530453-530508](../../../../reference/runtime/sand-eval-runner.cjs#L530453-L530508) |
| state-worker | [state-worker:337-340](../../../../reference/runtime/workers/state/agent-store-worker.cjs#L337-L340) |
| state-worker | [state-worker:375-427](../../../../reference/runtime/workers/state/agent-store-worker.cjs#L375-L427) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `ensureDataRootAlias` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/ensureDataRootAlias-85b15d4628a3/README.md) |
| `getGatewayDiscoveryPath` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/getGatewayDiscoveryPath-513be6081393/README.md) |
| `getHostCrashMarkerPath` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/getHostCrashMarkerPath-f29496b7ac8e/README.md) |
| `getHostLockPath` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/getHostLockPath-ed6837a48fdb/README.md) |
| `getHostSecretsPath` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/getHostSecretsPath-7092387a3275/README.md) |
| `getHostUpgradeMarkerPath` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/getHostUpgradeMarkerPath-75bd574865f9/README.md) |
| `getHttpProxyNameOverridePath` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/getHttpProxyNameOverridePath-ae415a09692b/README.md) |
| `getSandProductionRootDir` | 3 | [Funcionamento estático](../../../functions/core/host-paths-ts/getSandProductionRootDir-6308d45292ca/README.md) |
| `getSandRootDir` | 3 | [Funcionamento estático](../../../functions/core/host-paths-ts/getSandRootDir-e11a0922b6ed/README.md) |
| `lstatIfExists` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/lstatIfExists-765cc6acdba0/README.md) |
| `readUserDataDirArg` | 3 | [Funcionamento estático](../../../functions/core/host-paths-ts/readUserDataDirArg-824efb3095ac/README.md) |
| `reanchorSandPath` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/reanchorSandPath-463ad61bc5e7/README.md) |
| `resolveSandDataRootOverride` | 3 | [Funcionamento estático](../../../functions/core/host-paths-ts/resolveSandDataRootOverride-abd2c1749375/README.md) |
| `resolveSandUserDataDir` | 3 | [Funcionamento estático](../../../functions/core/host-paths-ts/resolveSandUserDataDir-323e4a086f5e/README.md) |
| `sandDataRelativeTail` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/sandDataRelativeTail-f2cb47f68a84/README.md) |
| `toModelVisibleText` | 1 | [Funcionamento estático](../../../functions/core/host-paths-ts/toModelVisibleText-1428bde91891/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
