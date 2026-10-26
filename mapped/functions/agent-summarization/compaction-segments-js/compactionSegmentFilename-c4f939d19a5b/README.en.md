# `compactionSegmentFilename`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616879-616881](../../../../../reference/runtime/host-main.cjs#L616879-L616881) | `FunctionDeclaration` | no | `index` |
| [evaluation:285419-285421](../../../../../reference/runtime/sand-eval-runner.cjs#L285419-L285421) | `FunctionDeclaration` | no | `index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616879-616881](../../../../../reference/runtime/host-main.cjs#L616879-L616881) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285419-285421](../../../../../reference/runtime/sand-eval-runner.cjs#L285419-L285421) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616879

Calls written directly in this body: `segmentLabel`.

SHA-256 of the source span: `8815d0428bcc86c2dbdcc60dbbe74ac4cc18043546aad8d96ef956b536395387`.

### evaluation:285419

Calls written directly in this body: `segmentLabel`.

SHA-256 of the source span: `8815d0428bcc86c2dbdcc60dbbe74ac4cc18043546aad8d96ef956b536395387`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
