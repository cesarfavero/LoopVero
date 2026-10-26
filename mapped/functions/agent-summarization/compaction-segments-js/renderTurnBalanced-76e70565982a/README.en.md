# `renderTurnBalanced`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617026-617028](../../../../../reference/runtime/host-main.cjs#L617026-L617028) | `FunctionDeclaration` | no | `turn, index` |
| [evaluation:285566-285568](../../../../../reference/runtime/sand-eval-runner.cjs#L285566-L285568) | `FunctionDeclaration` | no | `turn, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617026-617028](../../../../../reference/runtime/host-main.cjs#L617026-L617028) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285566-285568](../../../../../reference/runtime/sand-eval-runner.cjs#L285566-L285568) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617026

Calls written directly in this body: `renderTurnParts`.

SHA-256 of the source span: `a0e269d463e06e3b91151ee6266df62c4c84c19ff17661661e54a486c90db68f`.

### evaluation:285566

Calls written directly in this body: `renderTurnParts`.

SHA-256 of the source span: `a0e269d463e06e3b91151ee6266df62c4c84c19ff17661661e54a486c90db68f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
