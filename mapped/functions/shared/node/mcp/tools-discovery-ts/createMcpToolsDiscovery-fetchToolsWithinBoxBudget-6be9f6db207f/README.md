# `createMcpToolsDiscovery/_fetchToolsWithinBoxBudget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691289-691333](../../../../../../../reference/runtime/host-main.cjs#L691289-L691333) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691289-691333](../../../../../../../reference/runtime/host-main.cjs#L691289-L691333) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:691289

Chamadas escritas diretamente neste corpo: `Math.min`, `_discoverBoxTools`, `_discoverHttpTools`, `_withBoxListing`, `boxListing.then`, `deferredBox.serverIdentifiers.map`, `deps.onBoxListingDeferred`, `new Map`, `settle2`, `settledWithin`, `sinceStart`, `statusFromBoxListStatus`.

SHA-256 do trecho: `dc40ffa6e19aa814fcbc184398a6fd63ffe74e5d9b9f890cc3258f897d851c16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
