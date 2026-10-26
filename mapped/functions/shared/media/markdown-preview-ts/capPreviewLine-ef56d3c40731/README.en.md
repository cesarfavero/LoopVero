# `capPreviewLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722143-722146](../../../../../../reference/runtime/host-main.cjs#L722143-L722146) | `FunctionDeclaration` | no | `line, maxChars = PREVIEW_LINE_MAX_CHARS` |
| [evaluation:540120-540123](../../../../../../reference/runtime/sand-eval-runner.cjs#L540120-L540123) | `FunctionDeclaration` | no | `line, maxChars = PREVIEW_LINE_MAX_CHARS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722143-722146](../../../../../../reference/runtime/host-main.cjs#L722143-L722146) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540120-540123](../../../../../../reference/runtime/sand-eval-runner.cjs#L540120-L540123) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:722143

Calls written directly in this body: `.trimEnd`, `boundedPrefix`.

SHA-256 of the source span: `7098e7b510556ef0d06f16178339fe510ddbcc17548c25fb477e40bc3d0c0f12`.

### evaluation:540120

Calls written directly in this body: `.trimEnd`, `boundedPrefix`.

SHA-256 of the source span: `7098e7b510556ef0d06f16178339fe510ddbcc17548c25fb477e40bc3d0c0f12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
