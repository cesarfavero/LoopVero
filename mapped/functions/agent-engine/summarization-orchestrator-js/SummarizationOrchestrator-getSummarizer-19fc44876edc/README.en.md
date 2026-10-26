# `SummarizationOrchestrator.getSummarizer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649684-649694](../../../../../reference/runtime/host-main.cjs#L649684-L649694) | `method` | no | `stateHandler, interactionListener, config2, options2` |
| [evaluation:441337-441347](../../../../../reference/runtime/sand-eval-runner.cjs#L441337-L441347) | `method` | no | `stateHandler, interactionListener, config2, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649684-649694](../../../../../reference/runtime/host-main.cjs#L649684-L649694) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:441337-441347](../../../../../reference/runtime/sand-eval-runner.cjs#L441337-L441347) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:649684

Calls written directly in this body: `config2.onExternalSummarizationStart`, `this.canUseSelfSummary`, `this.selfSummarizerFactory`.

SHA-256 of the source span: `0e21a4253e7384f632ec759578dcc4a07762935d05a50453d4b43939d82df6f6`.

### evaluation:441337

Calls written directly in this body: `config2.onExternalSummarizationStart`, `this.canUseSelfSummary`, `this.selfSummarizerFactory`.

SHA-256 of the source span: `0e21a4253e7384f632ec759578dcc4a07762935d05a50453d4b43939d82df6f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
