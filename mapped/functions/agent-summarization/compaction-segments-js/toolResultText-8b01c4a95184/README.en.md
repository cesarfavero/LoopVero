# `toolResultText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616870-616875](../../../../../reference/runtime/host-main.cjs#L616870-L616875) | `FunctionDeclaration` | no | `result` |
| [evaluation:285410-285415](../../../../../reference/runtime/sand-eval-runner.cjs#L285410-L285415) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616870-616875](../../../../../reference/runtime/host-main.cjs#L616870-L616875) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:285410-285415](../../../../../reference/runtime/sand-eval-runner.cjs#L285410-L285415) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:616870

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `6e2dd633d3a32aebbbd27256e1dde2c6bd37e7c366518d184f9277d4e54e4a7b`.

### evaluation:285410

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `6e2dd633d3a32aebbbd27256e1dde2c6bd37e7c366518d184f9277d4e54e4a7b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
