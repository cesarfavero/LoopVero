# `openConversationBlobRecoveryTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-db.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:1093-1136](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1093-L1136) | `FunctionDeclaration` | não | `options, dbPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1093-1136](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1093-L1136) | 4 | 1 | 0 | 1 | 3 | 2 |

### state-worker:1093

Chamadas escritas diretamente neste corpo: `db.close`, `getHealth`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new ConversationBlobRecoveryError`, `open`, `remove`, `removeSqliteSidecars`.

Alvos de atribuição ou incremento: `attempt`, `db`, `retriedWithoutSidecars`.

Alvos de lançamento explícito: `ConversationBlobRecoveryError`, `error`.

SHA-256 do trecho: `62a7c629ac95915cdd40c61aed70f4eae92a93360da8089d0b48533dc6ec3f06`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
