# `wrapGatewayApiWithServerAgentProxy/openRead`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491951-491955](../../../../../reference/runtime/host-main.cjs#L491951-L491955) | `ArrowFunctionExpression` | não | `query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491951-491955](../../../../../reference/runtime/host-main.cjs#L491951-L491955) | 2 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:491951 usa retorno implícito de arrow function.

### host:491951

Chamadas escritas diretamente neste corpo: `proxy.getAgentTranscriptTail`, `proxy.openAgentTail`.

SHA-256 do trecho: `12acc6f13350d96dc220e21733024f4c9a275cf16e17bad5d98aae0e08d4841a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
