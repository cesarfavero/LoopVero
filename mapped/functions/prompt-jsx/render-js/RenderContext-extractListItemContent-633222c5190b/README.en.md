# `RenderContext.extractListItemContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629447-629497](../../../../../reference/runtime/host-main.cjs#L629447-L629497) | `method` | no | `children, nestedIndent, baseIndentWidth = 0` |
| [evaluation:318464-318514](../../../../../reference/runtime/sand-eval-runner.cjs#L318464-L318514) | `method` | no | `children, nestedIndent, baseIndentWidth = 0` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629447-629497](../../../../../reference/runtime/host-main.cjs#L629447-L629497) | 12 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:318464-318514](../../../../../reference/runtime/sand-eval-runner.cjs#L318464-L318514) | 12 | 1 | 0 | 2 | 0 | 0 |

### host:629447

Calls written directly in this body: `Array.isArray`, `element.type`, `nestedLists.push`, `rendered.trim`, `textParts.join`, `textParts.push`, `this.flattenListChildren`, `this.renderContent`, `this.renderContentNode`, `this.renderOrderedList`, `this.renderUnorderedList`.

Assignment or increment targets: `element`.

SHA-256 of the source span: `a7111d45b6b36d51f2a493b8ce8d0be441151ded8c1d1e36991aea67a495dcd7`.

### evaluation:318464

Calls written directly in this body: `Array.isArray`, `element.type`, `nestedLists.push`, `rendered.trim`, `textParts.join`, `textParts.push`, `this.flattenListChildren`, `this.renderContent`, `this.renderContentNode`, `this.renderOrderedList`, `this.renderUnorderedList`.

Assignment or increment targets: `element`.

SHA-256 of the source span: `a7111d45b6b36d51f2a493b8ce8d0be441151ded8c1d1e36991aea67a495dcd7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
