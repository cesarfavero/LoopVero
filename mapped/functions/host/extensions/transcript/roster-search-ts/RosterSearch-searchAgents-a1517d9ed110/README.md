# `RosterSearch.searchAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/roster-search.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/roster-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739134-739165](../../../../../../../reference/runtime/host-main.cjs#L739134-L739165) | `method` | sim | `query2, limit3 = this.tm.contentSearch.maxResults` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739134-739165](../../../../../../../reference/runtime/host-main.cjs#L739134-L739165) | 6 | 1 | 1 | 3 | 0 | 0 |

### host:739134

Chamadas escritas diretamente neste corpo: `.slice`, `.toLowerCase`, `Date.now`, `entries.reduce`, `getTranscript`, `indexed.filter`, `query2.trim`, `results.push`, `results.sort`, `this.searchAgentsByLinearScan`, `this.tm.contentSearch.findTranscriptMatches`, `this.tm.contentSearch.searchMessages`, `this.tm.sessions.isServerHostedAgent`.

SHA-256 do trecho: `55f94a0b97479b425bc93667f4afbe9ee2d7f450c12fd9b71b966a80d70f92ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
