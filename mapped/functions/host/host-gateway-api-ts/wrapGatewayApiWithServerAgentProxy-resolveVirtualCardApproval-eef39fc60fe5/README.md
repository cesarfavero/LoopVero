# `wrapGatewayApiWithServerAgentProxy/resolveVirtualCardApproval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492162-492183](../../../../../reference/runtime/host-main.cjs#L492162-L492183) | `ArrowFunctionExpression` | sim | `cardArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492162-492183](../../../../../reference/runtime/host-main.cjs#L492162-L492183) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:492162

Chamadas escritas diretamente neste corpo: `act`, `api.resolveVirtualCardApproval`, `proxy.isProxiedAgent`.

SHA-256 do trecho: `2f8528f0abc44f2f1ba9bcbfe57a944a56973455af045ed1ee60f9c9de57d2f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
