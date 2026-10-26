# `wrapGatewayApiWithServerAgentProxy/setAgentUnread`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492211-492224](../../../../../reference/runtime/host-main.cjs#L492211-L492224) | `ArrowFunctionExpression` | sim | `unreadArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492211-492224](../../../../../reference/runtime/host-main.cjs#L492211-L492224) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:492211

Chamadas escritas diretamente neste corpo: `.catch`, `act`, `api.setAgentUnread`, `proxy.isProxiedAgent`.

SHA-256 do trecho: `12cbdad73a06049923419ef7bca4f0a385de3eb1c733586112403ee86c705e38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
