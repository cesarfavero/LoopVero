# `SummarizationHandler.isTokenLimitError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621798-621800](../../../../../reference/runtime/host-main.cjs#L621798-L621800) | `method` | no | `error64` |
| [evaluation:306152-306154](../../../../../reference/runtime/sand-eval-runner.cjs#L306152-L306154) | `method` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621798-621800](../../../../../reference/runtime/host-main.cjs#L621798-L621800) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:306152-306154](../../../../../reference/runtime/sand-eval-runner.cjs#L306152-L306154) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621798

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4d5dd9c13947fc9ecf834a67fc5101462aae9e56fce9bf9f1ab6d7ab57b55792`.

### evaluation:306152

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `76c4c0ca15a6b80f72eb958f7227a6c7896fb2214ddd75ce6c3298d1bed87ebb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
