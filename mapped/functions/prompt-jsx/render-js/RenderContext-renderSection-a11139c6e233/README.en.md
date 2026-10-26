# `RenderContext.renderSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629317-629336](../../../../../reference/runtime/host-main.cjs#L629317-L629336) | `method` | no | `props` |
| [evaluation:318334-318353](../../../../../reference/runtime/sand-eval-runner.cjs#L318334-L318353) | `method` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629317-629336](../../../../../reference/runtime/host-main.cjs#L629317-L629336) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:318334-318353](../../../../../reference/runtime/sand-eval-runner.cjs#L318334-L318353) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:629317

Calls written directly in this body: `.filter`, `.join`, `.map`, `.replace`, `.toLowerCase`, `Object.keys`, `String`, `content.trim`, `this.renderContent`.

SHA-256 of the source span: `01cd15ec6a064d4941a6036c30c2a44325ff6009f4caf68c1ae2faf6531f8756`.

### evaluation:318334

Calls written directly in this body: `.filter`, `.join`, `.map`, `.replace`, `.toLowerCase`, `Object.keys`, `String`, `content.trim`, `this.renderContent`.

SHA-256 of the source span: `c5ea71894f9cd6b14a06ae8776fbadf492c4a368bb5573ce5aa24ac29d20f594`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
