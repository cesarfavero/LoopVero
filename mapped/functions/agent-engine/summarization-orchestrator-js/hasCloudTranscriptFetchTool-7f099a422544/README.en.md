# `hasCloudTranscriptFetchTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649604-649606](../../../../../reference/runtime/host-main.cjs#L649604-L649606) | `FunctionDeclaration` | no | `tools` |
| [evaluation:441257-441259](../../../../../reference/runtime/sand-eval-runner.cjs#L441257-L441259) | `FunctionDeclaration` | no | `tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649604-649606](../../../../../reference/runtime/host-main.cjs#L649604-L649606) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:441257-441259](../../../../../reference/runtime/sand-eval-runner.cjs#L441257-L441259) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:649604

Calls written directly in this body: `tools.some`.

SHA-256 of the source span: `10b3bb14ea31d8f32dca2e0932b1b34ae107d6925c67e00c1e3f3039a2a23643`.

### evaluation:441257

Calls written directly in this body: `tools.some`.

SHA-256 of the source span: `10b3bb14ea31d8f32dca2e0932b1b34ae107d6925c67e00c1e3f3039a2a23643`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
