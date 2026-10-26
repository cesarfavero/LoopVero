# `RenderContext.renderParagraphAwareContent/flushCurrentParagraph`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629176-629192](../../../../../reference/runtime/host-main.cjs#L629176-L629192) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:318193-318209](../../../../../reference/runtime/sand-eval-runner.cjs#L318193-L318209) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629176-629192](../../../../../reference/runtime/host-main.cjs#L629176-L629192) | 3 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:318193-318209](../../../../../reference/runtime/sand-eval-runner.cjs#L318193-L318209) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:629176

Calls written directly in this body: `content.includes`, `content.trim`, `currentParagraph.join`, `paragraphs.push`, `this.normalizeWhitespace`.

Assignment or increment targets: `currentParagraph`.

SHA-256 of the source span: `f75ee1c6cdcee9c4ee76f1a1b430ec6f11ea799420d7dc0c3cf617e054714a97`.

### evaluation:318193

Calls written directly in this body: `content.includes`, `content.trim`, `currentParagraph.join`, `paragraphs.push`, `this.normalizeWhitespace`.

Assignment or increment targets: `currentParagraph`.

SHA-256 of the source span: `f75ee1c6cdcee9c4ee76f1a1b430ec6f11ea799420d7dc0c3cf617e054714a97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
