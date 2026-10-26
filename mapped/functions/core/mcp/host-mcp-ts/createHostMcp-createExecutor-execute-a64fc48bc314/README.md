# `createHostMcp/createExecutor/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701108-701108](../../../../../../reference/runtime/host-main.cjs#L701108-L701108) | `ArrowFunctionExpression` | não | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701108-701108](../../../../../../reference/runtime/host-main.cjs#L701108-L701108) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:701108 usa retorno implícito de arrow function.

### host:701108

Chamadas escritas diretamente neste corpo: `harnessBrowserOutsideConnectorScope.execute`, `playwrightBoxMcpWindowIndex`, `scoped.execute`.

SHA-256 do trecho: `46ee08af57e9b99d10e6e1596cdc95dfc2359997698aca0bfbe365c6326bc081`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
