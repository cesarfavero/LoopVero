# `finishConversationBlobRecovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-db.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:1191-1354](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1191-L1354) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1191-1354](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1191-L1354) | 23 | 0 | 0 | 3 | 5 | 6 |

### state-worker:1191

Chamadas escritas diretamente neste corpo: `Math.ceil`, `copySalvageableSqliteRows`, `existing.close`, `freshDb.close`, `freshDb.exec`, `freshDb.prepare`, `getHealth`, `getHealthOnDisk`, `installCompletedConversationBlobReplacement`, `installedDb.close`, `isSqliteCorruptError`, `new ConversationBlobRecoveryError`, `openConfiguredConversationBlobDb`, `openConversationBlobRecoveryTarget`, `options.log`, `options.onRecovery`, `recovery.openSqliteForSalvage`, `recovery.quarantineCorruptSqliteDb`, `recovery.removeSqliteDb`, `removeSandDataFileSync`, `removeSqliteSidecars`, `source.close`.

Alvos de atribuição ou incremento: `existing`, `pendingPath`, `quarantinePath`, `replacementPath`, `salvagedBlobs`.

Alvos de lançamento explícito: `ConversationBlobRecoveryError`.

SHA-256 do trecho: `aea834775ff49e99cf3c1d143ca0239c32e25c86c1c0681b1f5e40eef2230535`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
