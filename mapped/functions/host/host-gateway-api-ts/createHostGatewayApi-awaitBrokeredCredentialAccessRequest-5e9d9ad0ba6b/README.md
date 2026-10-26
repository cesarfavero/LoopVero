# `createHostGatewayApi/awaitBrokeredCredentialAccessRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493179-493181](../../../../../reference/runtime/host-main.cjs#L493179-L493181) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493179-493181](../../../../../reference/runtime/host-main.cjs#L493179-L493181) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:493179 usa retorno implícito de arrow function.

### host:493179

Chamadas escritas diretamente neste corpo: `.broker.awaitAccessRequest`, `deps.extensions.api`.

SHA-256 do trecho: `aad80fc7bfc92230372ad571ef68151c4158f65ae268a5769a45517e7fe280cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
