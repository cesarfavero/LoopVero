# `RosterSearch.searchAgentsByLinearScan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/roster-search.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/roster-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739166-739190](../../../../../../../reference/runtime/host-main.cjs#L739166-L739190) | `method` | sim | `normalized, limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739166-739190](../../../../../../../reference/runtime/host-main.cjs#L739166-L739190) | 3 | 2 | 1 | 1 | 1 | 1 |

### host:739166

Chamadas escritas diretamente neste corpo: `getTranscript`, `isStoreUnreadable`, `results.push`, `results.slice`, `results.sort`, `this.tm.contentSearch.findTranscriptMatches`, `this.tm.getActiveAgentId`, `this.tm.sessionStore.listAgents`, `this.tm.sessionStore.readAgentTranscriptEntries`.

Alvos de atribuição ou incremento: `entries`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `486e3381582b1ddd5af37ce7b7efb3a6206e67d822ae14070037f6c2412e0b19`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
