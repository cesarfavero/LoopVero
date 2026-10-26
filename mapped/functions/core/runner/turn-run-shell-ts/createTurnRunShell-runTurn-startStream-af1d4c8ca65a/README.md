# `createTurnRunShell/runTurn/startStream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:592298-592328](../../../../../../reference/runtime/sand-eval-runner.cjs#L592298-L592328) | `ArrowFunctionExpression` | não | `attemptCtx, resumeFrom, persistCheckpoint` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592298-592328](../../../../../../reference/runtime/sand-eval-runner.cjs#L592298-L592328) | 5 | 0 | 0 | 2 | 0 | 0 |

### evaluation:592298

Chamadas escritas diretamente neste corpo: `.getAwaitingUserInputTurnId`, `.getCompletedTurnId`, `.with`, `Promise.resolve`, `agent.runStream`, `attemptCtx.signal.throwIfAborted`, `attemptCtx.with`, `completeThisRun`, `host.agentStore`, `pauseThisRun`, `settleStepCheckpointWaiters`, `toRedactedConversationAction`, `toRedactedConversationStateStructure`.

SHA-256 do trecho: `96ddd164cb456d780a84009454940cf70c110f717caf7cbd2cff49701240e55f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
