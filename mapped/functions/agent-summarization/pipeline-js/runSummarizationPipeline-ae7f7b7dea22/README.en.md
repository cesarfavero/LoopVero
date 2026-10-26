# `runSummarizationPipeline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/pipeline.js` · [Module README](../../../../modules/agent-summarization/pipeline-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620475-620508](../../../../../reference/runtime/host-main.cjs#L620475-L620508) | `FunctionDeclaration` | yes | `summarizer, ctx, messages2, options2` |
| [evaluation:304829-304862](../../../../../reference/runtime/sand-eval-runner.cjs#L304829-L304862) | `FunctionDeclaration` | yes | `summarizer, ctx, messages, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620475-620508](../../../../../reference/runtime/host-main.cjs#L620475-L620508) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:304829-304862](../../../../../reference/runtime/sand-eval-runner.cjs#L304829-L304862) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:620475

Calls written directly in this body: `summarizer.assembleFinalMessages`, `summarizer.buildSummaryMessage`, `summarizer.generateSummary`, `summarizer.partitionMessages`, `warnIfPreservedTailShapeInvalid`.

SHA-256 of the source span: `eb7519792250d79d853821bfb9371d8e5d792d9d4b69400a041e11dbd2406829`.

### evaluation:304829

Calls written directly in this body: `summarizer.assembleFinalMessages`, `summarizer.buildSummaryMessage`, `summarizer.generateSummary`, `summarizer.partitionMessages`, `warnIfPreservedTailShapeInvalid`.

SHA-256 of the source span: `7b267281e1dbe5cae6fd2e3caafece65a0c08accaeb8b58532497de7d5d5240a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
