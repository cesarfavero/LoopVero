# `withBotBlockDetection/record`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484518-484578](../../../../../../reference/runtime/sand-eval-runner.cjs#L484518-L484578) | `ArrowFunctionExpression` | no | `record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484518-484578](../../../../../../reference/runtime/sand-eval-runner.cjs#L484518-L484578) | 10 | 0 | 0 | 4 | 0 | 0 |

### evaluation:484518

Calls written directly in this body: `Math.min`, `auditor.record`, `classifyBotBlockPage`, `crypto.randomUUID`, `episodesByPageId.delete`, `episodesByPageId.get`, `episodesByPageId.has`, `episodesByPageId.set`, `noteTurnBotBlock`, `now`, `onHit`, `onResolved`, `resolutionKindFor`, `withSignedLookup`.

Assignment or increment targets: `episode.url`.

SHA-256 of the source span: `f732527462957bd8d711f40ea763b372e2702e5d15637f5658b407fecebe37c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
