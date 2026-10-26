# `agent-kv/agent-store.js`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../guide/components/isolation/README.en.md) · [General index](../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:615858-615863](../../../../reference/runtime/host-main.cjs#L615858-L615863) |
| host | [host:616015-616332](../../../../reference/runtime/host-main.cjs#L616015-L616332) |
| evaluation | [evaluation:284786-284872](../../../../reference/runtime/sand-eval-runner.cjs#L284786-L284872) |
| state-worker | [state-worker:21749-21761](../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21749-L21761) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `AgentMetadataSerde.deserialize` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentMetadataSerde-deserialize-176316690f79/README.en.md) |
| `AgentMetadataSerde.getBlobType` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentMetadataSerde-getBlobType-c43c84d054f3/README.en.md) |
| `AgentMetadataSerde.serialize` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentMetadataSerde-serialize-b39d3d033583/README.en.md) |
| `AgentStore2.constructor` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-constructor-700f4b407430/README.en.md) |
| `AgentStore2.deserializeConversationStateStructure` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-deserializeConversationStateStructure-bf80ace77e9f/README.en.md) |
| `AgentStore2.dispose` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-dispose-6567a3a91e91/README.en.md) |
| `AgentStore2.getBlobStore` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-getBlobStore-d16b276fd285/README.en.md) |
| `AgentStore2.getConversationStateStructure` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-getConversationStateStructure-4e760be013e9/README.en.md) |
| `AgentStore2.getFullConversation` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-getFullConversation-1e3473b729f4/README.en.md) |
| `AgentStore2.getFullConversationWithSubagents` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-getFullConversationWithSubagents-7f66fb2aed00/README.en.md) |
| `AgentStore2.getId` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-getId-f7da51df3afa/README.en.md) |
| `AgentStore2.getLastRequestIdFromConversation` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-getLastRequestIdFromConversation-ed33cbe85a73/README.en.md) |
| `AgentStore2.getLatestCheckpoint` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-getLatestCheckpoint-215d5f48c652/README.en.md) |
| `AgentStore2.getMetadata` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-getMetadata-6203fee6c7a5/README.en.md) |
| `AgentStore2.handleCheckpoint` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-handleCheckpoint-36171b36b318/README.en.md) |
| `AgentStore2.resetFromDb` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-resetFromDb-7b781899aaca/README.en.md) |
| `AgentStore2.setMetadata` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-setMetadata-5b7bfde47cf0/README.en.md) |
| `AgentStore2.subscribeToMetadata` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-subscribeToMetadata-faebf9db3cde/README.en.md) |
| `AgentStore2.tryResetFromDb` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/AgentStore2-tryResetFromDb-3fa8f84b8df3/README.en.md) |
| `deriveConversationStateFromStructure` | 2 | [Static behavior](../../../functions/agent-kv/agent-store-js/deriveConversationStateFromStructure-506a3723fcc7/README.en.md) |
| `generateBlobEncryptionKeyHex` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/generateBlobEncryptionKeyHex-7999f65c0a5c/README.en.md) |
| `getAgentMetadataSchema` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/getAgentMetadataSchema-8dc4f49f3b9b/README.en.md) |
| `getDefaultAgentMetadata` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/getDefaultAgentMetadata-cb686f48d880/README.en.md) |
| `isAgentMode` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/isAgentMode-366144347969/README.en.md) |
| `isApprovalModeSetting` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/isApprovalModeSetting-ba882c6b2867/README.en.md) |
| `isValidBlobEncryptionKeyHex` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/isValidBlobEncryptionKeyHex-6c59f5af2a2e/README.en.md) |
| `parseAgentSubagentInfo` | 1 | [Static behavior](../../../functions/agent-kv/agent-store-js/parseAgentSubagentInfo-d3ecbe6fb588/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
