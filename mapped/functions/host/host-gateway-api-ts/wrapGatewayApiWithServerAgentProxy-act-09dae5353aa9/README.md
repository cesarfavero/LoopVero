# `wrapGatewayApiWithServerAgentProxy/act`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491945-491945](../../../../../reference/runtime/host-main.cjs#L491945-L491945) | `ArrowFunctionExpression` | sim | `request5, onOk, fallback3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491945-491945](../../../../../reference/runtime/host-main.cjs#L491945-L491945) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:491945 usa retorno implícito de arrow function.

### host:491945

Chamadas escritas diretamente neste corpo: `proxy.performAction`, `settle3`.

SHA-256 do trecho: `46b8ca5c33d2046c69a80abd296829a47fb03aa88c0d4b41eb07099900c70298`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
