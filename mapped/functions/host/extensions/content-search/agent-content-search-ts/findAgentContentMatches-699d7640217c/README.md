# `findAgentContentMatches`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/content-search/agent-content-search.ts` · [README do módulo](../../../../../../modules/host/extensions/content-search/agent-content-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541795-541813](../../../../../../../reference/runtime/host-main.cjs#L541795-L541813) | `FunctionDeclaration` | não | `entries, normalizedQuery, limit3 = AGENT_CONTENT_SEARCH_MAX_MATCHES_PER_AGENT` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541795-541813](../../../../../../../reference/runtime/host-main.cjs#L541795-L541813) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:541795

Chamadas escritas diretamente neste corpo: `buildContentSnippet`, `entryRole`, `entrySearchText`, `isHiddenOutboundAgentPeerMessageEntry`, `matches.push`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `bd2e61e238b0fda01fca45807ada4f02de614cb2649be62fcdd3d4687e921de7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
