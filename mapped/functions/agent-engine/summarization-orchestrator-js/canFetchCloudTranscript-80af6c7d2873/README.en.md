# `canFetchCloudTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649607-649609](../../../../../reference/runtime/host-main.cjs#L649607-L649609) | `FunctionDeclaration` | no | `config2, tools` |
| [evaluation:441260-441262](../../../../../reference/runtime/sand-eval-runner.cjs#L441260-L441262) | `FunctionDeclaration` | no | `config2, tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649607-649609](../../../../../reference/runtime/host-main.cjs#L649607-L649609) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:441260-441262](../../../../../reference/runtime/sand-eval-runner.cjs#L441260-L441262) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:649607

Calls written directly in this body: `hasCloudTranscriptFetchTool`.

SHA-256 of the source span: `6e19333a7f4b038f2238f59e9348cf4bab00006b30d3b6545e2519b8cd729c43`.

### evaluation:441260

Calls written directly in this body: `hasCloudTranscriptFetchTool`.

SHA-256 of the source span: `6e19333a7f4b038f2238f59e9348cf4bab00006b30d3b6545e2519b8cd729c43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
