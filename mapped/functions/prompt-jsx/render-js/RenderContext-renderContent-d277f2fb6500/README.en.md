# `RenderContext.renderContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629095-629106](../../../../../reference/runtime/host-main.cjs#L629095-L629106) | `method` | no | `children` |
| [evaluation:318112-318123](../../../../../reference/runtime/sand-eval-runner.cjs#L318112-L318123) | `method` | no | `children` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629095-629106](../../../../../reference/runtime/host-main.cjs#L629095-L629106) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:318112-318123](../../../../../reference/runtime/sand-eval-runner.cjs#L318112-L318123) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:629095

Calls written directly in this body: `Array.isArray`, `String`, `this.renderContentNode`, `this.renderParagraphAwareContent`.

SHA-256 of the source span: `e41a3e1baf05cdad6090858af8bc6e70223224add4479a60c684c57bbe0bfba0`.

### evaluation:318112

Calls written directly in this body: `Array.isArray`, `String`, `this.renderContentNode`, `this.renderParagraphAwareContent`.

SHA-256 of the source span: `e41a3e1baf05cdad6090858af8bc6e70223224add4479a60c684c57bbe0bfba0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
