# `emitSummaryLifecycleAbandoned`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-lifecycle.js` · [Module README](../../../../modules/agent-engine/summarization-lifecycle-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647526-647528](../../../../../reference/runtime/host-main.cjs#L647526-L647528) | `FunctionDeclaration` | no | `ctx, source, reason` |
| [evaluation:439189-439191](../../../../../reference/runtime/sand-eval-runner.cjs#L439189-L439191) | `FunctionDeclaration` | no | `ctx, source, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647526-647528](../../../../../reference/runtime/host-main.cjs#L647526-L647528) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:439189-439191](../../../../../reference/runtime/sand-eval-runner.cjs#L439189-L439191) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:647526

Calls written directly in this body: `emitSummaryLifecycleTerminal`.

SHA-256 of the source span: `954df29f1a55ac1cc3dd2c27a2e63a5db70bca1a2bc0d783994388d56b6e127d`.

### evaluation:439189

Calls written directly in this body: `emitSummaryLifecycleTerminal`.

SHA-256 of the source span: `954df29f1a55ac1cc3dd2c27a2e63a5db70bca1a2bc0d783994388d56b6e127d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
