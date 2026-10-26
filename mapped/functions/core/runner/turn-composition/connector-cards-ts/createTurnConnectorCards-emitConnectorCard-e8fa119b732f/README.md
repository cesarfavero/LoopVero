# `createTurnConnectorCards/emitConnectorCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-composition/connector-cards.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/connector-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584157-584176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584157-L584176) | `ArrowFunctionExpression` | sim | `emission, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584157-584176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584157-L584176) | 4 | 0 | 2 | 3 | 0 | 0 |

### evaluation:584157

Chamadas escritas diretamente neste corpo: `Date.now`, `armMcpAuthWait`, `connectorCardDedupeKey`, `connectorCardEmissionToMessage`, `connectorCardOutcomes.get`, `connectorCardOutcomes.set`, `emittedConnectorCards.add`, `emittedConnectorCards.has`, `turnToolHost.gates.automationConnectCard`.

SHA-256 do trecho: `4b3a3986eb76d4833f7e21c1a5095d4808a2c8b07bbb75d587559dbaa055067e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
