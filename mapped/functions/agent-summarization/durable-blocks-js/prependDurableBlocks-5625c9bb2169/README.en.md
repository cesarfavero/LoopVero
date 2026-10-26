# `prependDurableBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/durable-blocks.js` · [Module README](../../../../modules/agent-summarization/durable-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620077-620079](../../../../../reference/runtime/host-main.cjs#L620077-L620079) | `FunctionDeclaration` | no | `summarizer, blocks` |
| [evaluation:304431-304433](../../../../../reference/runtime/sand-eval-runner.cjs#L304431-L304433) | `FunctionDeclaration` | no | `summarizer, blocks` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620077-620079](../../../../../reference/runtime/host-main.cjs#L620077-L620079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304431-304433](../../../../../reference/runtime/sand-eval-runner.cjs#L304431-L304433) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620077

Calls written directly in this body: `.join`, `.map`, `selectBlockPrompts`.

SHA-256 of the source span: `e0207e010ed9bc0baafba962ed95c7446abb62e77e4894df0d1005fad127f19e`.

### evaluation:304431

Calls written directly in this body: `.join`, `.map`, `selectBlockPrompts`.

SHA-256 of the source span: `e0207e010ed9bc0baafba962ed95c7446abb62e77e4894df0d1005fad127f19e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
