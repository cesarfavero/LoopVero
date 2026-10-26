# `RosterSearch.searchMedia`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/roster-search.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/roster-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739191-739199](../../../../../../../reference/runtime/host-main.cjs#L739191-L739199) | `method` | sim | `query2, limit3 = this.tm.contentSearch.maxResults` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739191-739199](../../../../../../../reference/runtime/host-main.cjs#L739191-L739199) | 2 | 0 | 1 | 1 | 2 | 0 |

### host:739191

Chamadas escritas diretamente neste corpo: `matches.filter`, `new SandSearchUnavailableError`, `query2.trim`, `this.tm.contentSearch.searchMedia`.

Alvos de lançamento explícito: `SandSearchUnavailableError`.

SHA-256 do trecho: `9876673eea8c4811beed0b18bb73efb9477859c840695f9156c0760dbe1b6e0c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
