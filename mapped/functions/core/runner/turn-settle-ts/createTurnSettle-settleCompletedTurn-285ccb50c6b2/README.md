# `createTurnSettle/settleCompletedTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591091-591150](../../../../../../reference/runtime/sand-eval-runner.cjs#L591091-L591150) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591091-591150](../../../../../../reference/runtime/sand-eval-runner.cjs#L591091-L591150) | 6 | 0 | 2 | 0 | 0 | 0 |

### evaluation:591091

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `BigInt`, `Date.now`, `Math.max`, `Math.min`, `args.finalState.turnTimings.push`, `host.isRunSuperseded`, `host.latestPromptMessages`, `host.renamedPromptMarkers`, `host.userTimeZone`, `host.vaultMounted`, `isMemorableExchange`, `lastAssistantText`, `new Date`, `new StepTiming`, `new TurnTelemetryState`, `recordAutomationRunLabeling`, `recordPostTurnLabeling`, `recordTurnTranscript`, `runMemoryExtraction`, `runsPerTurnMemoryExtraction`, `turnEndedOnSilentToolCalls`.

Alvos de atribuição ou incremento: `args.finalState.turnTelemetry`, `endedOnSilentToolCalls`, `finalAssistantText`.

SHA-256 do trecho: `7be2245aa04971ec3ff57e1ff7f7109f881283255fe8896dc18ee8a704b4dece`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
