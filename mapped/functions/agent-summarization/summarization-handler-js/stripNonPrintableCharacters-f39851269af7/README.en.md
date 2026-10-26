# `stripNonPrintableCharacters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620941-620943](../../../../../reference/runtime/host-main.cjs#L620941-L620943) | `FunctionDeclaration` | no | `input2` |
| [evaluation:305295-305297](../../../../../reference/runtime/sand-eval-runner.cjs#L305295-L305297) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620941-620943](../../../../../reference/runtime/host-main.cjs#L620941-L620943) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305295-305297](../../../../../reference/runtime/sand-eval-runner.cjs#L305295-L305297) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620941

Calls written directly in this body: `input2.replace`.

SHA-256 of the source span: `5cf6e553116f5a78f9da5ad4ff7aeede1dff0c51b2c878a3ad679c99630bc25e`.

### evaluation:305295

Calls written directly in this body: `input2.replace`.

SHA-256 of the source span: `5cf6e553116f5a78f9da5ad4ff7aeede1dff0c51b2c878a3ad679c99630bc25e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
