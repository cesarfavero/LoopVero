# `isFts5Available`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/content-search/search-index-db.ts` · [README do módulo](../../../../../../modules/host/extensions/content-search/search-index-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542024-542036](../../../../../../../reference/runtime/host-main.cjs#L542024-L542036) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542024-542036](../../../../../../../reference/runtime/host-main.cjs#L542024-L542036) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:542024

Chamadas escritas diretamente neste corpo: `db.close`, `db.exec`, `new import_node_sqlite3.DatabaseSync`, `reportFallback`.

Alvos de atribuição ou incremento: `db`.

SHA-256 do trecho: `23ef5e8fb7ccbffb6f09d73ad795559896201d2cf77d64340eecf3004dad8a5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
