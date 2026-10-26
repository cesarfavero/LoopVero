# `getFilePreviewKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/file-preview-kind.ts` · [Module README](../../../../../modules/shared/media/file-preview-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497210-497224](../../../../../../reference/runtime/host-main.cjs#L497210-L497224) | `FunctionDeclaration` | no | `nameOrPath` |
| [evaluation:480818-480832](../../../../../../reference/runtime/sand-eval-runner.cjs#L480818-L480832) | `FunctionDeclaration` | no | `nameOrPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497210-497224](../../../../../../reference/runtime/host-main.cjs#L497210-L497224) | 11 | 0 | 0 | 12 | 0 | 0 |
| [evaluation:480818-480832](../../../../../../reference/runtime/sand-eval-runner.cjs#L480818-L480832) | 11 | 0 | 0 | 12 | 0 | 0 |

### host:497210

Calls written directly in this body: `AUDIO_EXTENSIONS.has`, `HTML_EXTENSIONS.has`, `IMAGE_EXTENSIONS.has`, `JSON_EXTENSIONS.has`, `MARKDOWN_EXTENSIONS.has`, `TABLE_EXTENSIONS.has`, `VIDEO_EXTENSIONS.has`, `attachmentExtension`, `isTextPreviewableName`.

SHA-256 of the source span: `c6edce51a9e24bcdeaa6352f686adbdcdad5d70a34433ad99f7878edd771cad6`.

### evaluation:480818

Calls written directly in this body: `AUDIO_EXTENSIONS.has`, `HTML_EXTENSIONS.has`, `IMAGE_EXTENSIONS.has`, `JSON_EXTENSIONS.has`, `MARKDOWN_EXTENSIONS.has`, `TABLE_EXTENSIONS.has`, `VIDEO_EXTENSIONS.has`, `attachmentExtension`, `isTextPreviewableName`.

SHA-256 of the source span: `c6edce51a9e24bcdeaa6352f686adbdcdad5d70a34433ad99f7878edd771cad6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
