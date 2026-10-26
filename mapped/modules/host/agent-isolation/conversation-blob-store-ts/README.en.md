# `host/agent-isolation/conversation-blob-store.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../../guide/architecture/README.en.md) · [General index](../../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| state-worker | [state-worker:1463-1466](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1463-L1466) |
| state-worker | [state-worker:22293-22649](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22293-L22649) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `ConversationBlobStoreDb.adoptLegacyBlobs` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-adoptLegacyBlobs-8c7f29db5c17/README.en.md) |
| `ConversationBlobStoreDb.clearBlobs` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-clearBlobs-6085dcbb4b95/README.en.md) |
| `ConversationBlobStoreDb.clearStaleCheckpointRoots` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-clearStaleCheckpointRoots-5bf3d922fa04/README.en.md) |
| `ConversationBlobStoreDb.close` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-close-c95d0a568d2b/README.en.md) |
| `ConversationBlobStoreDb.collectGarbage` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-collectGarbage-cbb255bc4e44/README.en.md) |
| `ConversationBlobStoreDb.collectGarbage/getBlobByHexId` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-collectGarbage-getBlobByHexId-8e73bdb6223f/README.en.md) |
| `ConversationBlobStoreDb.constructor` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-constructor-e80bdb1c1ef7/README.en.md) |
| `ConversationBlobStoreDb.findLatestRootBlobId` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-findLatestRootBlobId-19f31acc11d5/README.en.md) |
| `ConversationBlobStoreDb.getBlob` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-getBlob-c321ac86a0cc/README.en.md) |
| `ConversationBlobStoreDb.getBlobsByHexIds` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-getBlobsByHexIds-04f47536e0bc/README.en.md) |
| `ConversationBlobStoreDb.setBlob` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-setBlob-18756805a761/README.en.md) |
| `ConversationBlobStoreDb.walkExportClosure` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-walkExportClosure-c4d20ba9ccc6/README.en.md) |
| `ConversationBlobStoreDb.walkExportClosure/getBlobByHexId` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-walkExportClosure-getBlobByHexId-350b3cdb74bc/README.en.md) |
| `ConversationBlobStoreDb.walkExportClosure/onBlobReference` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-walkExportClosure-onBlobReference-c2f0935b5924/README.en.md) |
| `ConversationBlobStoreDb.walkExportClosure/reportProgress` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/ConversationBlobStoreDb-walkExportClosure-reportProgress-6302e55690a1/README.en.md) |
| `findLatestRootBlobIdInDatabase` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/findLatestRootBlobIdInDatabase-1b96e8609b84/README.en.md) |
| `isBetterRoot` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/isBetterRoot-35e8e05c765a/README.en.md) |
| `rowBlobBytes` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/rowBlobBytes-3203abb2f7c8/README.en.md) |
| `rowLength` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/rowLength-a652f74afb8e/README.en.md) |
| `scoreRootCandidate` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/scoreRootCandidate-65671a518d7f/README.en.md) |
| `toHex2` | 1 | [Static behavior](../../../../functions/host/agent-isolation/conversation-blob-store-ts/toHex2-0b304a4e3d80/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
