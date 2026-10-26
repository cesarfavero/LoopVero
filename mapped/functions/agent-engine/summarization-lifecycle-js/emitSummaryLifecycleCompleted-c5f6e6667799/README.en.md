# `emitSummaryLifecycleCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-lifecycle.js` · [Module README](../../../../modules/agent-engine/summarization-lifecycle-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647491-647502](../../../../../reference/runtime/host-main.cjs#L647491-L647502) | `FunctionDeclaration` | no | `ctx, source, outcome` |
| [evaluation:439154-439165](../../../../../reference/runtime/sand-eval-runner.cjs#L439154-L439165) | `FunctionDeclaration` | no | `ctx, source, outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647491-647502](../../../../../reference/runtime/host-main.cjs#L647491-L647502) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439154-439165](../../../../../reference/runtime/sand-eval-runner.cjs#L439154-L439165) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647491

Calls written directly in this body: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Assignment or increment targets: `lifecycle2.status`.

SHA-256 of the source span: `fe23bf2c834890cca2d7d1544a379ff90e8f360035610000e867b00aa187fa7a`.

### evaluation:439154

Calls written directly in this body: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Assignment or increment targets: `lifecycle2.status`.

SHA-256 of the source span: `fe23bf2c834890cca2d7d1544a379ff90e8f360035610000e867b00aa187fa7a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
