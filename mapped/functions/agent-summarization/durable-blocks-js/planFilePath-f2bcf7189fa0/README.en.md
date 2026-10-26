# `planFilePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/durable-blocks.js` · [Module README](../../../../modules/agent-summarization/durable-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:619952-619956](../../../../../reference/runtime/host-main.cjs#L619952-L619956) | `FunctionDeclaration` | no | `plan` |
| [evaluation:304306-304310](../../../../../reference/runtime/sand-eval-runner.cjs#L304306-L304310) | `FunctionDeclaration` | no | `plan` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619952-619956](../../../../../reference/runtime/host-main.cjs#L619952-L619956) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304306-304310](../../../../../reference/runtime/sand-eval-runner.cjs#L304306-L304310) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:619952

Calls written directly in this body: `planName.endsWith`.

SHA-256 of the source span: `810324da626300e051b6da69b55dc3c552d778f21cb7ef334c85cf03096d66da`.

### evaluation:304306

Calls written directly in this body: `planName.endsWith`.

SHA-256 of the source span: `810324da626300e051b6da69b55dc3c552d778f21cb7ef334c85cf03096d66da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
