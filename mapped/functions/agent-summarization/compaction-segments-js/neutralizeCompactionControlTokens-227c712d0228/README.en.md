# `neutralizeCompactionControlTokens`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617240-617242](../../../../../reference/runtime/host-main.cjs#L617240-L617242) | `FunctionDeclaration` | no | `text3` |
| [evaluation:285780-285782](../../../../../reference/runtime/sand-eval-runner.cjs#L285780-L285782) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617240-617242](../../../../../reference/runtime/host-main.cjs#L617240-L617242) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285780-285782](../../../../../reference/runtime/sand-eval-runner.cjs#L285780-L285782) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617240

Calls written directly in this body: `.replaceAll`, `text3.replaceAll`.

SHA-256 of the source span: `09cf1e6fc9525ce1a050985592fd025ea2e15384d903daa815e15fb1e0eaa6b6`.

### evaluation:285780

Calls written directly in this body: `.replaceAll`, `text3.replaceAll`.

SHA-256 of the source span: `09cf1e6fc9525ce1a050985592fd025ea2e15384d903daa815e15fb1e0eaa6b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
