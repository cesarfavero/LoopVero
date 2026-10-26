# `checkAndHandleLoopOnToolResultAppend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:311412-311496](../../../../../../reference/runtime/sand-eval-runner.cjs#L311412-L311496) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311412-311496](../../../../../../reference/runtime/sand-eval-runner.cjs#L311412-L311496) | 8 | 1 | 0 | 6 | 0 | 0 |

### evaluation:311412

Calls written directly in this body: `applyNudge`, `checkForAgentMessageLooping`, `checkForAgentOutboundMessageFlood`, `convertCoreMessagesToLoopFormat`, `currentMessages.slice`.

Assignment or increment targets: `i`, `lastAssistantIndex`.

SHA-256 of the source span: `c1e32696862c35a5363689137dda04171c6756f2f5dbe161f4b360e1e4c7fccf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
