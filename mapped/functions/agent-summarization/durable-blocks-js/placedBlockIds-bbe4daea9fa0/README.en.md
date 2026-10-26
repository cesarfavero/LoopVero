# `placedBlockIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/durable-blocks.js` · [Module README](../../../../modules/agent-summarization/durable-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620043-620046](../../../../../reference/runtime/host-main.cjs#L620043-L620046) | `FunctionDeclaration` | no | `summarizer` |
| [evaluation:304397-304400](../../../../../reference/runtime/sand-eval-runner.cjs#L304397-L304400) | `FunctionDeclaration` | no | `summarizer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620043-620046](../../../../../reference/runtime/host-main.cjs#L620043-L620046) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304397-304400](../../../../../reference/runtime/sand-eval-runner.cjs#L304397-L304400) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620043

Calls written directly in this body: `new Set`.

SHA-256 of the source span: `f84b629b7c670e3192104122e6d2e8659e9d862597444782942151e3ca808399`.

### evaluation:304397

Calls written directly in this body: `new Set`.

SHA-256 of the source span: `f84b629b7c670e3192104122e6d2e8659e9d862597444782942151e3ca808399`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
