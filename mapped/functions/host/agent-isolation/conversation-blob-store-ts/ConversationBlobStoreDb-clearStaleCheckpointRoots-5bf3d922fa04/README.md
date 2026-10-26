# `ConversationBlobStoreDb.clearStaleCheckpointRoots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-store.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22509-22554](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22509-L22554) | `method` | não | `retainedRootIdHex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22509-22554](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22509-L22554) | 9 | 3 | 0 | 3 | 1 | 2 |

### state-worker:22509

Chamadas escritas diretamente neste corpo: `.digest`, `.update`, `ConversationStateStructure.fromBinary`, `Number`, `candidateIds.push`, `deleteBlobStmt.run`, `new Set`, `presentIds.add`, `staleRootIds.push`, `structure.turns.every`, `this.db.exec`, `this.db.prepare`, `this.getBlobStmt.get`, `this.scanBlobIndexStmt.iterate`.

Alvos de atribuição ou incremento: `deleted`, `inTransaction`, `structure`.

Alvos de lançamento explícito: `error`.

SHA-256 do trecho: `23b3762968a0a241d8529290942206ead1561d1b219a28eb6e4ae506dde98099`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
