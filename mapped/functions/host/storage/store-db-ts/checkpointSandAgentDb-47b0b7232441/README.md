# `checkpointSandAgentDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/store-db.ts` · [README do módulo](../../../../../modules/host/storage/store-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478901-478926](../../../../../../reference/runtime/host-main.cjs#L478901-L478926) | `FunctionDeclaration` | não | `dbPath, busyTimeoutMs = DB_BUSY_TIMEOUT_MS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478901-478926](../../../../../../reference/runtime/host-main.cjs#L478901-L478926) | 2 | 0 | 0 | 5 | 0 | 2 |

### host:478901

Chamadas escritas diretamente neste corpo: `.get`, `checkSandDataDatabaseSync`, `db.close`, `db.exec`, `db.prepare`, `new import_node_sqlite.DatabaseSync`, `refuseSandDataDatabaseLinksSync`, `reportFallback`, `walFramesFullyFolded`.

Alvos de atribuição ou incremento: `db`, `result`.

SHA-256 do trecho: `39507a6d6ec5e20ac79d0883ea7fb32fece9194116549323a1c33f19749445ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
