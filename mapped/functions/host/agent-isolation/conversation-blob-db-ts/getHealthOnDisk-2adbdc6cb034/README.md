# `getHealthOnDisk`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-db.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:1028-1056](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1028-L1056) | `FunctionDeclaration` | não | `options` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1028-1056](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1028-L1056) | 2 | 1 | 0 | 3 | 0 | 3 |

### state-worker:1028

Chamadas escritas diretamente neste corpo: `checkSandDataDatabaseSync`, `db.close`, `db.exec`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new import_node_sqlite3.DatabaseSync`, `refuseSandDataDatabaseLinksSync`, `removeSqliteSidecars`, `runQuickCheck`.

Alvos de atribuição ou incremento: `attempt`, `db`.

SHA-256 do trecho: `b85ef35e1d04cf75ac7a35425cb8c3fb9f3e2b29397b7f1b187380ba63122155`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
