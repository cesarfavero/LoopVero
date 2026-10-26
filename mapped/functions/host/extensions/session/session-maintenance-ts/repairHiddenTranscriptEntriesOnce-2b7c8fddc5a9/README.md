# `repairHiddenTranscriptEntriesOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-maintenance.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-maintenance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720312-720352](../../../../../../../reference/runtime/host-main.cjs#L720312-L720352) | `FunctionDeclaration` | sim | `host, dbPath, db, agentStore` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720312-720352](../../../../../../../reference/runtime/host-main.cjs#L720312-L720352) | 6 | 1 | 2 | 4 | 0 | 1 |

### host:720312

Chamadas escritas diretamente neste corpo: `agentStore.getBlobStore`, `agentStore.getConversationStateStructure`, `agentStore.getFullConversation`, `conversationStructureFullyResolves`, `db.deleteTranscriptEntry`, `db.getHiddenEntryRepairVersion`, `db.getTranscriptEntries`, `db.setHiddenEntryRepairVersion`, `deriveOutlineFromConversationState`, `entries.some`, `errorLogTag`, `host.reportHostLog`, `reportSessionDiagnostic`, `selectHiddenArtifactEntryIds`.

Alvos de atribuição ou incremento: `allDeleted`.

SHA-256 do trecho: `e4180ee4f2c4629e5b4579382e7b29f607ea8fcb51088df92f577898e907d9da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
