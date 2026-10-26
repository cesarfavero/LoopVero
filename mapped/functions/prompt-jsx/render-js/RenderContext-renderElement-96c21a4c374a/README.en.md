# `RenderContext.renderElement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629018-629027](../../../../../reference/runtime/host-main.cjs#L629018-L629027) | `method` | no | `element` |
| [evaluation:318035-318044](../../../../../reference/runtime/sand-eval-runner.cjs#L318035-L318044) | `method` | no | `element` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629018-629027](../../../../../reference/runtime/host-main.cjs#L629018-L629027) | 2 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:318035-318044](../../../../../reference/runtime/sand-eval-runner.cjs#L318035-L318044) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:629018

Calls written directly in this body: `element.type`, `new Error`, `this.renderIntrinsicElement`, `this.renderToMessages`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `47dfe33b5fabc178adf3d12f2ca9ea214ae1489b4486190a1ab24be3bafe60c9`.

### evaluation:318035

Calls written directly in this body: `element.type`, `new Error`, `this.renderIntrinsicElement`, `this.renderToMessages`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `47dfe33b5fabc178adf3d12f2ca9ea214ae1489b4486190a1ab24be3bafe60c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
