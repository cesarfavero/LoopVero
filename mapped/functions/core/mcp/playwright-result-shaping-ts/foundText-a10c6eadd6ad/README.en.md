# `foundText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-result-shaping.ts` · [Module README](../../../../../modules/core/mcp/playwright-result-shaping-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585152-585166](../../../../../../reference/runtime/sand-eval-runner.cjs#L585152-L585166) | `FunctionDeclaration` | yes | `find` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585152-585166](../../../../../../reference/runtime/sand-eval-runner.cjs#L585152-L585166) | 2 | 0 | 1 | 3 | 0 | 1 |

### evaluation:585152

Calls written directly in this body: `find`, `rewriteMcpSuccessText`, `success2.content.filter`.

SHA-256 of the source span: `553c8071257ea53171c605d2279e800e13f5ae49b69fabee972389cbf8f9cd6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
