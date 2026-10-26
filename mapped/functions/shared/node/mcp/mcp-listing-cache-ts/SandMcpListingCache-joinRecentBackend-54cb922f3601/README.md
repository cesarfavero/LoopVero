# `SandMcpListingCache.joinRecentBackend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-listing-cache.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-listing-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688621-688630](../../../../../../../reference/runtime/host-main.cjs#L688621-L688630) | `method` | não | `serverIdentifiers, maxAgeMs, caller` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688621-688630](../../../../../../../reference/runtime/host-main.cjs#L688621-L688630) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:688621

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `backendListingKey`, `this.joinBackend`, `this.nowMs`.

SHA-256 do trecho: `3dc5600c6b8d32d0b2ff35f824b25d623e6f911075af14b64e4d477dad45682c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
