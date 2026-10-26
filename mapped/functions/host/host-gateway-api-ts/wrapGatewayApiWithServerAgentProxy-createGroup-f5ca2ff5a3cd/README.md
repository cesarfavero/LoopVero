# `wrapGatewayApiWithServerAgentProxy/createGroup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491977-491995](../../../../../reference/runtime/host-main.cjs#L491977-L491995) | `ArrowFunctionExpression` | sim | `createArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491977-491995](../../../../../reference/runtime/host-main.cjs#L491977-L491995) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:491977

Chamadas escritas diretamente neste corpo: `api.createGroup`, `proxy.createRoom`, `proxy.serverRoomsEnabled`, `settle3`.

SHA-256 do trecho: `cfa50a79f1d1753ac7bb6f5e38289adf767cf394da78ba8131ea25032aadbfc3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
