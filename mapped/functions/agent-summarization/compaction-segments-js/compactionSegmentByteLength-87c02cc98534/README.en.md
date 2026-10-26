# `compactionSegmentByteLength`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617141-617143](../../../../../reference/runtime/host-main.cjs#L617141-L617143) | `FunctionDeclaration` | no | `markdown` |
| [evaluation:285681-285683](../../../../../reference/runtime/sand-eval-runner.cjs#L285681-L285683) | `FunctionDeclaration` | no | `markdown` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617141-617143](../../../../../reference/runtime/host-main.cjs#L617141-L617143) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285681-285683](../../../../../reference/runtime/sand-eval-runner.cjs#L285681-L285683) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617141

Calls written directly in this body: `utf8ByteLength`.

SHA-256 of the source span: `bfc35a83bb88eccbcd5f6d360c2fef5340f2ed4ef6cb287a34f60fd4132ad59c`.

### evaluation:285681

Calls written directly in this body: `utf8ByteLength`.

SHA-256 of the source span: `bfc35a83bb88eccbcd5f6d360c2fef5340f2ed4ef6cb287a34f60fd4132ad59c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
