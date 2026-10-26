# `RenderContext.normalizeWhitespace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629531-629538](../../../../../reference/runtime/host-main.cjs#L629531-L629538) | `method` | no | `text3` |
| [evaluation:318548-318555](../../../../../reference/runtime/sand-eval-runner.cjs#L318548-L318555) | `method` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629531-629538](../../../../../reference/runtime/host-main.cjs#L629531-L629538) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:318548-318555](../../../../../reference/runtime/sand-eval-runner.cjs#L318548-L318555) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:629531

Calls written directly in this body: `.trim`, `text3.charCodeAt`, `text3.replace`, `text3.slice`.

Assignment or increment targets: `newlineEnd`.

SHA-256 of the source span: `e79ac8e2d46e0be83124c7ff28c3d7a224371fef6a863adebf6d7871cbefc20d`.

### evaluation:318548

Calls written directly in this body: `.trim`, `text3.charCodeAt`, `text3.replace`, `text3.slice`.

Assignment or increment targets: `newlineEnd`.

SHA-256 of the source span: `e79ac8e2d46e0be83124c7ff28c3d7a224371fef6a863adebf6d7871cbefc20d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
