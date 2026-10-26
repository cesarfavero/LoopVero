# `agent-engine/loop-detection/single-message-loop-detector.js`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../guide/architecture/README.md) · [Índice geral](../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:624096-624501](../../../../../reference/runtime/host-main.cjs#L624096-L624501) |
| evaluation | [evaluation:310218-310623](../../../../../reference/runtime/sand-eval-runner.cjs#L310218-L310623) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `SingleMessageLoopDetector.addLineToQueue` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-addLineToQueue-13f92270b0c4/README.md) |
| `SingleMessageLoopDetector.addText` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-addText-bd07378e2115/README.md) |
| `SingleMessageLoopDetector.appendToCurrentLine` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-appendToCurrentLine-debaf3f04370/README.md) |
| `SingleMessageLoopDetector.checkForMultiLineLoop` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-checkForMultiLineLoop-390666ef2df0/README.md) |
| `SingleMessageLoopDetector.clearCurrentLine` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-clearCurrentLine-05fa32bb0591/README.md) |
| `SingleMessageLoopDetector.constructor` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-constructor-d7f5810764e3/README.md) |
| `SingleMessageLoopDetector.getLineAt` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-getLineAt-1e653ab0cee4/README.md) |
| `SingleMessageLoopDetector.getMultiLineLoopInfo` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-getMultiLineLoopInfo-b66577b5b057/README.md) |
| `SingleMessageLoopDetector.getSingleLineLoopInfo` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-getSingleLineLoopInfo-b01f9c3684fc/README.md) |
| `SingleMessageLoopDetector.isBinaryLikeLine` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-isBinaryLikeLine-8a27f240aa20/README.md) |
| `SingleMessageLoopDetector.isBinaryLikeMultiLineRoot` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-isBinaryLikeMultiLineRoot-d47853ea05ef/README.md) |
| `SingleMessageLoopDetector.isCurrentLineBinaryLike` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-isCurrentLineBinaryLike-fc7fd9f46d1c/README.md) |
| `SingleMessageLoopDetector.isCurrentLineBoxBorder` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-isCurrentLineBoxBorder-c470acd02d0f/README.md) |
| `SingleMessageLoopDetector.loopDetected` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-loopDetected-ae4641c6c2e7/README.md) |
| `SingleMessageLoopDetector.markTimedOutIfNeeded` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-markTimedOutIfNeeded-8582e8818cf2/README.md) |
| `SingleMessageLoopDetector.reset` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-reset-324e35dd272d/README.md) |
| `SingleMessageLoopDetector.timedOut` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-timedOut-95fcca793249/README.md) |
| `SingleMessageLoopDetector.updateCodeFenceStateOnLineEnd` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-updateCodeFenceStateOnLineEnd-01a3c4555dd1/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
