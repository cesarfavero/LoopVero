# `core/runner/memory-file-format.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../guide/components/memory/README.md) · [Índice geral](../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:702523-702526](../../../../../reference/runtime/host-main.cjs#L702523-L702526) |
| host | [host:702731-702839](../../../../../reference/runtime/host-main.cjs#L702731-L702839) |
| evaluation | [evaluation:536052-536055](../../../../../reference/runtime/sand-eval-runner.cjs#L536052-L536055) |
| evaluation | [evaluation:536464-536624](../../../../../reference/runtime/sand-eval-runner.cjs#L536464-L536624) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `appendMemoryFactLinesToFile` | 1 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/appendMemoryFactLinesToFile-18335ac8dbf7/README.md) |
| `appendMemoryFactToFile` | 1 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/appendMemoryFactToFile-037fcbe0ebdd/README.md) |
| `getAgentMemoryDir` | 2 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/getAgentMemoryDir-f5e1b16fec88/README.md) |
| `getUserMemoryDir` | 1 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/getUserMemoryDir-d784853055ac/README.md) |
| `getUserMemoryShardDir` | 1 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/getUserMemoryShardDir-6faf5ab12156/README.md) |
| `getUserMemoryShardsDir` | 1 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/getUserMemoryShardsDir-db890c6839ec/README.md) |
| `isMemorySource` | 2 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/isMemorySource-6f83caa7385a/README.md) |
| `memoryFactToRecord` | 2 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/memoryFactToRecord-d42b6fb947a8/README.md) |
| `memoryFactsByMostRecent` | 2 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/memoryFactsByMostRecent-afc2d02bfc30/README.md) |
| `memoryIdFor` | 2 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/memoryIdFor-3c0863f72aa0/README.md) |
| `memoryLogFileName` | 1 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/memoryLogFileName-732dbc383ef9/README.md) |
| `parseMemoryFacts` | 2 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/parseMemoryFacts-fbb405227e33/README.md) |
| `parseMemoryFolder` | 1 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/parseMemoryFolder-667ddfcd5f29/README.md) |
| `parseMemoryProvenanceLine` | 2 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/parseMemoryProvenanceLine-b0bd8efd6ce3/README.md) |
| `recallMemoryFolder` | 1 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/recallMemoryFolder-4f311f92482b/README.md) |
| `removeMemoryFactFromFile` | 1 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/removeMemoryFactFromFile-03b54bb9433f/README.md) |
| `serializeMemoryFactLine` | 2 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/serializeMemoryFactLine-57cb1615bef6/README.md) |
| `serializeMemoryProvenanceLine` | 2 | [Funcionamento estático](../../../../functions/core/runner/memory-file-format-ts/serializeMemoryProvenanceLine-9fd2f5ca7939/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
