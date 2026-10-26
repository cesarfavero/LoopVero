# `createMcpToolsDiscovery/_isHttpProvider`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691439-691457](../../../../../../../reference/runtime/host-main.cjs#L691439-L691457) | `FunctionDeclaration` | sim | `providerIdentifier, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691439-691457](../../../../../../../reference/runtime/host-main.cjs#L691439-L691457) | 4 | 0 | 1 | 5 | 0 | 1 |

### host:691439

Chamadas escritas diretamente neste corpo: `.has`, `_displayRowForIdentifier`, `_inlineHttpServerNames`, `_isBackendDisplayServer`, `core2.definitionSource.getServerUrlForIdentifier`, `reportMcpHostEdgeFailure`.

SHA-256 do trecho: `14d0ce0e64432c173611e048ad102621a038da3f682b34168a4308b22c748ba5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
