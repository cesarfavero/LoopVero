# `runSandEvalRequest/transcriptEvidence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/run.ts` · [Module README](../../../../modules/evaluation/run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630307-630319](../../../../../reference/runtime/sand-eval-runner.cjs#L630307-L630319) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630307-630319](../../../../../reference/runtime/sand-eval-runner.cjs#L630307-L630319) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:630307

Calls written directly in this body: `sandToolCallAgents`, `sandTranscriptToolInputs`, `sandTurnTranscripts`, `withSandToolCallAgentsAndInputs`.

SHA-256 of the source span: `3384cc3417c44e93b22f1228c07bdeb61f89f9ecbb90d0700fcddd161bd21436`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
