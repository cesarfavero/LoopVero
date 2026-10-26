# `agent-engine/loop-detection/single-message-loop-detector.js`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../../guide/architecture/README.en.md) · [General index](../../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:624096-624501](../../../../../reference/runtime/host-main.cjs#L624096-L624501) |
| evaluation | [evaluation:310218-310623](../../../../../reference/runtime/sand-eval-runner.cjs#L310218-L310623) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `SingleMessageLoopDetector.addLineToQueue` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-addLineToQueue-13f92270b0c4/README.en.md) |
| `SingleMessageLoopDetector.addText` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-addText-bd07378e2115/README.en.md) |
| `SingleMessageLoopDetector.appendToCurrentLine` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-appendToCurrentLine-debaf3f04370/README.en.md) |
| `SingleMessageLoopDetector.checkForMultiLineLoop` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-checkForMultiLineLoop-390666ef2df0/README.en.md) |
| `SingleMessageLoopDetector.clearCurrentLine` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-clearCurrentLine-05fa32bb0591/README.en.md) |
| `SingleMessageLoopDetector.constructor` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-constructor-d7f5810764e3/README.en.md) |
| `SingleMessageLoopDetector.getLineAt` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-getLineAt-1e653ab0cee4/README.en.md) |
| `SingleMessageLoopDetector.getMultiLineLoopInfo` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-getMultiLineLoopInfo-b66577b5b057/README.en.md) |
| `SingleMessageLoopDetector.getSingleLineLoopInfo` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-getSingleLineLoopInfo-b01f9c3684fc/README.en.md) |
| `SingleMessageLoopDetector.isBinaryLikeLine` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-isBinaryLikeLine-8a27f240aa20/README.en.md) |
| `SingleMessageLoopDetector.isBinaryLikeMultiLineRoot` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-isBinaryLikeMultiLineRoot-d47853ea05ef/README.en.md) |
| `SingleMessageLoopDetector.isCurrentLineBinaryLike` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-isCurrentLineBinaryLike-fc7fd9f46d1c/README.en.md) |
| `SingleMessageLoopDetector.isCurrentLineBoxBorder` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-isCurrentLineBoxBorder-c470acd02d0f/README.en.md) |
| `SingleMessageLoopDetector.loopDetected` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-loopDetected-ae4641c6c2e7/README.en.md) |
| `SingleMessageLoopDetector.markTimedOutIfNeeded` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-markTimedOutIfNeeded-8582e8818cf2/README.en.md) |
| `SingleMessageLoopDetector.reset` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-reset-324e35dd272d/README.en.md) |
| `SingleMessageLoopDetector.timedOut` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-timedOut-95fcca793249/README.en.md) |
| `SingleMessageLoopDetector.updateCodeFenceStateOnLineEnd` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/single-message-loop-detector-js/SingleMessageLoopDetector-updateCodeFenceStateOnLineEnd-01a3c4555dd1/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
