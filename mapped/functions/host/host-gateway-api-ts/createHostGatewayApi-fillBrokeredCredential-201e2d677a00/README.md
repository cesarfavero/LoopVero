# `createHostGatewayApi/fillBrokeredCredential`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493182-493198](../../../../../reference/runtime/host-main.cjs#L493182-L493198) | `ArrowFunctionExpression` | sim | `{ agentId, entryId, siteHint, windowIndex }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493182-493198](../../../../../reference/runtime/host-main.cjs#L493182-L493198) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:493182

Chamadas escritas diretamente neste corpo: `broker.fill`, `deps.extensions.api`.

SHA-256 do trecho: `4fe5ee378d25d5b49ed740afbc273e846949f758c1b6f34cf1b595559c93bb2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
