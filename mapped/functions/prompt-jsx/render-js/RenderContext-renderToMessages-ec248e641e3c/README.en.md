# `RenderContext.renderToMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:628997-629014](../../../../../reference/runtime/host-main.cjs#L628997-L629014) | `method` | no | `node2` |
| [evaluation:318014-318031](../../../../../reference/runtime/sand-eval-runner.cjs#L318014-L318031) | `method` | no | `node2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:628997-629014](../../../../../reference/runtime/host-main.cjs#L628997-L629014) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:318014-318031](../../../../../reference/runtime/sand-eval-runner.cjs#L318014-L318031) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:628997

Calls written directly in this body: `Array.isArray`, `String`, `node2.flatMap`, `this.renderElement`.

SHA-256 of the source span: `8fab85682e1351eed74a5491b149a8826af5c997e2a65772fec3df0e6748d655`.

### evaluation:318014

Calls written directly in this body: `Array.isArray`, `String`, `node2.flatMap`, `this.renderElement`.

SHA-256 of the source span: `8fab85682e1351eed74a5491b149a8826af5c997e2a65772fec3df0e6748d655`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
