# `isTextPreviewableName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/attachment-preview.ts` · [Module README](../../../../../modules/shared/media/attachment-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497178-497181](../../../../../../reference/runtime/host-main.cjs#L497178-L497181) | `FunctionDeclaration` | no | `nameOrPath` |
| [evaluation:480715-480718](../../../../../../reference/runtime/sand-eval-runner.cjs#L480715-L480718) | `FunctionDeclaration` | no | `nameOrPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497178-497181](../../../../../../reference/runtime/host-main.cjs#L497178-L497181) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480715-480718](../../../../../../reference/runtime/sand-eval-runner.cjs#L480715-L480718) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497178

Calls written directly in this body: `TEXT_PREVIEWABLE_EXTENSIONS.has`, `attachmentExtension`.

SHA-256 of the source span: `345f66589aa4c041f3f7ce16ad9369ec91a6568288ee700f1199fbd84babf0d6`.

### evaluation:480715

Calls written directly in this body: `TEXT_PREVIEWABLE_EXTENSIONS.has`, `attachmentExtension`.

SHA-256 of the source span: `345f66589aa4c041f3f7ce16ad9369ec91a6568288ee700f1199fbd84babf0d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
