# `passwordRulesReportClause`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/sign-in-guidance.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/sign-in-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:524508-524511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524508-L524511) | `FunctionDeclaration` | no | `configured2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:524508-524511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524508-L524511) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:524508

Calls written directly in this body: `.trim`, `configured2.replace`.

SHA-256 of the source span: `bacd8f16d3e0452e4f885474bf09ea58d51a697aa4ffc879b30c3194021ab0ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
