# `foundText/trim`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-result-shaping.ts` · [Module README](../../../../../modules/core/mcp/playwright-result-shaping-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585154-585157](../../../../../../reference/runtime/sand-eval-runner.cjs#L585154-L585157) | `ArrowFunctionExpression` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585154-585157](../../../../../../reference/runtime/sand-eval-runner.cjs#L585154-L585157) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585154

Calls written directly in this body: `formatPlaywrightResultText`.

Assignment or increment targets: `trimmed.beforeSpill`.

SHA-256 of the source span: `321d4544210db8f4305813c383372d6284ace168bb9078bb0e1165a44586b2eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
