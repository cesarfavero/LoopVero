# `createHostGatewayApi/startFreshConversation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492605-492610](../../../../../reference/runtime/host-main.cjs#L492605-L492610) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492605-492610](../../../../../reference/runtime/host-main.cjs#L492605-L492610) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:492605

Chamadas escritas diretamente neste corpo: `new ServerAgentProxyRefusedError`.

Alvos de lançamento explícito: `ServerAgentProxyRefusedError`.

SHA-256 do trecho: `d9e23aec7b6744aa23c5efdef7de81f2aec7c1404f5c5353a770caacac97259b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
