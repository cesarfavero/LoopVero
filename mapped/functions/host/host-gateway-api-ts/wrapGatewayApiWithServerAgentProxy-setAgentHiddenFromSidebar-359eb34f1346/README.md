# `wrapGatewayApiWithServerAgentProxy/setAgentHiddenFromSidebar`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492225-492235](../../../../../reference/runtime/host-main.cjs#L492225-L492235) | `ArrowFunctionExpression` | sim | `hiddenArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492225-492235](../../../../../reference/runtime/host-main.cjs#L492225-L492235) | 1 | 0 | 3 | 1 | 0 | 0 |

### host:492225

Chamadas escritas diretamente neste corpo: `.catch`, `api.setAgentHiddenFromSidebar`, `proxy.isProxiedAgent`, `proxy.setAgentHidden`, `settle3`.

SHA-256 do trecho: `8b07848ca4108e5f4721a93a5149f201cfc40085e9cddce4c9dbadd792d01d6d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
