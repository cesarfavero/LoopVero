# `renderTurnVerbose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617023-617025](../../../../../reference/runtime/host-main.cjs#L617023-L617025) | `FunctionDeclaration` | no | `turn, index` |
| [evaluation:285563-285565](../../../../../reference/runtime/sand-eval-runner.cjs#L285563-L285565) | `FunctionDeclaration` | no | `turn, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617023-617025](../../../../../reference/runtime/host-main.cjs#L617023-L617025) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285563-285565](../../../../../reference/runtime/sand-eval-runner.cjs#L285563-L285565) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617023

Calls written directly in this body: `renderTurnParts`.

SHA-256 of the source span: `a2b7a28908950ba940f152ca23dcf425b98d70dbc3dbad061e9fb8060cf0fa4e`.

### evaluation:285563

Calls written directly in this body: `renderTurnParts`.

SHA-256 of the source span: `a2b7a28908950ba940f152ca23dcf425b98d70dbc3dbad061e9fb8060cf0fa4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
