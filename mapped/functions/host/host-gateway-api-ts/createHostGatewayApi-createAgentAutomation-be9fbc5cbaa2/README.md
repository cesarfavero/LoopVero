# `createHostGatewayApi/createAgentAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492743-492755](../../../../../reference/runtime/host-main.cjs#L492743-L492755) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492743-492755](../../../../../reference/runtime/host-main.cjs#L492743-L492755) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:492743

Chamadas escritas diretamente neste corpo: `.analytics.markActive`, `.analytics.trackEvent`, `brandedId`, `deps.extensions.api`, `manager.createAgentAutomation`, `manager.getAgentAutomations`.

SHA-256 do trecho: `26537c0279d1723e2c91466567fcbcc8cbf4ad5e9620812fc8b6f6361a33a5a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
