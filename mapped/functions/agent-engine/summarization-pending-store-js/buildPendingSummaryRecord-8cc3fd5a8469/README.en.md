# `buildPendingSummaryRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647808-647869](../../../../../reference/runtime/host-main.cjs#L647808-L647869) | `FunctionDeclaration` | yes | `args` |
| [evaluation:439465-439526](../../../../../reference/runtime/sand-eval-runner.cjs#L439465-L439526) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647808-647869](../../../../../reference/runtime/host-main.cjs#L647808-L647869) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:439465-439526](../../../../../reference/runtime/sand-eval-runner.cjs#L439465-L439526) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:647808

Calls written directly in this body: `Date.now`, `args.messagesSummarized.forEach`, `args.result.preservedOriginalTailMessages.map`, `args.result.summary.summary.unwrap`, `createRedactedCoreMessageSerde`, `fullReplacementMessages.indexOf`, `fullReplacementMessages.map`, `hashMessagesPrefix`, `new Error`, `new Map`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `69f992fa96756cbc9919ed52b4c93d65cca5765ceedd277939a03e85d92c16b8`.

### evaluation:439465

Calls written directly in this body: `Date.now`, `args.messagesSummarized.forEach`, `args.result.preservedOriginalTailMessages.map`, `args.result.summary.summary.unwrap`, `createRedactedCoreMessageSerde`, `fullReplacementMessages.indexOf`, `fullReplacementMessages.map`, `hashMessagesPrefix`, `new Error`, `new Map`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `69f992fa96756cbc9919ed52b4c93d65cca5765ceedd277939a03e85d92c16b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
