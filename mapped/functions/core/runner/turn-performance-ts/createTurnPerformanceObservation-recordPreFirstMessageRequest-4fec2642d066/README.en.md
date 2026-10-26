# `createTurnPerformanceObservation/recordPreFirstMessageRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547399-547433](../../../../../../reference/runtime/sand-eval-runner.cjs#L547399-L547433) | `FunctionDeclaration` | no | `{     harness: harness2,     step,     startedAt: startedAt2,     firstTokenAt,     endedAt   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547399-547433](../../../../../../reference/runtime/sand-eval-runner.cjs#L547399-L547433) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547399

Calls written directly in this body: `Math.max`, `classifyRequestStep`, `recordCompletedSpanIfParented`, `toEpochMs`, `ttfaTrace.runCtx.withName`, `turnPreFirstMessageRequest.histogram`.

SHA-256 of the source span: `1a393544d5e73c2522e1e950e7f3d012611c054e9e62df3d747bf2ee27e0909a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
