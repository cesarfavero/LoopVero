# `agent-kv/agent-store.js`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../guide/components/isolation/README.md) · [Índice geral](../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:615858-615863](../../../../reference/runtime/host-main.cjs#L615858-L615863) |
| host | [host:616015-616332](../../../../reference/runtime/host-main.cjs#L616015-L616332) |
| evaluation | [evaluation:284786-284872](../../../../reference/runtime/sand-eval-runner.cjs#L284786-L284872) |
| state-worker | [state-worker:21749-21761](../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21749-L21761) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `AgentMetadataSerde.deserialize` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentMetadataSerde-deserialize-176316690f79/README.md) |
| `AgentMetadataSerde.getBlobType` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentMetadataSerde-getBlobType-c43c84d054f3/README.md) |
| `AgentMetadataSerde.serialize` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentMetadataSerde-serialize-b39d3d033583/README.md) |
| `AgentStore2.constructor` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-constructor-700f4b407430/README.md) |
| `AgentStore2.deserializeConversationStateStructure` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-deserializeConversationStateStructure-bf80ace77e9f/README.md) |
| `AgentStore2.dispose` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-dispose-6567a3a91e91/README.md) |
| `AgentStore2.getBlobStore` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-getBlobStore-d16b276fd285/README.md) |
| `AgentStore2.getConversationStateStructure` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-getConversationStateStructure-4e760be013e9/README.md) |
| `AgentStore2.getFullConversation` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-getFullConversation-1e3473b729f4/README.md) |
| `AgentStore2.getFullConversationWithSubagents` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-getFullConversationWithSubagents-7f66fb2aed00/README.md) |
| `AgentStore2.getId` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-getId-f7da51df3afa/README.md) |
| `AgentStore2.getLastRequestIdFromConversation` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-getLastRequestIdFromConversation-ed33cbe85a73/README.md) |
| `AgentStore2.getLatestCheckpoint` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-getLatestCheckpoint-215d5f48c652/README.md) |
| `AgentStore2.getMetadata` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-getMetadata-6203fee6c7a5/README.md) |
| `AgentStore2.handleCheckpoint` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-handleCheckpoint-36171b36b318/README.md) |
| `AgentStore2.resetFromDb` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-resetFromDb-7b781899aaca/README.md) |
| `AgentStore2.setMetadata` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-setMetadata-5b7bfde47cf0/README.md) |
| `AgentStore2.subscribeToMetadata` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-subscribeToMetadata-faebf9db3cde/README.md) |
| `AgentStore2.tryResetFromDb` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/AgentStore2-tryResetFromDb-3fa8f84b8df3/README.md) |
| `deriveConversationStateFromStructure` | 2 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/deriveConversationStateFromStructure-506a3723fcc7/README.md) |
| `generateBlobEncryptionKeyHex` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/generateBlobEncryptionKeyHex-7999f65c0a5c/README.md) |
| `getAgentMetadataSchema` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/getAgentMetadataSchema-8dc4f49f3b9b/README.md) |
| `getDefaultAgentMetadata` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/getDefaultAgentMetadata-cb686f48d880/README.md) |
| `isAgentMode` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/isAgentMode-366144347969/README.md) |
| `isApprovalModeSetting` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/isApprovalModeSetting-ba882c6b2867/README.md) |
| `isValidBlobEncryptionKeyHex` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/isValidBlobEncryptionKeyHex-6c59f5af2a2e/README.md) |
| `parseAgentSubagentInfo` | 1 | [Funcionamento estático](../../../functions/agent-kv/agent-store-js/parseAgentSubagentInfo-d3ecbe6fb588/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
