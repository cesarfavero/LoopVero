# `createNeedsAuthCards/surfaceSlotCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/needs-auth-cards.ts` · [README do módulo](../../../../../modules/core/mcp/needs-auth-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584975-585015](../../../../../../reference/runtime/sand-eval-runner.cjs#L584975-L585015) | `ArrowFunctionExpression` | sim | `providerIdentifier, slot, failedCallError, probes, holdFollowUp, cardSource` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584975-585015](../../../../../../reference/runtime/sand-eval-runner.cjs#L584975-L585015) | 9 | 0 | 2 | 2 | 0 | 0 |

### evaluation:584975

Chamadas escritas diretamente neste corpo: `connectCardEmittedForServer.set`, `connectCardWait`, `connectorCardAccountFields`, `deps.automationConnectCard`, `deps.emitConnectorCard`, `describeCard`, `describeNeedsAuthForAutomation`, `followUpGateFor`, `hold.hold`, `probes.openedAfterMs`, `stdioSignInCardFields`, `surfaceAutomationCard`.

SHA-256 do trecho: `bd05ac556cbc03e85a8c9af3b95d2b1da5df3a5cb1bd7a8e48bfa0a3c316fa58`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
