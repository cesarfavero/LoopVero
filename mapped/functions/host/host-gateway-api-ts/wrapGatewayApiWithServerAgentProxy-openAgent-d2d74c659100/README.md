# `wrapGatewayApiWithServerAgentProxy/openAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492247-492256](../../../../../reference/runtime/host-main.cjs#L492247-L492256) | `ArrowFunctionExpression` | sim | `readArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492247-492256](../../../../../reference/runtime/host-main.cjs#L492247-L492256) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:492247

Chamadas escritas diretamente neste corpo: `activate`, `api.openAgent`, `markRead`, `proxy.isProxiedAgent`, `proxy.openAgentTail`.

SHA-256 do trecho: `0dfffb7cabbc6693ced65a94c91719d8c61b2f53666c7ddfef472ef1dbd9d5ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
