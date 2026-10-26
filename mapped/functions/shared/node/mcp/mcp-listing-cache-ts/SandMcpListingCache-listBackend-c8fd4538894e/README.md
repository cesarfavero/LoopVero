# `SandMcpListingCache.listBackend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-listing-cache.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-listing-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688609-688613](../../../../../../../reference/runtime/host-main.cjs#L688609-L688613) | `method` | sim | `serverIdentifiers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688609-688613](../../../../../../../reference/runtime/host-main.cjs#L688609-L688613) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:688609

Chamadas escritas diretamente neste corpo: `this.startBackendListing`.

Alvos de lançamento explícito: `outcome.error`.

SHA-256 do trecho: `16b3efc3ee7f1bb8dde2ae1c81b094936471db424bf1c5f10d29756c3d315248`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
