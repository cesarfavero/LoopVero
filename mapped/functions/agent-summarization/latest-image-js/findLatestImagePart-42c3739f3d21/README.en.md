# `findLatestImagePart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/latest-image.js` · [Module README](../../../../modules/agent-summarization/latest-image-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620412-620446](../../../../../reference/runtime/host-main.cjs#L620412-L620446) | `FunctionDeclaration` | no | `messages2` |
| [evaluation:304766-304800](../../../../../reference/runtime/sand-eval-runner.cjs#L304766-L304800) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620412-620446](../../../../../reference/runtime/host-main.cjs#L620412-L620446) | 7 | 4 | 0 | 3 | 0 | 0 |
| [evaluation:304766-304800](../../../../../reference/runtime/sand-eval-runner.cjs#L304766-L304800) | 7 | 4 | 0 | 3 | 0 | 0 |

### host:620412

Calls written directly in this body: `Array.isArray`.

Assignment or increment targets: `i`, `j2`, `k2`.

SHA-256 of the source span: `d56a6f426e75d2b9963095ca0757d36f9ec6fde5792d55c075797662b311d9fe`.

### evaluation:304766

Calls written directly in this body: `Array.isArray`.

Assignment or increment targets: `i`, `j2`, `k2`.

SHA-256 of the source span: `2dcb3978ce1ea1f1a1eedde064c630ee70194fc76591df6f3e62c4ad9bf81bf6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
