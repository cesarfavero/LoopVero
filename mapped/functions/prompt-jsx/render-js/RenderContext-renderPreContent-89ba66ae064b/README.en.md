# `RenderContext.renderPreContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629501-629523](../../../../../reference/runtime/host-main.cjs#L629501-L629523) | `method` | no | `children` |
| [evaluation:318518-318540](../../../../../reference/runtime/sand-eval-runner.cjs#L318518-L318540) | `method` | no | `children` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629501-629523](../../../../../reference/runtime/host-main.cjs#L629501-L629523) | 6 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:318518-318540](../../../../../reference/runtime/sand-eval-runner.cjs#L318518-L318540) | 6 | 0 | 0 | 7 | 0 | 0 |

### host:629501

Calls written directly in this body: `.join`, `Array.isArray`, `String`, `children.map`, `element.type`, `this.renderPreContent`.

SHA-256 of the source span: `40a7b4a8623be995cb0e0a57a56a0ee07679ee232fa8a5847e4af6180d251a9d`.

### evaluation:318518

Calls written directly in this body: `.join`, `Array.isArray`, `String`, `children.map`, `element.type`, `this.renderPreContent`.

SHA-256 of the source span: `40a7b4a8623be995cb0e0a57a56a0ee07679ee232fa8a5847e4af6180d251a9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
