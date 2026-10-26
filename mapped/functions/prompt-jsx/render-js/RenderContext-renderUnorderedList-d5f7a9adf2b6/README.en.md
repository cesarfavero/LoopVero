# `RenderContext.renderUnorderedList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629395-629428](../../../../../reference/runtime/host-main.cjs#L629395-L629428) | `method` | no | `children, indent = 0, baseIndentWidth = 0` |
| [evaluation:318412-318445](../../../../../reference/runtime/sand-eval-runner.cjs#L318412-L318445) | `method` | no | `children, indent = 0, baseIndentWidth = 0` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629395-629428](../../../../../reference/runtime/host-main.cjs#L629395-L629428) | 8 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:318412-318445](../../../../../reference/runtime/sand-eval-runner.cjs#L318412-L318445) | 8 | 1 | 0 | 2 | 0 | 0 |

### host:629395

Calls written directly in this body: ` .repeat`, `Array.isArray`, `items.join`, `items.push`, `rendered.trim`, `textContent.trim`, `this.extractListItemContent`, `this.flattenListChildren`, `this.renderContentNode`.

SHA-256 of the source span: `701d4d41b55ed825b85d2d702dd222ff3d561a4f2336c20f5ccecf24cc099ed9`.

### evaluation:318412

Calls written directly in this body: ` .repeat`, `Array.isArray`, `items.join`, `items.push`, `rendered.trim`, `textContent2.trim`, `this.extractListItemContent`, `this.flattenListChildren`, `this.renderContentNode`.

SHA-256 of the source span: `0b57088e1a177b07670547e9b2581a12e81b16473852c276853af89c70f1a17a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
