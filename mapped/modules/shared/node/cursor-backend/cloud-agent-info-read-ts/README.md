# `shared/node/cursor-backend/cloud-agent-info-read.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../../guide/architecture/README.md) · [Índice geral](../../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:508128-508132](../../../../../../reference/runtime/host-main.cjs#L508128-L508132) |
| host | [host:508315-508670](../../../../../../reference/runtime/host-main.cjs#L508315-L508670) |
| evaluation | [evaluation:566513-566546](../../../../../../reference/runtime/sand-eval-runner.cjs#L566513-L566546) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `classifyReadFailure` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/classifyReadFailure-674608ebd1b2/README.md) |
| `classifyReadFailure2` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/classifyReadFailure2-2b57d14c52ae/README.md) |
| `fetchLivePrState` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/fetchLivePrState-83c28f9ff605/README.md) |
| `groupPrs` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/groupPrs-c46d34a37852/README.md) |
| `hasPrUrl` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/hasPrUrl-5bf7c2f0c048/README.md) |
| `infoRequest` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/infoRequest-5b143f6d5fd0/README.md) |
| `isArtifactsUnavailableError` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/isArtifactsUnavailableError-122c63f1a492/README.md) |
| `isMergeableState` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/isMergeableState-615ca7ec5111/README.md) |
| `isNoReportError` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/isNoReportError-4cc237fb917a/README.md) |
| `isNotListableInfoError` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/isNotListableInfoError-7081a6f02259/README.md) |
| `listCloudAgentArtifactRefs` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/listCloudAgentArtifactRefs-ce8cb33459b1/README.md) |
| `mapMergeStatusToPrState` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/mapMergeStatusToPrState-56eeb0796d0b/README.md) |
| `mapProtoPrStatus` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/mapProtoPrStatus-a42c5d085a27/README.md) |
| `mapRunStatus` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/mapRunStatus-0acc73a87e15/README.md) |
| `normalizeDiffPath` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/normalizeDiffPath-b15e1bf4951b/README.md) |
| `parseMergeableState` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/parseMergeableState-084b90690621/README.md) |
| `positiveMs` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/positiveMs-65770e554ef7/README.md) |
| `readCitedCloudAgentArtifacts` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/readCitedCloudAgentArtifacts-da393d9e7da6/README.md) |
| `readCloudAgentFileChanges` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/readCloudAgentFileChanges-7ed7dfc18a4e/README.md) |
| `readCloudAgentInfo` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/readCloudAgentInfo-a45709c89f4a/README.md) |
| `readCloudAgentReport` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/readCloudAgentReport-e1b942d16f0a/README.md) |
| `readProjectMembership` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/readProjectMembership-5dcd2e484e99/README.md) |
| `resolveBranchName` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/resolveBranchName-d2d94a44a67f/README.md) |
| `resolvePr` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/resolvePr-e4d19db83cf5/README.md) |
| `resolvePrUrl` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/resolvePrUrl-c3ecd573756c/README.md) |
| `resolveProjectMembership` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/resolveProjectMembership-66448f4719b3/README.md) |
| `toFileChange` | 1 | [Funcionamento estático](../../../../../functions/shared/node/cursor-backend/cloud-agent-info-read-ts/toFileChange-99ecedf81545/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
