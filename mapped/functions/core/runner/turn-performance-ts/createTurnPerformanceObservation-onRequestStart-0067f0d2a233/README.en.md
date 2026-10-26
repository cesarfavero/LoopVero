# `createTurnPerformanceObservation/onRequestStart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547583-547758](../../../../../../reference/runtime/sand-eval-runner.cjs#L547583-L547758) | `FunctionExpression` | no | `requestCtx, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547583-547758](../../../../../../reference/runtime/sand-eval-runner.cjs#L547583-L547758) | 11 | 0 | 0 | 2 | 0 | 0 |

### evaluation:547583

Calls written directly in this body: `Math.max`, `Math.min`, `String`, `classifyThinkTimeBucket`, `clock.monotonicNow`, `hashPromptPrefix`, `onceModelKnown`, `safelyObserve`, `sha256HexOfText`, `turnActivityTtfi.histogram`, `turnStepGap.histogram`, `turnStepOverhead.histogram`, `turnTtfi.histogram`, `turnUserThinkTime.histogram`.

Assignment or increment targets: `firstRequestAt`, `firstRequestStarted`, `lastRequestState`, `metricContext`, `nextRequestIsRetry`, `occupiedGapMs`, `occupiedGapStartedAt`, `previousRequestEndedAt`, `requestPrefix`, `requestPrefixHash`, `stepsStarted`, `suppressNextGap`, `thinkTimeBucket`.

SHA-256 of the source span: `863491c74a2cd7b4ae3f59f9239b67dc6bf918d9dfe8b9bb80c7ca595cfa87d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
