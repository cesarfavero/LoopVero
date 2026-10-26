# `tailOverflowsContextWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621812-621814](../../../../../reference/runtime/host-main.cjs#L621812-L621814) | `FunctionDeclaration` | no | `tail, contextWindowTokens` |
| [evaluation:306166-306168](../../../../../reference/runtime/sand-eval-runner.cjs#L306166-L306168) | `FunctionDeclaration` | no | `tail, contextWindowTokens` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621812-621814](../../../../../reference/runtime/host-main.cjs#L621812-L621814) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:306166-306168](../../../../../reference/runtime/sand-eval-runner.cjs#L306166-L306168) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621812

Calls written directly in this body: `estimateTokenCount`.

SHA-256 of the source span: `0de2f038f26a20e83150d0af075286d2912928acf12b6daa070e4df4acddb991`.

### evaluation:306166

Calls written directly in this body: `estimateTokenCount`.

SHA-256 of the source span: `0de2f038f26a20e83150d0af075286d2912928acf12b6daa070e4df4acddb991`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
