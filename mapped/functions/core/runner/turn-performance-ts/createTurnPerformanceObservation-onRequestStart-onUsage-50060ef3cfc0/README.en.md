# `createTurnPerformanceObservation/onRequestStart/onUsage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547690-547756](../../../../../../reference/runtime/sand-eval-runner.cjs#L547690-L547756) | `FunctionExpression` | no | `usage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547690-547756](../../../../../../reference/runtime/sand-eval-runner.cjs#L547690-L547756) | 7 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547690

Calls written directly in this body: `Math.max`, `Math.min`, `String`, `classifyPromptCacheResult`, `classifyPromptSizeBucket`, `composeTiming`, `consumedOrOwnPrewarmTriggerTag`, `emitComposeTiming`, `emitInferenceTtft`, `firstMessageTags`, `maybeEmitTtfaTrace`, `prewarmArmTag`, `prewarmGateTag`, `prewarmRace`, `prewarmStateTag`, `turnPrewarmLeadTime.histogram`, `turnPromptCache.increment`, `turnPromptCachedFraction.histogram`, `turnPromptCachedTokens.increment`, `turnPromptInputTokens.increment`, `turnUncachedInputTokens.histogram`.

Assignment or increment targets: `firstCallUsage`, `requestUsage`.

SHA-256 of the source span: `f7cfa845aca0d8cb366f31766d0bdf1d4796b185efb2bcc5de095d10f3463117`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
