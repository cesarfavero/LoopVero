# `createNeedsAuthCards/surfaceAutomationCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/needs-auth-cards.ts` · [README do módulo](../../../../../modules/core/mcp/needs-auth-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584958-584974](../../../../../../reference/runtime/sand-eval-runner.cjs#L584958-L584974) | `ArrowFunctionExpression` | sim | `providerIdentifier, slot, failedCallError` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584958-584974](../../../../../../reference/runtime/sand-eval-runner.cjs#L584958-L584974) | 1 | 0 | 1 | 1 | 0 | 0 |

### evaluation:584958

Chamadas escritas diretamente neste corpo: `connectCardEmittedForServer.set`, `connectorCardAccountFields`, `deps.emitConnectorCard`, `describeNeedsAuthCardForAutomation`, `hold.hold`.

SHA-256 do trecho: `418a108880a355a8fcd4d96aed1425665afa75d755231a9a2c02ad7bc13c07ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
