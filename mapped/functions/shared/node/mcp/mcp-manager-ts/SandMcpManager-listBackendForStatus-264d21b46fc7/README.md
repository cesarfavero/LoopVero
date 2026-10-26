# `SandMcpManager.listBackendForStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689408-689440](../../../../../../../reference/runtime/host-main.cjs#L689408-L689440) | `method` | sim | `serverIdentifiers, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689408-689440](../../../../../../../reference/runtime/host-main.cjs#L689408-L689440) | 4 | 0 | 2 | 2 | 1 | 0 |

### host:689408

Chamadas escritas diretamente neste corpo: `.catch`, `reportRead`, `this.clock.now`, `this.listingCache.joinRecentBackend`, `this.statusListingDeadline.run`.

Alvos de lançamento explícito: `outcome.error`.

SHA-256 do trecho: `0bf25ce802f90e1ba8ff9f594252d83d4ff567880297fdf204f072f0ebf9f283`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
