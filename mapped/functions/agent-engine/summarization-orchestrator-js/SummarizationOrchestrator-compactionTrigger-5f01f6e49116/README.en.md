# `SummarizationOrchestrator.compactionTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649646-649680](../../../../../reference/runtime/host-main.cjs#L649646-L649680) | `method` | no | `ctx` |
| [evaluation:441299-441333](../../../../../reference/runtime/sand-eval-runner.cjs#L441299-L441333) | `method` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649646-649680](../../../../../reference/runtime/host-main.cjs#L649646-L649680) | 11 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:441299-441333](../../../../../reference/runtime/sand-eval-runner.cjs#L441299-L441333) | 11 | 0 | 0 | 1 | 0 | 0 |

### host:649646

Calls written directly in this body: `EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION`, `EVAL_ENFORCED_SELF_SUMMARY_TOKEN_LIMIT`, `Math.max`, `Math.min`, `Object.keys`, `reservedTokens.push`, `this.canUseSelfSummaryNow`, `usedTokens.push`, `windowFractions.push`.

SHA-256 of the source span: `a62a1f234c109403859a399144db747b3c3a98337b21c1617928fcfeeb303c05`.

### evaluation:441299

Calls written directly in this body: `EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION`, `EVAL_ENFORCED_SELF_SUMMARY_TOKEN_LIMIT`, `Math.max`, `Math.min`, `Object.keys`, `reservedTokens.push`, `this.canUseSelfSummaryNow`, `usedTokens.push`, `windowFractions.push`.

SHA-256 of the source span: `0f83ce90115d931ad99945295d7cc6477f48af483af48b4c07310ce5d4299e7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
