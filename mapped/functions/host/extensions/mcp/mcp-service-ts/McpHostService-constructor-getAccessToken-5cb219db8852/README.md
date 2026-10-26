# `McpHostService.constructor/getAccessToken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/mcp-service.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701520-701530](../../../../../../../reference/runtime/host-main.cjs#L701520-L701530) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701520-701530](../../../../../../../reference/runtime/host-main.cjs#L701520-L701530) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:701520

Chamadas escritas diretamente neste corpo: `deps.auth.getAccessToken`, `reportFallback`.

SHA-256 do trecho: `6dbdb3ad69fa083a1a70d35b5804998dc8ef5daf42a42a7bf5419ff5a2bd456e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
