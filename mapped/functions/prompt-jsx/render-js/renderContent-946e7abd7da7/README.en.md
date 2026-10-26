# `renderContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629540-629543](../../../../../reference/runtime/host-main.cjs#L629540-L629543) | `FunctionDeclaration` | no | `element, options2` |
| [evaluation:318557-318560](../../../../../reference/runtime/sand-eval-runner.cjs#L318557-L318560) | `FunctionDeclaration` | no | `element, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629540-629543](../../../../../reference/runtime/host-main.cjs#L629540-L629543) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:318557-318560](../../../../../reference/runtime/sand-eval-runner.cjs#L318557-L318560) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:629540

Calls written directly in this body: `context2.renderContent`, `new RenderContext`.

SHA-256 of the source span: `e76f8883f24d956ac7a699229a8fdd61b40169af9bbb21a03b5cc2cb75247300`.

### evaluation:318557

Calls written directly in this body: `context2.renderContent`, `new RenderContext`.

SHA-256 of the source span: `e76f8883f24d956ac7a699229a8fdd61b40169af9bbb21a03b5cc2cb75247300`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
