# `createHostGatewayApi/openAgentWindowed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492699-492711](../../../../../reference/runtime/host-main.cjs#L492699-L492711) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492699-492711](../../../../../reference/runtime/host-main.cjs#L492699-L492711) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:492699

Chamadas escritas diretamente neste corpo: `.analytics.markActive`, `.logs.reportAgentOpen`, `Date.now`, `deps.extensions.api`, `manager.getActiveAgentId`, `manager.openAgentWindowed`.

SHA-256 do trecho: `3cded9df3b8d571a31eddf368ecbe4422f787b846f800e10c3743b5e4209821d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
