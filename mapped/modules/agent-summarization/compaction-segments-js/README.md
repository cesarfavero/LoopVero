# `agent-summarization/compaction-segments.js`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../guide/components/context-compaction/README.md) · [Índice geral](../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:616795-617243](../../../../reference/runtime/host-main.cjs#L616795-L617243) |
| evaluation | [evaluation:285335-285783](../../../../reference/runtime/sand-eval-runner.cjs#L285335-L285783) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `argValuePlain` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/argValuePlain-b8d6483fc28b/README.md) |
| `assistantTurn` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/assistantTurn-dd5401521df7/README.md) |
| `compactionSegmentByteLength` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/compactionSegmentByteLength-87c02cc98534/README.md) |
| `compactionSegmentFilename` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/compactionSegmentFilename-c4f939d19a5b/README.md) |
| `compareOrdinal` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/compareOrdinal-4d3be44f7c8d/README.md) |
| `computeTurnStats` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/computeTurnStats-8af4b3867dd2/README.md) |
| `extractCompactionKeywords` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/extractCompactionKeywords-7db03f56a845/README.md) |
| `formatCompactSummary` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/formatCompactSummary-80e7506bbf54/README.md) |
| `formatCompactionSegmentsHint` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/formatCompactionSegmentsHint-8b9fa1d5927b/README.md) |
| `isLowSurrogate` | 1 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/isLowSurrogate-1f296d91c498/README.md) |
| `isLowSurrogate2` | 1 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/isLowSurrogate2-e04c904c03bc/README.md) |
| `lastCodePoints` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/lastCodePoints-50b70cddfb84/README.md) |
| `neutralizeCompactionControlTokens` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/neutralizeCompactionControlTokens-227c712d0228/README.md) |
| `parseCompactionSegmentIndex` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/parseCompactionSegmentIndex-0ff6a3679eda/README.md) |
| `quoteDebug` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/quoteDebug-348f8c1f8f47/README.md) |
| `renderCompactionIndexRow` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/renderCompactionIndexRow-1ff0ffbe3020/README.md) |
| `renderCompactionSegment` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/renderCompactionSegment-cb697d150d71/README.md) |
| `renderStatsBlock` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/renderStatsBlock-bb1f98f3fc0f/README.md) |
| `renderTurnBalanced` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/renderTurnBalanced-76e70565982a/README.md) |
| `renderTurnParts` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/renderTurnParts-15792b4acc46/README.md) |
| `renderTurnSignature` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/renderTurnSignature-e32b14855369/README.md) |
| `renderTurnVerbose` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/renderTurnVerbose-46bd65ec0dee/README.md) |
| `segmentLabel` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/segmentLabel-997e438bbf13/README.md) |
| `stripLeadingScratchpad` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/stripLeadingScratchpad-0f401f8a279d/README.md) |
| `toCompactionSegmentTurns` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/toCompactionSegmentTurns-6b1795f7ec36/README.md) |
| `toolArgs` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/toolArgs-f18b89aca6cf/README.md) |
| `toolResultText` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/toolResultText-8b01c4a95184/README.md) |
| `truncateChars` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/truncateChars-169323e0b6e7/README.md) |
| `userText` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/userText-b4ef9dbcb42d/README.md) |
| `utf8ByteLength` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/utf8ByteLength-8aa5a7bf99df/README.md) |
| `withThousands` | 2 | [Funcionamento estático](../../../functions/agent-summarization/compaction-segments-js/withThousands-f212ff6d2db9/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
