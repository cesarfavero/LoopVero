# `withPlaywrightResultShaping/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-result-shaping.ts` · [Module README](../../../../../modules/core/mcp/playwright-result-shaping-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585182-585210](../../../../../../reference/runtime/sand-eval-runner.cjs#L585182-L585210) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585182-585210](../../../../../../reference/runtime/sand-eval-runner.cjs#L585182-L585210) | 6 | 1 | 2 | 3 | 0 | 0 |

### evaluation:585182

Calls written directly in this body: `content.push`, `executor.execute`, `foundText`, `playwrightBoxMcpWindowIndex`, `rememberTabsAndShape`, `waitedForText`.

Assignment or increment targets: `item.content.value.text`.

SHA-256 of the source span: `7c29864049f8b3d221128d22abada1da88a1065e584462fabd99e4acd1e56434`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
