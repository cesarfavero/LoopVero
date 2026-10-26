# `RenderContext.renderContentNode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629110-629168](../../../../../reference/runtime/host-main.cjs#L629110-L629168) | `method` | no | `node2` |
| [evaluation:318127-318185](../../../../../reference/runtime/sand-eval-runner.cjs#L318127-L318185) | `method` | no | `node2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629110-629168](../../../../../reference/runtime/host-main.cjs#L629110-L629168) | 15 | 1 | 0 | 15 | 0 | 0 |
| [evaluation:318127-318185](../../../../../reference/runtime/sand-eval-runner.cjs#L318127-L318185) | 15 | 1 | 0 | 15 | 0 | 0 |

### host:629110

Calls written directly in this body: `.join`, `Array.isArray`, `String`, `element.type`, `flattened.push`, `messages2.map`, `this.formatHeading`, `this.renderContent`, `this.renderOrderedList`, `this.renderParagraphAwareContent`, `this.renderPreContent`, `this.renderSection`, `this.renderToMessages`, `this.renderUnorderedList`, `this.renderXElement`.

SHA-256 of the source span: `f0d1b86ab82ab24aedb2ae6eb43eacbf02d6c787d994d912e7bbdec5d1a038a2`.

### evaluation:318127

Calls written directly in this body: `.join`, `Array.isArray`, `String`, `element.type`, `flattened.push`, `messages.map`, `this.formatHeading`, `this.renderContent`, `this.renderOrderedList`, `this.renderParagraphAwareContent`, `this.renderPreContent`, `this.renderSection`, `this.renderToMessages`, `this.renderUnorderedList`, `this.renderXElement`.

SHA-256 of the source span: `83fd2ef9ab650ef246250346a119918ee4880614483f0a5de54ffb0bea5390d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
