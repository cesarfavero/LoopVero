# `documentIdFromTitle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/documents/document-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776413-776417](../../../../../../../../reference/runtime/host-main.cjs#L776413-L776417) | `FunctionDeclaration` | no | `title` |
| [evaluation:576064-576068](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576064-L576068) | `FunctionDeclaration` | no | `title` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776413-776417](../../../../../../../../reference/runtime/host-main.cjs#L776413-L776417) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576064-576068](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576064-L576068) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:776413

Calls written directly in this body: `.normalize`, `.replace`, `.slice`, `padded.slice`, `title.toLowerCase`.

SHA-256 of the source span: `5cb96c5a2d842e7e252710fac2933cbd3bb6cfceaf10b571c0b9832e7e5aebff`.

### evaluation:576064

Calls written directly in this body: `.normalize`, `.replace`, `.slice`, `padded.slice`, `title.toLowerCase`.

SHA-256 of the source span: `5cb96c5a2d842e7e252710fac2933cbd3bb6cfceaf10b571c0b9832e7e5aebff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
