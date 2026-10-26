# `SummarizationOrchestrator.shouldStartBackgroundSummarization`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649624-649641](../../../../../reference/runtime/host-main.cjs#L649624-L649641) | `method` | no | `tokenDetails, messages2, ctx` |
| [evaluation:441277-441294](../../../../../reference/runtime/sand-eval-runner.cjs#L441277-L441294) | `method` | no | `tokenDetails, messages, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649624-649641](../../../../../reference/runtime/host-main.cjs#L649624-L649641) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:441277-441294](../../../../../reference/runtime/sand-eval-runner.cjs#L441277-L441294) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:649624

Calls written directly in this body: `EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION`, `logger62.info`, `shouldPerformSelfSummary`, `shouldStartBackgroundSummarization`, `this.canUseSelfSummaryNow`.

SHA-256 of the source span: `5dceae6dcc4b64c50662e5b135825d7a693b0b9c6e906223390be13a97d51474`.

### evaluation:441277

Calls written directly in this body: `EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION`, `logger39.info`, `shouldPerformSelfSummary`, `shouldStartBackgroundSummarization`, `this.canUseSelfSummaryNow`.

SHA-256 of the source span: `3ccc5989711b1089e2ccc33ebbaf5ddf467bcf4cbd308ea4f212594b3fa6aca9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
