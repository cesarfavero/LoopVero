# `userText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616829-616843](../../../../../reference/runtime/host-main.cjs#L616829-L616843) | `FunctionDeclaration` | no | `content` |
| [evaluation:285369-285383](../../../../../reference/runtime/sand-eval-runner.cjs#L285369-L285383) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616829-616843](../../../../../reference/runtime/host-main.cjs#L616829-L616843) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:285369-285383](../../../../../reference/runtime/sand-eval-runner.cjs#L285369-L285383) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:616829

Calls written directly in this body: `.join`, `content.map`.

SHA-256 of the source span: `1650d7dfa46bf8010654c894a067a2a40f71fa554af26968ae26ff44ce5d3881`.

### evaluation:285369

Calls written directly in this body: `.join`, `content.map`.

SHA-256 of the source span: `1650d7dfa46bf8010654c894a067a2a40f71fa554af26968ae26ff44ce5d3881`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
