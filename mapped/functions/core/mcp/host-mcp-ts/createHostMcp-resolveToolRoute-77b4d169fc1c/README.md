# `createHostMcp/resolveToolRoute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701131-701136](../../../../../../reference/runtime/host-main.cjs#L701131-L701136) | `ArrowFunctionExpression` | sim | `providerIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701131-701136](../../../../../../reference/runtime/host-main.cjs#L701131-L701136) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:701131 usa retorno implícito de arrow function.

### host:701131

Chamadas escritas diretamente neste corpo: `discovery.providerServerUrl`, `discovery.resolveProviderTransport`, `mcpToolRoute`, `restMcpHost`.

SHA-256 do trecho: `857a0e1ffc0cf304229fb0c5c7f067608bb000c4aa5fdc82545eeb18342b260f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
