# `RenderContext.renderIntrinsicElement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629031-629091](../../../../../reference/runtime/host-main.cjs#L629031-L629091) | `method` | no | `type2, props` |
| [evaluation:318048-318108](../../../../../reference/runtime/sand-eval-runner.cjs#L318048-L318108) | `method` | no | `type2, props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629031-629091](../../../../../reference/runtime/host-main.cjs#L629031-L629091) | 21 | 0 | 0 | 8 | 1 | 0 |
| [evaluation:318048-318108](../../../../../reference/runtime/sand-eval-runner.cjs#L318048-L318108) | 21 | 0 | 0 | 8 | 1 | 0 |

### host:629031

Calls written directly in this body: `new Error`, `this.components[computed]`, `this.renderContent`, `this.renderToMessages`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `e8848420ed2096bbe04f034bc047c65ce8ca7026f34c52f0e9eec3ce17fc0b5c`.

### evaluation:318048

Calls written directly in this body: `new Error`, `this.components[computed]`, `this.renderContent`, `this.renderToMessages`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `e8848420ed2096bbe04f034bc047c65ce8ca7026f34c52f0e9eec3ce17fc0b5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
