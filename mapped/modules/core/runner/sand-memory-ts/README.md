# `core/runner/sand-memory.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../guide/components/memory/README.md) · [Índice geral](../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:702527-702529](../../../../../reference/runtime/host-main.cjs#L702527-L702529) |
| host | [host:702640-702730](../../../../../reference/runtime/host-main.cjs#L702640-L702730) |
| evaluation | [evaluation:536077-536463](../../../../../reference/runtime/sand-eval-runner.cjs#L536077-L536463) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `applyExtractedMemories` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/applyExtractedMemories-f5c19708abea/README.md) |
| `buildExtractionUserPrompt` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/buildExtractionUserPrompt-0772c57808cd/README.md) |
| `buildProfileOnlyExtractionSystemPrompt` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/buildProfileOnlyExtractionSystemPrompt-a28dc0006109/README.md) |
| `byRecordRecency` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/byRecordRecency-d3c3ab09955d/README.md) |
| `collectExecutorText` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/collectExecutorText-3469f7a6f982/README.md) |
| `exchangeLines` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/exchangeLines-86cd19f99684/README.md) |
| `extractMemories` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/extractMemories-5f73a659b706/README.md) |
| `formatMemoryDate` | 2 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/formatMemoryDate-a02278c6bfc7/README.md) |
| `gatherExtractionMemories` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/gatherExtractionMemories-c6c92b3c18e6/README.md) |
| `isMemorableExchange` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/isMemorableExchange-5f04c8204215/README.md) |
| `isMemoryFreezeEnabled` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/isMemoryFreezeEnabled-5a868df4a575/README.md) |
| `isRecentlyActive` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/isRecentlyActive-4595055b2a7d/README.md) |
| `memoryDedupeKey` | 2 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/memoryDedupeKey-b1238de74018/README.md) |
| `memoryImportance` | 2 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/memoryImportance-cdc667e69203/README.md) |
| `memoryRecallHasFacts` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/memoryRecallHasFacts-f013f88bc313/README.md) |
| `memoryRecallRank` | 2 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/memoryRecallRank-4ec169fcd873/README.md) |
| `mergeMemoryRecords` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/mergeMemoryRecords-c5feb71ba7ba/README.md) |
| `mergeProvenanced` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/mergeProvenanced-5220b75e9576/README.md) |
| `mergeUserMemoryShardRecords` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/mergeUserMemoryShardRecords-44b595d4c806/README.md) |
| `mergeUserMemoryShards` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/mergeUserMemoryShards-b784d9bfdbe8/README.md) |
| `mergeUserMemoryShards/merge4` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/mergeUserMemoryShards-merge4-c7939b433f62/README.md) |
| `mergeUserMemoryShards/merge4/tag` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/mergeUserMemoryShards-merge4-tag-d9defde2fd67/README.md) |
| `normalizeMemoryContent` | 2 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/normalizeMemoryContent-043f2dbfce33/README.md) |
| `parseExtractedMemories` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/parseExtractedMemories-f25dd8996a35/README.md) |
| `relevanceTokens` | 2 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/relevanceTokens-53ced3e62858/README.md) |
| `resolveFrozenMemoryPrompt` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/resolveFrozenMemoryPrompt-25d53ffaabe4/README.md) |
| `selectRelevantMemories` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/selectRelevantMemories-985011b5a3a6/README.md) |
| `stripLineMarkers` | 1 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/stripLineMarkers-7c8e7a5e7949/README.md) |
| `stripMemoryContextBlocks` | 2 | [Funcionamento estático](../../../../functions/core/runner/sand-memory-ts/stripMemoryContextBlocks-ecbec3428af3/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
