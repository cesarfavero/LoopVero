# `parseCompactionSegmentIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616882-616888](../../../../../reference/runtime/host-main.cjs#L616882-L616888) | `FunctionDeclaration` | no | `filename` |
| [evaluation:285422-285428](../../../../../reference/runtime/sand-eval-runner.cjs#L285422-L285428) | `FunctionDeclaration` | no | `filename` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616882-616888](../../../../../reference/runtime/host-main.cjs#L616882-L616888) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:285422-285428](../../../../../reference/runtime/sand-eval-runner.cjs#L285422-L285428) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:616882

Calls written directly in this body: `/^\+?\d+$/.test`, `Number`, `filename.endsWith`, `filename.slice`, `filename.startsWith`.

SHA-256 of the source span: `b06398ac93da2e5fbf595d72b649a25c284106ef2d1744e63b2c8e3af9d29ba5`.

### evaluation:285422

Calls written directly in this body: `/^\+?\d+$/.test`, `Number`, `filename.endsWith`, `filename.slice`, `filename.startsWith`.

SHA-256 of the source span: `b06398ac93da2e5fbf595d72b649a25c284106ef2d1744e63b2c8e3af9d29ba5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
