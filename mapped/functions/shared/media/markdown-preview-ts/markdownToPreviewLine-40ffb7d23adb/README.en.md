# `markdownToPreviewLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722147-722149](../../../../../../reference/runtime/host-main.cjs#L722147-L722149) | `FunctionDeclaration` | no | `markdown` |
| [evaluation:540124-540126](../../../../../../reference/runtime/sand-eval-runner.cjs#L540124-L540126) | `FunctionDeclaration` | no | `markdown` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722147-722149](../../../../../../reference/runtime/host-main.cjs#L722147-L722149) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540124-540126](../../../../../../reference/runtime/sand-eval-runner.cjs#L540124-L540126) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722147

Calls written directly in this body: `boundedPreviewSource`, `capPreviewLine`, `markdownToPreviewText`.

SHA-256 of the source span: `52b59846307dbe59da16ca14292447b16b86bf398557823181149e7c024acb3e`.

### evaluation:540124

Calls written directly in this body: `boundedPreviewSource`, `capPreviewLine`, `markdownToPreviewText`.

SHA-256 of the source span: `52b59846307dbe59da16ca14292447b16b86bf398557823181149e7c024acb3e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
