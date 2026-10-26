# `createTurnPerformanceObservation/recordPreFirstMessageTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547364-547398](../../../../../../reference/runtime/sand-eval-runner.cjs#L547364-L547398) | `FunctionDeclaration` | no | `{     harness: harness2,     callId,     step,     startedAt: startedAt2,     endedAt   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547364-547398](../../../../../../reference/runtime/sand-eval-runner.cjs#L547364-L547398) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547364

Calls written directly in this body: `Math.max`, `recordCompletedSpanIfParented`, `toEpochMs`, `toolNames.get`, `ttfaTrace.runCtx.withName`, `turnPreFirstMessageTool.histogram`, `updateStateTargets.get`.

SHA-256 of the source span: `f16342dfae9a69b763663b040028875a2b10898576f62ec30a254c146b8ef5ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
