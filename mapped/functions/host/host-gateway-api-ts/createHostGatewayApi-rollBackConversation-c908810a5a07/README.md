# `createHostGatewayApi/rollBackConversation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492611-492616](../../../../../reference/runtime/host-main.cjs#L492611-L492616) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492611-492616](../../../../../reference/runtime/host-main.cjs#L492611-L492616) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:492611

Chamadas escritas diretamente neste corpo: `new ServerAgentProxyRefusedError`.

Alvos de lançamento explícito: `ServerAgentProxyRefusedError`.

SHA-256 do trecho: `377c20bd75d95c06b29536760d3a43ece400fe710acc1f98867114241c618803`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
