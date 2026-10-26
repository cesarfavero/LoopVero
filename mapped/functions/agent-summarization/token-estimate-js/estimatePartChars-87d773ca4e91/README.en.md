# `estimatePartChars`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/token-estimate.js` · [Module README](../../../../modules/agent-summarization/token-estimate-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620637-620656](../../../../../reference/runtime/host-main.cjs#L620637-L620656) | `FunctionDeclaration` | no | `part` |
| [evaluation:304991-305010](../../../../../reference/runtime/sand-eval-runner.cjs#L304991-L305010) | `FunctionDeclaration` | no | `part` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620637-620656](../../../../../reference/runtime/host-main.cjs#L620637-L620656) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:304991-305010](../../../../../reference/runtime/sand-eval-runner.cjs#L304991-L305010) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:620637

Calls written directly in this body: `safeLength`.

SHA-256 of the source span: `b04ea159875dc36582fee1be5ea6e9ed81f630116cc8f037b4063ecff04cfea8`.

### evaluation:304991

Calls written directly in this body: `safeLength`.

SHA-256 of the source span: `b04ea159875dc36582fee1be5ea6e9ed81f630116cc8f037b4063ecff04cfea8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
