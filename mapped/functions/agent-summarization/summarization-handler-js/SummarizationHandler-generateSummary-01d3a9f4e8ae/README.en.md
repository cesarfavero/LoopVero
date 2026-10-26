# `SummarizationHandler.generateSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621513-621534](../../../../../reference/runtime/host-main.cjs#L621513-L621534) | `method` | yes | `ctx, partitioned, options2` |
| [evaluation:305867-305888](../../../../../reference/runtime/sand-eval-runner.cjs#L305867-L305888) | `method` | yes | `ctx, partitioned, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621513-621534](../../../../../reference/runtime/host-main.cjs#L621513-L621534) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:305867-305888](../../../../../reference/runtime/sand-eval-runner.cjs#L305867-L305888) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:621513

Calls written directly in this body: `executeSummarizationWithRetry`, `this.buildDeterministicFallbackText`, `this.shouldUseDeterministicFallback`.

SHA-256 of the source span: `119bb5ec5ed2aee4973e91bbc4ec307d53501de0ff9a83f155b02df89d5b5d10`.

### evaluation:305867

Calls written directly in this body: `executeSummarizationWithRetry`, `this.buildDeterministicFallbackText`, `this.shouldUseDeterministicFallback`.

SHA-256 of the source span: `119bb5ec5ed2aee4973e91bbc4ec307d53501de0ff9a83f155b02df89d5b5d10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
