# `parseSummarizerModelLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620952-620962](../../../../../reference/runtime/host-main.cjs#L620952-L620962) | `FunctionDeclaration` | no | `modelId` |
| [evaluation:305306-305316](../../../../../reference/runtime/sand-eval-runner.cjs#L305306-L305316) | `FunctionDeclaration` | no | `modelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620952-620962](../../../../../reference/runtime/host-main.cjs#L620952-L620962) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:305306-305316](../../../../../reference/runtime/sand-eval-runner.cjs#L305306-L305316) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:620952

Calls written directly in this body: `modelId.match`.

SHA-256 of the source span: `d530b2ed775bfa32482bb6a1eb2ab57652111bed97e6ba6c05332b46152a7211`.

### evaluation:305306

Calls written directly in this body: `modelId.match`.

SHA-256 of the source span: `d530b2ed775bfa32482bb6a1eb2ab57652111bed97e6ba6c05332b46152a7211`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
