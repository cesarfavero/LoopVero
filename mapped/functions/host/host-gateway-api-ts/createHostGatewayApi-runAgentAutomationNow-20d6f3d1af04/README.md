# `createHostGatewayApi/runAgentAutomationNow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492758-492771](../../../../../reference/runtime/host-main.cjs#L492758-L492771) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492758-492771](../../../../../reference/runtime/host-main.cjs#L492758-L492771) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:492758

Chamadas escritas diretamente neste corpo: `.analytics.markActive`, `.isProxiedAgent`, `automations.runNowInSession`, `deps.extensions.api`, `manager.runAgentAutomationNow`, `normalizeGrokBotSessionId`.

SHA-256 do trecho: `22d2bddf6fa7ba83f22d257dbd0a4cfbb7d8b11c7b54c01449769ebd96b277bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
