# `SummarizationHandler.partitionMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621481-621509](../../../../../reference/runtime/host-main.cjs#L621481-L621509) | `method` | no | `messages2, options2` |
| [evaluation:305835-305863](../../../../../reference/runtime/sand-eval-runner.cjs#L305835-L305863) | `method` | no | `messages, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621481-621509](../../../../../reference/runtime/host-main.cjs#L621481-L621509) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305835-305863](../../../../../reference/runtime/sand-eval-runner.cjs#L305835-L305863) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:621481

Calls written directly in this body: `.some`, `collectAllSkillBlocks`, `isTurnUnfinished`, `messagesForSummarization.findLastIndex`, `messagesForSummarization.slice`, `messagesToSummarize.findLastIndex`, `messagesToSummarize.slice`, `prepareMessagesForCompaction`, `tailOverflowsContextWindow`.

Assignment or increment targets: `preservedTailMessages`, `splitIndex`, `tailBeforeSummary`.

SHA-256 of the source span: `362e36f94d27ae9e6d6e3bde20e697c153d42615d8fdc216d39843126e2434d0`.

### evaluation:305835

Calls written directly in this body: `.some`, `collectAllSkillBlocks`, `isTurnUnfinished`, `messagesForSummarization.findLastIndex`, `messagesForSummarization.slice`, `messagesToSummarize.findLastIndex`, `messagesToSummarize.slice`, `prepareMessagesForCompaction`, `tailOverflowsContextWindow`.

Assignment or increment targets: `preservedTailMessages`, `splitIndex`, `tailBeforeSummary`.

SHA-256 of the source span: `9771d6febb2ab419767d56a1d6f4e0dd7b093b4f50fd284bf8867987e7442730`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
