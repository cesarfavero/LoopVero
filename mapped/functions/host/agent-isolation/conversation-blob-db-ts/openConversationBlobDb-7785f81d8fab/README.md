# `openConversationBlobDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-db.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:1397-1461](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1397-L1461) | `FunctionDeclaration` | não | `options` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1397-1461](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1397-L1461) | 8 | 0 | 0 | 7 | 4 | 6 |

### state-worker:1397

Chamadas escritas diretamente neste corpo: `db.close`, `ensureSandDataDirSync`, `findPendingRecovery`, `finishConversationBlobRecovery`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new ConversationBlobRecoveryError`, `openConfiguredConversationBlobDb`, `recoverConversationBlobDb`, `removeSqliteSidecars`, `runQuickCheck`.

Alvos de atribuição ou incremento: `db`, `health`.

Alvos de lançamento explícito: `ConversationBlobRecoveryError`, `error`, `retryError`.

SHA-256 do trecho: `f4d888e9f8fc3928a8350296ca122bd840c7c8e0ca0dd95677da71160a9c7f1d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
