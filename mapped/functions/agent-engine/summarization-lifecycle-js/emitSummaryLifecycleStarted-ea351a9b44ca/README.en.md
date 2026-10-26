# `emitSummaryLifecycleStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-lifecycle.js` · [Module README](../../../../modules/agent-engine/summarization-lifecycle-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647480-647490](../../../../../reference/runtime/host-main.cjs#L647480-L647490) | `FunctionDeclaration` | no | `ctx, source` |
| [evaluation:439143-439153](../../../../../reference/runtime/sand-eval-runner.cjs#L439143-L439153) | `FunctionDeclaration` | no | `ctx, source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647480-647490](../../../../../reference/runtime/host-main.cjs#L647480-L647490) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439143-439153](../../../../../reference/runtime/sand-eval-runner.cjs#L439143-L439153) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647480

Calls written directly in this body: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Assignment or increment targets: `lifecycle2.status`.

SHA-256 of the source span: `0a5852a19d61e9d924532ca4b67117cc4fd3da390a8d16e00747399f4a3587a9`.

### evaluation:439143

Calls written directly in this body: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Assignment or increment targets: `lifecycle2.status`.

SHA-256 of the source span: `0a5852a19d61e9d924532ca4b67117cc4fd3da390a8d16e00747399f4a3587a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
