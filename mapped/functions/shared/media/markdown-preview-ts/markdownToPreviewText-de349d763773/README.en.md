# `markdownToPreviewText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722123-722129](../../../../../../reference/runtime/host-main.cjs#L722123-L722129) | `FunctionDeclaration` | no | `input2` |
| [evaluation:540100-540106](../../../../../../reference/runtime/sand-eval-runner.cjs#L540100-L540106) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722123-722129](../../../../../../reference/runtime/host-main.cjs#L722123-L722129) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540100-540106](../../../../../../reference/runtime/sand-eval-runner.cjs#L540100-L540106) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722123

Calls written directly in this body: `.trim`, `PREVIEW_TRANSFORMS.reduce`, `flattenMathSpans`, `flattened.replace`, `stripInlineFormattingTags`.

SHA-256 of the source span: `dd31c97977d7f80c73c92eb39db80d8121b4670f207c18d43dfd7b477fcbff29`.

### evaluation:540100

Calls written directly in this body: `.trim`, `PREVIEW_TRANSFORMS.reduce`, `flattenMathSpans`, `flattened.replace`, `stripInlineFormattingTags`.

SHA-256 of the source span: `dd31c97977d7f80c73c92eb39db80d8121b4670f207c18d43dfd7b477fcbff29`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
