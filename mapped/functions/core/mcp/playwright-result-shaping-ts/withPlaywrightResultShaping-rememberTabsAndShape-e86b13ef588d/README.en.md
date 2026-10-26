# `withPlaywrightResultShaping/rememberTabsAndShape`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-result-shaping.ts` · [Module README](../../../../../modules/core/mcp/playwright-result-shaping-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585169-585179](../../../../../../reference/runtime/sand-eval-runner.cjs#L585169-L585179) | `ArrowFunctionExpression` | no | `{     text: text3,     provider,     toolName   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585169-585179](../../../../../../reference/runtime/sand-eval-runner.cjs#L585169-L585179) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585169

Calls written directly in this body: `parseResultText`, `renderResultText`, `shapeTabs`, `tabLists.delete`, `tabLists.get`, `tabLists.set`, `withoutBoilerplate`.

SHA-256 of the source span: `28cc8c8eb9e3c1c7d64f1ee73cc39c75dd179363ffe8313c1c63bfbf43e31a8b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
