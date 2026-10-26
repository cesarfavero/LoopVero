# `RenderContext.renderOrderedList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629340-629391](../../../../../reference/runtime/host-main.cjs#L629340-L629391) | `method` | no | `children, indent = 0, baseIndentWidth = 0` |
| [evaluation:318357-318408](../../../../../reference/runtime/sand-eval-runner.cjs#L318357-L318408) | `method` | no | `children, indent = 0, baseIndentWidth = 0` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629340-629391](../../../../../reference/runtime/host-main.cjs#L629340-L629391) | 10 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:318357-318408](../../../../../reference/runtime/sand-eval-runner.cjs#L318357-L318408) | 10 | 1 | 0 | 2 | 0 | 0 |

### host:629340

Calls written directly in this body: ` .repeat`, `.join`, `.map`, `Array.isArray`, `combinedNested.indexOf`, `combinedNested.substring`, `combinedNested.trimStart`, `firstLine.trimStart`, `items.join`, `items.push`, `nestedLists.join`, `rendered.trim`, `rest.split`, `textContent.trim`, `this.extractListItemContent`, `this.flattenListChildren`, `this.renderContentNode`.

Assignment or increment targets: `itemNumber`.

SHA-256 of the source span: `b713aba183e41590e361d801b0103d88e7bb287a1db033a00c04eed24aaaad6d`.

### evaluation:318357

Calls written directly in this body: ` .repeat`, `.join`, `.map`, `Array.isArray`, `combinedNested.indexOf`, `combinedNested.substring`, `combinedNested.trimStart`, `firstLine.trimStart`, `items.join`, `items.push`, `nestedLists.join`, `rendered.trim`, `rest.split`, `textContent2.trim`, `this.extractListItemContent`, `this.flattenListChildren`, `this.renderContentNode`.

Assignment or increment targets: `itemNumber`.

SHA-256 of the source span: `0886cb6ef045156ac3d671bfa54f8e762ef387bd8fac6c278a5f9a9719a1824a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
