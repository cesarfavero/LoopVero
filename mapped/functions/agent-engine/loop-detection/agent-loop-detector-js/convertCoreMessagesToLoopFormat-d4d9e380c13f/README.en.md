# `convertCoreMessagesToLoopFormat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:310809-310873](../../../../../../reference/runtime/sand-eval-runner.cjs#L310809-L310873) | `FunctionDeclaration` | no | `messages, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310809-310873](../../../../../../reference/runtime/sand-eval-runner.cjs#L310809-L310873) | 17 | 3 | 0 | 1 | 0 | 0 |

### evaluation:310809

Calls written directly in this body: `.trim`, `Array.isArray`, `callsById.get`, `callsById.set`, `extractToolResultTextForLoopDetection`, `new Map`, `options2.isWaitToolResult`, `previous.toolResultTexts.push`, `previous.transientRetryKinds.push`, `result.push`, `stripThinkingTags`, `toolCalls3.push`.

Assignment or increment targets: `previous.toolResultTexts`, `previous.toolResultWaited`, `previous.transientRetryKinds`, `text3`.

SHA-256 of the source span: `8aa07fd533969a6a9520aff8cb6001313597089f9f670210bdec0b1dafc36a3b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
