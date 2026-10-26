# `renderTurnSignature`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617059-617082](../../../../../reference/runtime/host-main.cjs#L617059-L617082) | `FunctionDeclaration` | no | `turn, index` |
| [evaluation:285599-285622](../../../../../reference/runtime/sand-eval-runner.cjs#L285599-L285622) | `FunctionDeclaration` | no | `turn, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617059-617082](../../../../../reference/runtime/host-main.cjs#L617059-L617082) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:285599-285622](../../../../../reference/runtime/sand-eval-runner.cjs#L285599-L285622) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:617059

Calls written directly in this body: `signatures.join`, `turn.toolCalls.map`.

SHA-256 of the source span: `4106e8e9be12c86cd16fdc41350b2270a3eb6a578167858218a7e15b19157599`.

### evaluation:285599

Calls written directly in this body: `signatures.join`, `turn.toolCalls.map`.

SHA-256 of the source span: `4106e8e9be12c86cd16fdc41350b2270a3eb6a578167858218a7e15b19157599`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
