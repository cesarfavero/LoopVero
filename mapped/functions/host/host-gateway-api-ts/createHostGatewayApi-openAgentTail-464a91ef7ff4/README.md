# `createHostGatewayApi/openAgentTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492712-492727](../../../../../reference/runtime/host-main.cjs#L492712-L492727) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492712-492727](../../../../../reference/runtime/host-main.cjs#L492712-L492727) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:492712

Chamadas escritas diretamente neste corpo: `.analytics.markActive`, `.logs.reportAgentOpen`, `Date.now`, `deps.extensions.api`, `manager.getActiveAgentId`, `manager.openAgentTail`.

SHA-256 do trecho: `a100270bb62fc11bbcf6943f4e3f584bddc8a0c818f0acbdcb49a2535da1dab9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
