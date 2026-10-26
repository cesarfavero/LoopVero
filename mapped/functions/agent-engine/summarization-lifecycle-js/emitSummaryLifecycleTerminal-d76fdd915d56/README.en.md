# `emitSummaryLifecycleTerminal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-lifecycle.js` · [Module README](../../../../modules/agent-engine/summarization-lifecycle-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647515-647525](../../../../../reference/runtime/host-main.cjs#L647515-L647525) | `FunctionDeclaration` | no | `ctx, source, event` |
| [evaluation:439178-439188](../../../../../reference/runtime/sand-eval-runner.cjs#L439178-L439188) | `FunctionDeclaration` | no | `ctx, source, event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647515-647525](../../../../../reference/runtime/host-main.cjs#L647515-L647525) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439178-439188](../../../../../reference/runtime/sand-eval-runner.cjs#L439178-L439188) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647515

Calls written directly in this body: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Assignment or increment targets: `lifecycle2.status`.

SHA-256 of the source span: `827c7c8c67493437d3807d68e13ed713efa052ccd88ba7e757885883d7844d55`.

### evaluation:439178

Calls written directly in this body: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Assignment or increment targets: `lifecycle2.status`.

SHA-256 of the source span: `827c7c8c67493437d3807d68e13ed713efa052ccd88ba7e757885883d7844d55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
