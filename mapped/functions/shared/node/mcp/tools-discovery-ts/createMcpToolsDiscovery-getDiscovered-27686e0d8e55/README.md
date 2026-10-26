# `createMcpToolsDiscovery/_getDiscovered`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690836-690866](../../../../../../../reference/runtime/host-main.cjs#L690836-L690866) | `FunctionDeclaration` | sim | `mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690836-690866](../../../../../../../reference/runtime/host-main.cjs#L690836-L690866) | 9 | 0 | 5 | 7 | 0 | 0 |

### host:690836

Chamadas escritas diretamente neste corpo: `Date.now`, `_peekDiscoveryServerNames`, `_resolveColdThenAdopt`, `_startToolsResolution`, `_toolServerSetKey`.

SHA-256 do trecho: `420422691f5cdd7a5c6292bc835fe9871f4501543144543bdc9d9961d5a498b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
