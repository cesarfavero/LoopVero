# `createTurnRunShell`

**Fonte primária:** [sand-eval-runner.cjs:591314–592546](../../../reference/runtime/sand-eval-runner.cjs#L591314-L592546).

**Componente:** [turns](../../components/turns/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Compor execução de um turno com origem, política, sessão de inferência, ferramentas, checkpoint, interrupção e término. Esta implementação rica foi localizada no bundle de avaliação.

## API capturada

A fábrica recebe o objeto host do runner e mantém trackers de modelo/métricas, inbox de steering, callback de cancelamento vigente, estado de dispatch/pausa, origem e metadados de automação. Expõe operações como `run`, `interrupt`, `interruptAll`, `steer` e pausa para upgrade.

## Caminho de `run`

Monta observação, mede setup e chama a função interna `runTurn`. Essa última:

1. Resolve origem, autoria, automação e época de aprovações.
2. Distingue prompt comum de revival e ação sem prompt.
3. Valida entrada não vazia quando necessário.
4. Cria request ID, contexto cancelável, callbacks de parada e política de budget.
5. Cria sessão principal e sessão de sumarização.
6. Resolve box e discovery MCP.
7. Constrói o agente de turno e chama `createStreamAttempt`.
8. Executa stream e grava checkpoints em cadeia, com guardas de geração.
9. Drena efeitos e trata conclusão, pausa, cancelamento e erro.

## Decisões que alteram comportamento

`prewarm`, `hidden`, `resumeTurn`, `idleCompaction`, `requestSource`, `continuesTurn`, `autoReviewEpoch` e origem de subagente não são apenas metadados. Influenciam execução de ferramentas, autoria, labeling, recap, política de retry e parada. O README de [turnos](../../components/turns/README.md) liga cada um aos trechos relevantes.

## Checkpoints

O callback de persistência serializa gravações e verifica se a geração ainda pertence à run. O stream retomado parte do último checkpoint. Marcadores de conclusão/aguardo e ausência de chamadas pendentes podem encerrar uma repetição sem reexecutar trabalho.

## Limite de conclusão

O código permite mapear o loop usado pelo eval; não demonstra que `host-main.cjs` o instancia no caminho BOX. O host regular recuperado recusa esses sends e usa proxy para agentes Temporal.
