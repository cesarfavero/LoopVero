# `rehydrateSummarizationResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647870-647909](../../../../../reference/runtime/host-main.cjs#L647870-L647909) | `FunctionDeclaration` | no | `args` |
| [evaluation:439527-439566](../../../../../reference/runtime/sand-eval-runner.cjs#L439527-L439566) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647870-647909](../../../../../reference/runtime/host-main.cjs#L647870-L647909) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:439527-439566](../../../../../reference/runtime/sand-eval-runner.cjs#L439527-L439566) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:647870

Calls written directly in this body: `args.validatedPrefixMessages.slice`, `createRedactedCoreMessageSerde`, `createRedactedString`, `new Error`, `record3.preservedTailIndices.map`, `record3.replacementLayout.map`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `c003c59b2bfe01168c3b66aed583742ce904db61b5547eac3ee9ffd065501587`.

### evaluation:439527

Calls written directly in this body: `args.validatedPrefixMessages.slice`, `createRedactedCoreMessageSerde`, `createRedactedString`, `new Error`, `record4.preservedTailIndices.map`, `record4.replacementLayout.map`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `cbc9ba31945df62a2aebd33ebf7e88576f95f46008dcd83e4a587529cdfb5d94`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
