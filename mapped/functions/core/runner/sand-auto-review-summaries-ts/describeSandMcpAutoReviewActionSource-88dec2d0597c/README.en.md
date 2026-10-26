# `describeSandMcpAutoReviewActionSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:491201-491222](../../../../../../reference/runtime/sand-eval-runner.cjs#L491201-L491222) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491201-491222](../../../../../../reference/runtime/sand-eval-runner.cjs#L491201-L491222) | 8 | 0 | 0 | 1 | 0 | 0 |

### evaluation:491201

Calls written directly in this body: `.trim`, `args.description.replace`, `compact`, `describeSandMcpAutoReviewAction`, `description9.replace`, `safeMcpDestinationHint`, `sandMcpAutoReviewAction`.

SHA-256 of the source span: `ece149a01f19e61875367946044ba39ef7072eab2bc51a19a4eccc6fe6ec97b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
