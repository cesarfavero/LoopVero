# `shouldStartBackgroundSummarization`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/background-summarization.js` · [Module README](../../../../modules/agent-summarization/background-summarization-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616786-616789](../../../../../reference/runtime/host-main.cjs#L616786-L616789) | `FunctionDeclaration` | no | `usedTokens, maxTokens, props` |
| [evaluation:285326-285329](../../../../../reference/runtime/sand-eval-runner.cjs#L285326-L285329) | `FunctionDeclaration` | no | `usedTokens, maxTokens, props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616786-616789](../../../../../reference/runtime/host-main.cjs#L616786-L616789) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285326-285329](../../../../../reference/runtime/sand-eval-runner.cjs#L285326-L285329) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616786

Calls written directly in this body: `getBackgroundSummarizationTriggerThreshold`.

SHA-256 of the source span: `aca319ee63fcbad16537046489c46a661eee5624411aff20d29b450f14d229d3`.

### evaluation:285326

Calls written directly in this body: `getBackgroundSummarizationTriggerThreshold`.

SHA-256 of the source span: `aca319ee63fcbad16537046489c46a661eee5624411aff20d29b450f14d229d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
