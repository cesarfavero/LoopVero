# `RenderContext.renderParagraphAwareContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629172-629245](../../../../../reference/runtime/host-main.cjs#L629172-L629245) | `method` | no | `nodes` |
| [evaluation:318189-318262](../../../../../reference/runtime/sand-eval-runner.cjs#L318189-L318262) | `method` | no | `nodes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629172-629245](../../../../../reference/runtime/host-main.cjs#L629172-L629245) | 10 | 4 | 0 | 2 | 0 | 0 |
| [evaluation:318189-318262](../../../../../reference/runtime/sand-eval-runner.cjs#L318189-L318262) | 10 | 4 | 0 | 2 | 0 | 0 |

### host:629172

Calls written directly in this body: `Array.isArray`, `content.trim`, `curr.content.trim`, `currentParagraph.push`, `flushCurrentParagraph`, `paragraphs.push`, `prev.content.endsWith`, `prev.content.trim`, `result.charCodeAt`, `result.slice`, `this.flattenNodes`, `this.renderContentNode`.

Assignment or increment targets: `end`, `i`, `result`, `start`.

SHA-256 of the source span: `0c13797481d2ea8968e3bd8e7700ef9bd2424ddc52240fee68d745af6571ae5e`.

### evaluation:318189

Calls written directly in this body: `Array.isArray`, `content.trim`, `curr.content.trim`, `currentParagraph.push`, `flushCurrentParagraph`, `paragraphs.push`, `prev.content.endsWith`, `prev.content.trim`, `result.charCodeAt`, `result.slice`, `this.flattenNodes`, `this.renderContentNode`.

Assignment or increment targets: `end`, `i`, `result`, `start`.

SHA-256 of the source span: `0c13797481d2ea8968e3bd8e7700ef9bd2424ddc52240fee68d745af6571ae5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
