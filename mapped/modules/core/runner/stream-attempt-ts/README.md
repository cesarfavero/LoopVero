# `core/runner/stream-attempt.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../guide/components/turns/README.md) · [Índice geral](../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:782354-782356](../../../../../reference/runtime/host-main.cjs#L782354-L782356) |
| evaluation | [evaluation:589851-589853](../../../../../reference/runtime/sand-eval-runner.cjs#L589851-L589853) |
| evaluation | [evaluation:590155-590413](../../../../../reference/runtime/sand-eval-runner.cjs#L590155-L590413) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `classifyStreamActivity` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/classifyStreamActivity-18e2faa75e37/README.md) |
| `createStreamAttempt` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-dd8d95151a74/README.md) |
| `createStreamAttempt/run` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-run-bd547ecf863d/README.md) |
| `createStreamAttempt/runBoundedTurn` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runBoundedTurn-b9b119205f08/README.md) |
| `createStreamAttempt/runBoundedTurn/isRetryable` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runBoundedTurn-isRetryable-5c532af8d6ce/README.md) |
| `createStreamAttempt/runBoundedTurn/onRetry` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runBoundedTurn-onRetry-8b8916fdf899/README.md) |
| `createStreamAttempt/runStreamOnce` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-5759be857bb4/README.md) |
| `createStreamAttempt/runStreamOnce/<callback>/disarm` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-callback-disarm-a3b582711574/README.md) |
| `createStreamAttempt/runStreamOnce/<callback>/noteStreamActivity` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-callback-noteStreamActivity-1f9d7c815150/README.md) |
| `createStreamAttempt/runStreamOnce/<callback>/onDeadline` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-callback-onDeadline-5819008862d8/README.md) |
| `createStreamAttempt/runStreamOnce/<callback>/reset` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-callback-reset-7200f73f7de4/README.md) |
| `createStreamAttempt/runStreamOnce/drainCheckpoints` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-drainCheckpoints-c72428bf48f5/README.md) |
| `createStreamAttempt/runStreamOnce/isCurrentAttempt` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-isCurrentAttempt-b3f9e84b02be/README.md) |
| `createStreamAttempt/runStreamOnce/persistCheckpoint` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-persistCheckpoint-bca01d8ee8d1/README.md) |
| `createStreamAttempt/runStreamOnce/settleAttempt` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-settleAttempt-b36ce57de23f/README.md) |
| `createStreamWatchdog` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-fa9ef2febc2c/README.md) |
| `createStreamWatchdog/clearDeadlineHooksIf` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-clearDeadlineHooksIf-b54b83086a16/README.md) |
| `createStreamWatchdog/getStreamOutputProduced` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-getStreamOutputProduced-78805373b79e/README.md) |
| `createStreamWatchdog/noteUpdate` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-noteUpdate-4d4ac4cd3c1c/README.md) |
| `createStreamWatchdog/resetDeadline` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-resetDeadline-2c2eeb5d36a4/README.md) |
| `createStreamWatchdog/setDeadlineHooks` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-setDeadlineHooks-9149d70ba9d5/README.md) |
| `createStreamWatchdog/setStreamOutputProduced` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-setStreamOutputProduced-df64d66b8d8b/README.md) |
| `firstRejected` | 1 | [Funcionamento estático](../../../../functions/core/runner/stream-attempt-ts/firstRejected-e5934bffde34/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
