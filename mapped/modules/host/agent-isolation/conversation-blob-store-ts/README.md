# `host/agent-isolation/conversation-blob-store.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../guide/architecture/README.md) · [Índice geral](../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| state-worker | [state-worker:1463-1466](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1463-L1466) |
| state-worker | [state-worker:22293-22649](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22293-L22649) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `ConversationBlobStoreDb.adoptLegacyBlobs` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-adoptLegacyBlobs-8c7f29db5c17/README.md) |
| `ConversationBlobStoreDb.clearBlobs` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-clearBlobs-6085dcbb4b95/README.md) |
| `ConversationBlobStoreDb.clearStaleCheckpointRoots` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-clearStaleCheckpointRoots-5bf3d922fa04/README.md) |
| `ConversationBlobStoreDb.close` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-close-c95d0a568d2b/README.md) |
| `ConversationBlobStoreDb.collectGarbage` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-collectGarbage-cbb255bc4e44/README.md) |
| `ConversationBlobStoreDb.collectGarbage/getBlobByHexId` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-collectGarbage-getBlobByHexId-8e73bdb6223f/README.md) |
| `ConversationBlobStoreDb.constructor` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-constructor-e80bdb1c1ef7/README.md) |
| `ConversationBlobStoreDb.findLatestRootBlobId` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-findLatestRootBlobId-19f31acc11d5/README.md) |
| `ConversationBlobStoreDb.getBlob` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-getBlob-c321ac86a0cc/README.md) |
| `ConversationBlobStoreDb.getBlobsByHexIds` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-getBlobsByHexIds-04f47536e0bc/README.md) |
| `ConversationBlobStoreDb.setBlob` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-setBlob-18756805a761/README.md) |
| `ConversationBlobStoreDb.walkExportClosure` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-walkExportClosure-c4d20ba9ccc6/README.md) |
| `ConversationBlobStoreDb.walkExportClosure/getBlobByHexId` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-walkExportClosure-getBlobByHexId-350b3cdb74bc/README.md) |
| `ConversationBlobStoreDb.walkExportClosure/onBlobReference` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-walkExportClosure-onBlobReference-c2f0935b5924/README.md) |
| `ConversationBlobStoreDb.walkExportClosure/reportProgress` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-walkExportClosure-reportProgress-6302e55690a1/README.md) |
| `findLatestRootBlobIdInDatabase` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/findLatestRootBlobIdInDatabase-1b96e8609b84/README.md) |
| `isBetterRoot` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/isBetterRoot-35e8e05c765a/README.md) |
| `rowBlobBytes` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/rowBlobBytes-3203abb2f7c8/README.md) |
| `rowLength` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/rowLength-a652f74afb8e/README.md) |
| `scoreRootCandidate` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/scoreRootCandidate-65671a518d7f/README.md) |
| `toHex2` | 1 | [Funcionamento estático](../../../../functions/host/agent-isolation/conversation-blob-store-ts/toHex2-0b304a4e3d80/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
