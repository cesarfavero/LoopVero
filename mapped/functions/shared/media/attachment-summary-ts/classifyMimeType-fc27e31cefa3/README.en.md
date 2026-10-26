# `classifyMimeType`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `shared/media/attachment-summary.ts` · [Module README](../../../../../modules/shared/media/attachment-summary-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541855-541868](../../../../../../reference/runtime/host-main.cjs#L541855-L541868) | `FunctionDeclaration` | no | `rawMimeType` |
| [evaluation:480871-480884](../../../../../../reference/runtime/sand-eval-runner.cjs#L480871-L480884) | `FunctionDeclaration` | no | `rawMimeType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541855-541868](../../../../../../reference/runtime/host-main.cjs#L541855-L541868) | 10 | 0 | 0 | 11 | 0 | 0 |
| [evaluation:480871-480884](../../../../../../reference/runtime/sand-eval-runner.cjs#L480871-L480884) | 10 | 0 | 0 | 11 | 0 | 0 |

### host:541855

Calls written directly in this body: `.toLowerCase`, `.trim`, `ARCHIVE_MIME_TYPES.has`, `DOCUMENT_MIME_TYPES.has`, `TABLE_MIME_TYPES.has`, `mime2.endsWith`, `mime2.startsWith`, `rawMimeType.split`.

SHA-256 of the source span: `3f4cb60895ee38cebe5c335dca55e9d86dbc06a5f0516ade8f4877e98c86e650`.

### evaluation:480871

Calls written directly in this body: `.toLowerCase`, `.trim`, `ARCHIVE_MIME_TYPES.has`, `DOCUMENT_MIME_TYPES.has`, `TABLE_MIME_TYPES.has`, `mime2.endsWith`, `mime2.startsWith`, `rawMimeType.split`.

SHA-256 of the source span: `3f4cb60895ee38cebe5c335dca55e9d86dbc06a5f0516ade8f4877e98c86e650`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
