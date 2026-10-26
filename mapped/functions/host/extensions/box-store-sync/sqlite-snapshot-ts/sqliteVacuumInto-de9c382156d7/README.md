# `sqliteVacuumInto`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sqlite-snapshot.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sqlite-snapshot-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480320-480328](../../../../../../../reference/runtime/host-main.cjs#L480320-L480328) | `FunctionDeclaration` | não | `srcPath, destPath, busyTimeoutMs = DB_BUSY_TIMEOUT_MS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480320-480328](../../../../../../../reference/runtime/host-main.cjs#L480320-L480328) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:480320

Chamadas escritas diretamente neste corpo: `db.close`, `db.exec`, `destPath.replace`, `new import_node_sqlite2.DatabaseSync`.

SHA-256 do trecho: `a16ab8c118e4b463b39b3a03f78b1008f26291ff4b9299163d50aac37b75deb1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
