# `copyLockedSqliteDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sqlite-snapshot.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sqlite-snapshot-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480384-480482](../../../../../../../reference/runtime/host-main.cjs#L480384-L480482) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480384-480482](../../../../../../../reference/runtime/host-main.cjs#L480384-L480482) | 7 | 4 | 0 | 2 | 0 | 4 |

### host:480384

Chamadas escritas diretamente neste corpo: `.equals`, `.get`, `args.onFailure`, `classifySqliteSnapshotFailure`, `db.close`, `db.exec`, `db.prepare`, `new import_node_sqlite2.DatabaseSync`, `readFile31`, `readSidecarNoFollowSync`.

Alvos de atribuição ou incremento: `attempt`, `attemptFailure`, `db`, `lastFailure`, `operation`, `pathStage`, `verified`.

SHA-256 do trecho: `a47fe042cae529244463079cf838da679b2d5c758e8d9be4723df0dd3299723e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
