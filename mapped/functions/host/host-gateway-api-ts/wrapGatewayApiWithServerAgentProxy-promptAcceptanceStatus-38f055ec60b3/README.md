# `wrapGatewayApiWithServerAgentProxy/promptAcceptanceStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492021-492034](../../../../../reference/runtime/host-main.cjs#L492021-L492034) | `ArrowFunctionExpression` | sim | `statusArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492021-492034](../../../../../reference/runtime/host-main.cjs#L492021-L492034) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:492021

Chamadas escritas diretamente neste corpo: `act`, `api.promptAcceptanceStatus`, `proxy.isProxiedAgent`.

SHA-256 do trecho: `5a02ea6cb8779b60db6f597b9189dc15ad8e2431709dc8246533984aa7570f47`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
