# `emitSummaryLifecycleDeferred`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-lifecycle.js` · [Module README](../../../../modules/agent-engine/summarization-lifecycle-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647503-647514](../../../../../reference/runtime/host-main.cjs#L647503-L647514) | `FunctionDeclaration` | no | `ctx, source, reason` |
| [evaluation:439166-439177](../../../../../reference/runtime/sand-eval-runner.cjs#L439166-L439177) | `FunctionDeclaration` | no | `ctx, source, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647503-647514](../../../../../reference/runtime/host-main.cjs#L647503-L647514) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439166-439177](../../../../../reference/runtime/sand-eval-runner.cjs#L439166-L439177) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647503

Calls written directly in this body: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `lifecycle2.emittedDeferrals.add`, `lifecycle2.emittedDeferrals.has`, `liveLifecycle`.

SHA-256 of the source span: `29c4f56157069eb8a08d1bf5c954cdddffabffc652438854dcc8244c56ea06c6`.

### evaluation:439166

Calls written directly in this body: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `lifecycle2.emittedDeferrals.add`, `lifecycle2.emittedDeferrals.has`, `liveLifecycle`.

SHA-256 of the source span: `29c4f56157069eb8a08d1bf5c954cdddffabffc652438854dcc8244c56ea06c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
