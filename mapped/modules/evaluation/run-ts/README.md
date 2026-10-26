# `evaluation/run.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../guide/architecture/README.md) · [Índice geral](../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| evaluation | [evaluation:628340-628344](../../../../reference/runtime/sand-eval-runner.cjs#L628340-L628344) |
| evaluation | [evaluation:630213-630582](../../../../reference/runtime/sand-eval-runner.cjs#L630213-L630582) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `afterAbort` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/afterAbort-a30c1635da4a/README.md) |
| `createRequestContext` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/createRequestContext-73fa32087f78/README.md) |
| `createRequestContext/resolve` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/createRequestContext-resolve-fd0bf2d9e598/README.md) |
| `createRequestContext/resolveRules` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/createRequestContext-resolveRules-a1ca6b1bcc31/README.md) |
| `renderDeliveredMessage` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/renderDeliveredMessage-89c01774da6e/README.md) |
| `runSandEvalRequest` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-0b33e19d2d8e/README.md) |
| `runSandEvalRequest/<callback>/dispose` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-callback-dispose-1bd4b5e9f696/README.md) |
| `runSandEvalRequest/<callback>/onModelResolved` | 2 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-callback-onModelResolved-55a0483f18c1/README.md) |
| `runSandEvalRequest/<callback>/revivalRunOptions` | 2 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-callback-revivalRunOptions-aba976a9f74b/README.md) |
| `runSandEvalRequest/<callback>/revivalRunOptions/onModelResolved` | 2 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-callback-revivalRunOptions-onModelResolved-5c5782e6047a/README.md) |
| `runSandEvalRequest/abandonAtDeadline` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-abandonAtDeadline-a84ca69b3909/README.md) |
| `runSandEvalRequest/createSession` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-createSession-e8d4379e4f05/README.md) |
| `runSandEvalRequest/deadlinePassed` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-deadlinePassed-993f81c6f525/README.md) |
| `runSandEvalRequest/lastReactionApplied` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-lastReactionApplied-82f1add24184/README.md) |
| `runSandEvalRequest/lastSentMessageId` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-lastSentMessageId-4b741a98356f/README.md) |
| `runSandEvalRequest/onUpdate` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-onUpdate-90af9affa28d/README.md) |
| `runSandEvalRequest/recordPostTurnLabeling` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-recordPostTurnLabeling-8a780472013b/README.md) |
| `runSandEvalRequest/recordTurnTranscript` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-recordTurnTranscript-d654c089f933/README.md) |
| `runSandEvalRequest/transcriptEvidence` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/runSandEvalRequest-transcriptEvidence-6f779b6369b0/README.md) |
| `scenarioClock` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/scenarioClock-7a6974a640c8/README.md) |
| `withScenarioTime` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/withScenarioTime-5b7901dcc105/README.md) |
| `withSessionMemory` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/withSessionMemory-5b0abe57eda5/README.md) |
| `withSessionMemory/removeMemory` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/withSessionMemory-removeMemory-ef2c5d85f48c/README.md) |
| `withSessionMemory/writeMemory` | 1 | [Funcionamento estático](../../../functions/evaluation/run-ts/withSessionMemory-writeMemory-c39c34fbbbc9/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
