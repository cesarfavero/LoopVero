# `collapseWrappers/walk3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742813-742818](../../../../../../reference/runtime/host-main.cjs#L742813-L742818) | `ArrowFunctionExpression` | no | `nodes` |
| [evaluation:515475-515480](../../../../../../reference/runtime/sand-eval-runner.cjs#L515475-L515480) | `ArrowFunctionExpression` | no | `nodes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742813-742818](../../../../../../reference/runtime/host-main.cjs#L742813-L742818) | 0 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:515475-515480](../../../../../../reference/runtime/sand-eval-runner.cjs#L515475-L515480) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:742813

Calls written directly in this body: `all.push`, `walk3`.

SHA-256 of the source span: `e665abdc56c6227e1b4029f3d15ce7d01dd90c5201ad904a761ab86350759462`.

### evaluation:515475

Calls written directly in this body: `all.push`, `walk3`.

SHA-256 of the source span: `e665abdc56c6227e1b4029f3d15ce7d01dd90c5201ad904a761ab86350759462`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
