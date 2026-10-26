# `assistantTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616844-616858](../../../../../reference/runtime/host-main.cjs#L616844-L616858) | `FunctionDeclaration` | no | `content` |
| [evaluation:285384-285398](../../../../../reference/runtime/sand-eval-runner.cjs#L285384-L285398) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616844-616858](../../../../../reference/runtime/host-main.cjs#L616844-L616858) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:285384-285398](../../../../../reference/runtime/sand-eval-runner.cjs#L285384-L285398) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:616844

Calls written directly in this body: `toolArgs`, `toolCalls2.push`.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `93b88e468fb78236d5b29f51655902fc2d0ef15f867de3072eb5f9cc99251c30`.

### evaluation:285384

Calls written directly in this body: `toolArgs`, `toolCalls3.push`.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `064dca20c57848a313899791b86e11af18e69ded3ff18dd4e658ea506af4431c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
