# `createTurnRunShell/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591415-591501](../../../../../../reference/runtime/sand-eval-runner.cjs#L591415-L591501) | `FunctionDeclaration` | sim | `prompt, options2, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591415-591501](../../../../../../reference/runtime/sand-eval-runner.cjs#L591415-L591501) | 7 | 0 | 1 | 1 | 1 | 1 |

### evaluation:591415

Chamadas escritas diretamente neste corpo: `Date.now`, `Number`, `Number.isSafeInteger`, `beginTurnBotBlock`, `classifySandTurnInitiator`, `classifyUserTurnPosition`, `createTurnPerformanceObservation`, `createTurnSetupLaps`, `errorFreeStep2.ended`, `errorFreeSteps.beginRun`, `host.getConversationId`, `host.getConversationState`, `host.metricsClock.monotonicNow`, `host.metricsTurn`, `performanceObservation.complete`, `resolveTurnOutcomeTags`, `resolveTurnTraceOutcome`, `runTurn`.

Alvos de atribuição ou incremento: `failure3`, `outcome`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `ee5fef63c52d5c5b7ec2b080f2433a323368cc730076e27e79a86270b7c71479`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
