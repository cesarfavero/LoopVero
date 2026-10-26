# `documentIdOfEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/documents/document-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776448-776452](../../../../../../../../reference/runtime/host-main.cjs#L776448-L776452) | `FunctionDeclaration` | no | `path33` |
| [evaluation:576099-576103](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576099-L576103) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776448-776452](../../../../../../../../reference/runtime/host-main.cjs#L776448-L776452) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576099-576103](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576099-L576103) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:776448

Calls written directly in this body: `DOCUMENT_ID_PATTERN.test`, `path33.replace`, `trimmed.lastIndexOf`, `trimmed.slice`.

SHA-256 of the source span: `ad4ed8af2c6256d5b2bda36c8dcd905def38afe22cc591dc9cd0e0ac9a3fb82a`.

### evaluation:576099

Calls written directly in this body: `DOCUMENT_ID_PATTERN.test`, `path33.replace`, `trimmed.lastIndexOf`, `trimmed.slice`.

SHA-256 of the source span: `ad4ed8af2c6256d5b2bda36c8dcd905def38afe22cc591dc9cd0e0ac9a3fb82a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
