# `createHostGatewayApi/deleteAgentsAndReport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492403-492440](../../../../../reference/runtime/host-main.cjs#L492403-L492440) | `ArrowFunctionExpression` | sim | `ids` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492403-492440](../../../../../reference/runtime/host-main.cjs#L492403-L492440) | 4 | 0 | 2 | 1 | 1 | 0 |

### host:492403

Chamadas escritas diretamente neste corpo: `.brain.reportAgentDelete`, `.deleteAgents`, `Date.now`, `deps.extensions.api`, `forgetDeletedAgentsOnHost`, `new ServerAgentProxyUnavailableError`.

Alvos de lançamento explícito: `ServerAgentProxyUnavailableError`.

SHA-256 do trecho: `91ce4ce98205c423f30d21432ea49e7c088158e642022a349b93080a5f99d2eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
