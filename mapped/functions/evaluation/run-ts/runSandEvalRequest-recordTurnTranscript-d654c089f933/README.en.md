# `runSandEvalRequest/recordTurnTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/run.ts` · [Module README](../../../../modules/evaluation/run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630302-630305](../../../../../reference/runtime/sand-eval-runner.cjs#L630302-L630305) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630302-630305](../../../../../reference/runtime/sand-eval-runner.cjs#L630302-L630305) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:630302

Calls written directly in this body: `dependencies.inference.recordTurnTranscript`, `sandTurnTranscriptSegment`, `transcriptSegments.push`.

SHA-256 of the source span: `5c5f747fa86124a1612e39de63f4e8316836d7b87e67400d7fdfbaa6e482049a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
