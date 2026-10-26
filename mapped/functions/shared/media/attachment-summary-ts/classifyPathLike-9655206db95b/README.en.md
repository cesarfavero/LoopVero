# `classifyPathLike`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `shared/media/attachment-summary.ts` · [Module README](../../../../../modules/shared/media/attachment-summary-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541882-541910](../../../../../../reference/runtime/host-main.cjs#L541882-L541910) | `FunctionDeclaration` | no | `source` |
| [evaluation:480898-480926](../../../../../../reference/runtime/sand-eval-runner.cjs#L480898-L480926) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541882-541910](../../../../../../reference/runtime/host-main.cjs#L541882-L541910) | 13 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:480898-480926](../../../../../../reference/runtime/sand-eval-runner.cjs#L480898-L480926) | 13 | 0 | 0 | 7 | 0 | 0 |

### host:541882

Calls written directly in this body: `ARCHIVE_EXTENSIONS.has`, `JSON_EXTENSIONS2.has`, `attachmentExtension`, `extensionSubject`, `getFilePreviewKind`.

SHA-256 of the source span: `8b87df92993a405e1577effb82c85fa3acc3052beb93f4518c0d8569b1b0975e`.

### evaluation:480898

Calls written directly in this body: `ARCHIVE_EXTENSIONS.has`, `JSON_EXTENSIONS2.has`, `attachmentExtension`, `extensionSubject`, `getFilePreviewKind`.

SHA-256 of the source span: `8b87df92993a405e1577effb82c85fa3acc3052beb93f4518c0d8569b1b0975e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
