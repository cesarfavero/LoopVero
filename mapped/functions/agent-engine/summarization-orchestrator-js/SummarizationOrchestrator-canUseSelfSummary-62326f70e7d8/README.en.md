# `SummarizationOrchestrator.canUseSelfSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649681-649683](../../../../../reference/runtime/host-main.cjs#L649681-L649683) | `method` | no | `options2` |
| [evaluation:441334-441336](../../../../../reference/runtime/sand-eval-runner.cjs#L441334-L441336) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649681-649683](../../../../../reference/runtime/host-main.cjs#L649681-L649683) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:441334-441336](../../../../../reference/runtime/sand-eval-runner.cjs#L441334-L441336) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:649681

Calls written directly in this body: `this.canUseSelfSummaryNow`.

SHA-256 of the source span: `321594ad1cc011ddc2b01bccaaa4416b83d68ce61f5fe99ddead384d0c842ee9`.

### evaluation:441334

Calls written directly in this body: `this.canUseSelfSummaryNow`.

SHA-256 of the source span: `321594ad1cc011ddc2b01bccaaa4416b83d68ce61f5fe99ddead384d0c842ee9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
