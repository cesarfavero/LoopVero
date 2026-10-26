# `SummarizationHandler.buildSummaryMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621597-621620](../../../../../reference/runtime/host-main.cjs#L621597-L621620) | `method` | no | `rawSummary, partitioned, enrichments, options2` |
| [evaluation:305951-305974](../../../../../reference/runtime/sand-eval-runner.cjs#L305951-L305974) | `method` | no | `rawSummary, partitioned, enrichments, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621597-621620](../../../../../reference/runtime/host-main.cjs#L621597-L621620) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305951-305974](../../../../../reference/runtime/sand-eval-runner.cjs#L305951-L305974) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:621597

Calls written directly in this body: `appendDurableBlocks`, `findLatestImagePart`, `renderDurableBlocks`, `toRedactedCoreMessage`, `toUserMessageImagePart`.

SHA-256 of the source span: `340c154d853b175b31bce2a016295d8a10491076e1dd9f128d99fcc5c1ec9227`.

### evaluation:305951

Calls written directly in this body: `appendDurableBlocks`, `findLatestImagePart`, `renderDurableBlocks`, `toRedactedCoreMessage`, `toUserMessageImagePart`.

SHA-256 of the source span: `f44ce9c81e7115e17ff2ae244940b488459ae048a6127a360d5228335b359062`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
