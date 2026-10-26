# `createPromptPrefixObservation/observePrewarmPrefix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546630-546689](../../../../../../reference/runtime/sand-eval-runner.cjs#L546630-L546689) | `FunctionDeclaration` | no | `harness, current2, compactionEpoch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546630-546689](../../../../../../reference/runtime/sand-eval-runner.cjs#L546630-L546689) | 13 | 3 | 0 | 3 | 0 | 0 |

### evaluation:546630

Calls written directly in this body: `.every`, `Math.max`, `changed.includes`, `changedTail.includes`, `deps.conversationId`, `deps.prewarmPrefix`, `deps.requestId`, `deps.telemetry.reportPrewarmPrefixMismatch`, `diffPromptPrefix`, `diffPromptPrefixTail`, `diffPromptPrefixTools`, `prewarmPrefix.increment`, `prewarmPrefixMismatch.increment`, `prewarmPrefixToolMismatch.increment`, `prewarmPrefixTurn.increment`, `toSectionLabel`, `toToolChangeLabels`, `toTurnSizeLabel`.

SHA-256 of the source span: `b869491bc5abae90708a4e11b49881a365a031b06ccb5ec7c9d881e92dfac3b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
