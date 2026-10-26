# `installCompletedConversationBlobReplacement`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-db.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:1137-1190](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1137-L1190) | `FunctionDeclaration` | não | `options` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1137-1190](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1137-L1190) | 8 | 0 | 0 | 5 | 4 | 2 |

### state-worker:1137

Chamadas escritas diretamente neste corpo: `getHealth`, `getHealthOnDisk`, `installed.close`, `isSqliteCorruptError`, `new ConversationBlobRecoveryError`, `openConfiguredConversationBlobDb`, `options.recovery.removeSqliteDb`, `readConversationBlobMigrationState`, `removeSandDataFileSync`, `removeSqliteSidecars`, `replacement.close`, `replacement.exec`.

Alvos de atribuição ou incremento: `replacement`.

Alvos de lançamento explícito: `ConversationBlobRecoveryError`, `error`.

SHA-256 do trecho: `7f920386f2bf08de657169a45fb535e2809970dcffffad09086847db08c96615`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
