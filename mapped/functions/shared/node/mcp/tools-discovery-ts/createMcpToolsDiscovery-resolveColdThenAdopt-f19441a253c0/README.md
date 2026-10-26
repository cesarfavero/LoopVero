# `createMcpToolsDiscovery/_resolveColdThenAdopt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690867-690879](../../../../../../../reference/runtime/host-main.cjs#L690867-L690879) | `FunctionDeclaration` | sim | `mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690867-690879](../../../../../../../reference/runtime/host-main.cjs#L690867-L690879) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:690867

Chamadas escritas diretamente neste corpo: `Date.now`, `Promise.resolve`, `_getToolsViaBackend`, `settledOrAsListed`.

Alvos de atribuição ou incremento: `toolsCacheEntry`.

SHA-256 do trecho: `486034c84251a93a9ac0c15fd5bb039d5989526d13d3e2bff5468ee4a954e467`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
