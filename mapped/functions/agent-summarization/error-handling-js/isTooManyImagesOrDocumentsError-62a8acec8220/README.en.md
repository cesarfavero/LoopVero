# `isTooManyImagesOrDocumentsError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620198-620200](../../../../../reference/runtime/host-main.cjs#L620198-L620200) | `FunctionDeclaration` | no | `error64` |
| [evaluation:304552-304554](../../../../../reference/runtime/sand-eval-runner.cjs#L304552-L304554) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620198-620200](../../../../../reference/runtime/host-main.cjs#L620198-L620200) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304552-304554](../../../../../reference/runtime/sand-eval-runner.cjs#L304552-L304554) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620198

Calls written directly in this body: `TOO_MANY_IMAGES_OR_DOCUMENTS_MESSAGE_MARKERS.some`.

SHA-256 of the source span: `402b194f4a77fe26214bab14bbf6e25fea4519c53aa812e25544fbc33ae02dd5`.

### evaluation:304552

Calls written directly in this body: `TOO_MANY_IMAGES_OR_DOCUMENTS_MESSAGE_MARKERS.some`.

SHA-256 of the source span: `c654a52202e7c8d15b8689df49939dcb436c1dfd9e91a3aaf62ca33736272b56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
