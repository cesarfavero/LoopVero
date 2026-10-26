# `createHostGatewayApi/createThreadFromMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492735-492737](../../../../../reference/runtime/host-main.cjs#L492735-L492737) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492735-492737](../../../../../reference/runtime/host-main.cjs#L492735-L492737) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:492735

Chamadas escritas diretamente neste corpo: `new ServerAgentProxyRefusedError`.

Alvos de lançamento explícito: `ServerAgentProxyRefusedError`.

SHA-256 do trecho: `10bb4da940a5fa6500d7510398e24468cf88c34963f04b7dca45b049a7fc331e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
