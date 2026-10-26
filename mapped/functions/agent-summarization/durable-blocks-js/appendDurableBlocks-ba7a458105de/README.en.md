# `appendDurableBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/durable-blocks.js` · [Module README](../../../../modules/agent-summarization/durable-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620074-620076](../../../../../reference/runtime/host-main.cjs#L620074-L620076) | `FunctionDeclaration` | no | `summarizer, blocks` |
| [evaluation:304428-304430](../../../../../reference/runtime/sand-eval-runner.cjs#L304428-L304430) | `FunctionDeclaration` | no | `summarizer, blocks` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620074-620076](../../../../../reference/runtime/host-main.cjs#L620074-L620076) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304428-304430](../../../../../reference/runtime/sand-eval-runner.cjs#L304428-L304430) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620074

Calls written directly in this body: `.join`, `.map`, `selectBlockPrompts`.

SHA-256 of the source span: `ee9200fba98091d18e0e20c1380a3db486931ca794c982326b261b02ee524ecb`.

### evaluation:304428

Calls written directly in this body: `.join`, `.map`, `selectBlockPrompts`.

SHA-256 of the source span: `ee9200fba98091d18e0e20c1380a3db486931ca794c982326b261b02ee524ecb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
