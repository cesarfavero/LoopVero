# `openSqliteForSalvageInPlace/open13`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-recovery.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717456-717473](../../../../../../reference/runtime/host-main.cjs#L717456-L717473) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717456-717473](../../../../../../reference/runtime/host-main.cjs#L717456-L717473) | 1 | 0 | 0 | 1 | 1 | 2 |

### host:717456

Chamadas escritas diretamente neste corpo: `.get`, `checkSandDataDatabaseSync`, `db.close`, `db.exec`, `db.prepare`, `new import_node_sqlite4.DatabaseSync`, `refuseSandDataDatabaseLinksSync`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `de93ebc4a651f48527b31bee07c9575e351ecdc352fcb33ba8637eefb47ced1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
