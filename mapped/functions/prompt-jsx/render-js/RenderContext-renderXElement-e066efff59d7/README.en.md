# `RenderContext.renderXElement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629295-629312](../../../../../reference/runtime/host-main.cjs#L629295-L629312) | `method` | no | `props` |
| [evaluation:318312-318329](../../../../../reference/runtime/sand-eval-runner.cjs#L318312-L318329) | `method` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629295-629312](../../../../../reference/runtime/host-main.cjs#L629295-L629312) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:318312-318329](../../../../../reference/runtime/sand-eval-runner.cjs#L318312-L318329) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:629295

Calls written directly in this body: `.filter`, `.join`, `.map`, `Object.keys`, `content.trim`, `this.renderContent`.

SHA-256 of the source span: `63f2b73153d9672bf591074a86e05229deaaa7a9d0ec64b96778edc3616d8c55`.

### evaluation:318312

Calls written directly in this body: `.filter`, `.join`, `.map`, `Object.keys`, `content.trim`, `this.renderContent`.

SHA-256 of the source span: `d1b5d1726c658fc3ef43945841a35b40e4d43d5ad4968b08691e3bcd9b586676`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
