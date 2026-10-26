# `runSandEvalRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/run.ts` · [Module README](../../../../modules/evaluation/run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630255-630581](../../../../../reference/runtime/sand-eval-runner.cjs#L630255-L630581) | `FunctionDeclaration` | yes | `request3, dependencies` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630255-630581](../../../../../reference/runtime/sand-eval-runner.cjs#L630255-L630581) | 24 | 0 | 7 | 3 | 0 | 1 |

### evaluation:630255

Calls written directly in this body: `.then`, `Promise.race`, `SandEvalContinuationRuntime.create`, `abandonAtDeadline`, `afterAbort`, `buildSandEvalConversationHistory2`, `createRequestContext`, `createSandEvalRunner`, `createSandEvalSessionState`, `deliveredMessages.join`, `dependencies.stopWaiting.addEventListener`, `new Date`, `new LocalExecSandBox`, `request3.selectedImages.map`, `scenarioClock`, `selectSandEvalFinalMessage`, `serializeSandEvalRunnerError`, `sessionState.dispose`, `transcriptEvidence`, `withSessionMemory`, `work.catch`.

SHA-256 of the source span: `04255a67b6409aa3659437a0cf194876b5abec46b80c7700e0fe1b64cce2ff55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
