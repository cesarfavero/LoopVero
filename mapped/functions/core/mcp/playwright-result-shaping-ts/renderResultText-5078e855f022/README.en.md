# `renderResultText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-result-shaping.ts` · [Module README](../../../../../modules/core/mcp/playwright-result-shaping-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585083-585086](../../../../../../reference/runtime/sand-eval-runner.cjs#L585083-L585086) | `FunctionDeclaration` | no | `{ preamble, sections }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585083-585086](../../../../../../reference/runtime/sand-eval-runner.cjs#L585083-L585086) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585083

Calls written directly in this body: `.join`, `sections.flatMap`.

SHA-256 of the source span: `c7021a4d88fccdb97d758aa045e40533d218d5a80a4a4ab53bcfcb60be637fa0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
