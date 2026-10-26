# `fallbackSandMcpAutoReviewSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:491169-491184](../../../../../../reference/runtime/sand-eval-runner.cjs#L491169-L491184) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491169-491184](../../../../../../reference/runtime/sand-eval-runner.cjs#L491169-L491184) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:491169

Calls written directly in this body: `.includes`, `base.toLowerCase`, `compact`, `genericSandMcpAutoReviewSummary`, `hint.toLowerCase`, `humanizeMcpToolAction`, `safeMcpDestinationHint`.

SHA-256 of the source span: `02c6c1abc1466ecee605c6718ea769e244db74fba31f5091c972eb7cecf8501e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
