# `ConversationBlobStoreDb.collectGarbage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-store.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22555-22642](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22555-L22642) | `method` | não | `{     retainedRootIdHex,     pendingWriteRetentionMs   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22555-22642](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22555-L22642) | 10 | 2 | 0 | 5 | 1 | 2 |

### state-worker:22555

Chamadas escritas diretamente neste corpo: `Date.now`, `collectReachableBlobHexIds`, `deletableHexIds.push`, `deleteBlobStmt.run`, `liveBlobTypeNameOf`, `this.db.exec`, `this.db.prepare`, `this.getBlobStmt.get`, `this.recentWriteMsByHexId.get`, `this.scanBlobIndexStmt.iterate`, `walk.blobTypeByHexId.get`.

Alvos de atribuição ou incremento: `deletedBytes`, `inTransaction`, `liveBytes`, `liveBytesByType.pending`, `liveBytesByType[computed]`, `liveRows`, `retainedPendingRows`, `walk`.

Alvos de lançamento explícito: `error`.

SHA-256 do trecho: `d58d974cafd0a89f26ae727fdc5139841ddee92cc5fe18e6cb6c980c6aecb1e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
