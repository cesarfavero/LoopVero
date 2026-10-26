# `emitSummaryLifecyclePersisted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-lifecycle.js` · [Module README](../../../../modules/agent-engine/summarization-lifecycle-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647529-647531](../../../../../reference/runtime/host-main.cjs#L647529-L647531) | `FunctionDeclaration` | no | `ctx, source` |
| [evaluation:439192-439194](../../../../../reference/runtime/sand-eval-runner.cjs#L439192-L439194) | `FunctionDeclaration` | no | `ctx, source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647529-647531](../../../../../reference/runtime/host-main.cjs#L647529-L647531) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:439192-439194](../../../../../reference/runtime/sand-eval-runner.cjs#L439192-L439194) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:647529

Calls written directly in this body: `emitSummaryLifecycleTerminal`.

SHA-256 of the source span: `988847e9f94b09bd61faa0c6dc30d39fa42902d4dce7290271ae8dd47c1c43e5`.

### evaluation:439192

Calls written directly in this body: `emitSummaryLifecycleTerminal`.

SHA-256 of the source span: `988847e9f94b09bd61faa0c6dc30d39fa42902d4dce7290271ae8dd47c1c43e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
