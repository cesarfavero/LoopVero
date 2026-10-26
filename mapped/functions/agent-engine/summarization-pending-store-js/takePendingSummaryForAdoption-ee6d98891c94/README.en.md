# `takePendingSummaryForAdoption`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647988-648049](../../../../../reference/runtime/host-main.cjs#L647988-L648049) | `FunctionDeclaration` | yes | `args` |
| [evaluation:439645-439706](../../../../../reference/runtime/sand-eval-runner.cjs#L439645-L439706) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647988-648049](../../../../../reference/runtime/host-main.cjs#L647988-L648049) | 5 | 0 | 2 | 6 | 0 | 0 |
| [evaluation:439645-439706](../../../../../reference/runtime/sand-eval-runner.cjs#L439645-L439706) | 5 | 0 | 2 | 6 | 0 | 0 |

### host:647988

Calls written directly in this body: `Date.now`, `abandonPrefixInvalid`, `args.currentMessages.slice`, `args.stillWarrantsCompaction`, `args.store.take`, `hashMessagesPrefix`, `logger61.info`, `pendingSummaryAdoption.increment`, `pendingSummaryAgeAtTake.histogram`, `rehydrateSummarizationResult`.

SHA-256 of the source span: `601392e431deff29eefa6bd8a399e49eec405f0f8ea7a90394ac3db7e8e87727`.

### evaluation:439645

Calls written directly in this body: `Date.now`, `abandonPrefixInvalid`, `args.currentMessages.slice`, `args.stillWarrantsCompaction`, `args.store.take`, `hashMessagesPrefix`, `logger38.info`, `pendingSummaryAdoption.increment`, `pendingSummaryAgeAtTake.histogram`, `rehydrateSummarizationResult`.

SHA-256 of the source span: `8048668343b50bbceceb20434c2c46ad793143c48fdf5fa0047f49c2d1b5fe63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
