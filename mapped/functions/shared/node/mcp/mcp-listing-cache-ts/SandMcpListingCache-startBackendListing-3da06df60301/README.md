# `SandMcpListingCache.startBackendListing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-listing-cache.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-listing-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688679-688740](../../../../../../../reference/runtime/host-main.cjs#L688679-L688740) | `method` | não | `serverIdentifiers, caller, list = () => this.listBackendTools(serverIdentifiers)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688679-688740](../../../../../../../reference/runtime/host-main.cjs#L688679-L688740) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:688679

Chamadas escritas diretamente neste corpo: `.then`, `backendListingKey`, `list`, `outcome.then`, `this.nowMs`.

Alvos de atribuição ou incremento: `this.inFlightBackendListing`, `this.startedBackendListings`.

SHA-256 do trecho: `ef821137369def3c61067fc60e576a795f5a9182e38a1e85a18e31ebacc5a279`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
