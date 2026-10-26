# `toUserMessageImagePart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/latest-image.js` · [Module README](../../../../modules/agent-summarization/latest-image-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620397-620411](../../../../../reference/runtime/host-main.cjs#L620397-L620411) | `FunctionDeclaration` | no | `part` |
| [evaluation:304751-304765](../../../../../reference/runtime/sand-eval-runner.cjs#L304751-L304765) | `FunctionDeclaration` | no | `part` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620397-620411](../../../../../reference/runtime/host-main.cjs#L620397-L620411) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304751-304765](../../../../../reference/runtime/sand-eval-runner.cjs#L304751-L304765) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:620397

Calls written directly in this body: `DATA_OR_REMOTE_URL_PREFIX.test`, `resolveImageMimeType`.

SHA-256 of the source span: `8c7f266c87d67f13dd10c40aa52aca2671426591058ba4a8b0c997b9c62a1ddb`.

### evaluation:304751

Calls written directly in this body: `DATA_OR_REMOTE_URL_PREFIX.test`, `resolveImageMimeType`.

SHA-256 of the source span: `8c7f266c87d67f13dd10c40aa52aca2671426591058ba4a8b0c997b9c62a1ddb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
