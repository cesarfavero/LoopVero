# `withThousands`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616917-616919](../../../../../reference/runtime/host-main.cjs#L616917-L616919) | `FunctionDeclaration` | no | `n` |
| [evaluation:285457-285459](../../../../../reference/runtime/sand-eval-runner.cjs#L285457-L285459) | `FunctionDeclaration` | no | `n` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616917-616919](../../../../../reference/runtime/host-main.cjs#L616917-L616919) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285457-285459](../../../../../reference/runtime/sand-eval-runner.cjs#L285457-L285459) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616917

Calls written directly in this body: `.replace`, `String`.

SHA-256 of the source span: `31f37c24ee63a3061de08aef520ae21426f65b7b3b7140b4484b3fd9e78ce92d`.

### evaluation:285457

Calls written directly in this body: `.replace`, `String`.

SHA-256 of the source span: `31f37c24ee63a3061de08aef520ae21426f65b7b3b7140b4484b3fd9e78ce92d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
