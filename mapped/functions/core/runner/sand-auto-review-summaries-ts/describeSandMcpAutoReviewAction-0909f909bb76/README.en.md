# `describeSandMcpAutoReviewAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:491185-491200](../../../../../../reference/runtime/sand-eval-runner.cjs#L491185-L491200) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491185-491200](../../../../../../reference/runtime/sand-eval-runner.cjs#L491185-L491200) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:491185

Calls written directly in this body: `.trim`, `args.description.replace`, `compact`, `description9.replace`, `fallbackSandMcpAutoReviewSummary`, `mentionsServer`.

SHA-256 of the source span: `a6893c58452259f437d9e2757e9506193a72ce55cc3f811806e0e2c8b6c017a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
