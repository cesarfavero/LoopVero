# `openSqliteForSalvageInPlace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-recovery.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717453-717500](../../../../../../reference/runtime/host-main.cjs#L717453-L717500) | `FunctionDeclaration` | não | `options2` |
| [state-worker:861-908](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L861-L908) | `FunctionDeclaration` | não | `options` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717453-717500](../../../../../../reference/runtime/host-main.cjs#L717453-L717500) | 4 | 0 | 0 | 8 | 0 | 3 |
| [state-worker:861-908](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L861-L908) | 4 | 0 | 0 | 8 | 0 | 3 |

### host:717453

Chamadas escritas diretamente neste corpo: `isRefusedSandDataFile`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new import_node_sqlite4.DatabaseSync`, `open13`, `refuseSandDataDatabaseLinksSync`, `removeSqliteSidecars`, `reportFallback`.

SHA-256 do trecho: `55154303fadc612187acc9e7ceebfa45146ec2ce499b0165a3e312aa719e4641`.

### state-worker:861

Chamadas escritas diretamente neste corpo: `isRefusedSandDataFile`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new import_node_sqlite2.DatabaseSync`, `open`, `refuseSandDataDatabaseLinksSync`, `removeSqliteSidecars`, `reportFallback`.

SHA-256 do trecho: `556cc3827a361ea396d9485d8594233d96efb8c23cd7f1ba798093c789625524`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
