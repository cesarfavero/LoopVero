# `recoverConversationIfRootMissing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-maintenance.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-maintenance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720261-720311](../../../../../../../reference/runtime/host-main.cjs#L720261-L720311) | `FunctionDeclaration` | sim | `host, dbPath, db, agentStore` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720261-720311](../../../../../../../reference/runtime/host-main.cjs#L720261-L720311) | 10 | 0 | 5 | 8 | 1 | 1 |

### host:720261

Chamadas escritas diretamente neste corpo: `.name.trim`, `ConversationStateStructure.fromBinary`, `agentStore.getBlobStore`, `agentStore.resetFromDb`, `backfillTranscript`, `blobStore.getBlob`, `db.compareAndSetLatestRootBlobId`, `db.get`, `db.hasLegacyConversationBlobs`, `db.set`, `errorLogTag`, `findLatestDurableRootBlobId`, `getSandAgentDbWriteGeneration`, `getSandProfilePath`, `host.resolveConversationState`, `readSandProfileFile`, `reportSessionDiagnostic`, `toHex3`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `8d52cbcbf2bdc656db71e040a2e4ea86ec8340e95c1a91fb780d25369003f118`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
