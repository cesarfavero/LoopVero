# `argValuePlain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616923-616925](../../../../../reference/runtime/host-main.cjs#L616923-L616925) | `FunctionDeclaration` | no | `value` |
| [evaluation:285463-285465](../../../../../reference/runtime/sand-eval-runner.cjs#L285463-L285465) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616923-616925](../../../../../reference/runtime/host-main.cjs#L616923-L616925) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285463-285465](../../../../../reference/runtime/sand-eval-runner.cjs#L285463-L285465) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:616923

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `e74fc72f6a498d92baff085075b5e648700c9aee60e5921ac84c1e5e257c4a1b`.

### evaluation:285463

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `e74fc72f6a498d92baff085075b5e648700c9aee60e5921ac84c1e5e257c4a1b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
