# `normalizeSandBrowserExactActionArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699708-699719](../../../../../../reference/runtime/host-main.cjs#L699708-L699719) | `FunctionDeclaration` | no | `raw` |
| [evaluation:513464-513475](../../../../../../reference/runtime/sand-eval-runner.cjs#L513464-L513475) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699708-699719](../../../../../../reference/runtime/host-main.cjs#L699708-L699719) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513464-513475](../../../../../../reference/runtime/sand-eval-runner.cjs#L513464-L513475) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:699708

Calls written directly in this body: `assertBounded`, `raw.values.join`, `rejectOversizedField2`.

SHA-256 of the source span: `5605a13a13c9ac20b77218296f08c02fd3ee2abf60245e33db79b30de3f959a5`.

### evaluation:513464

Calls written directly in this body: `assertBounded`, `raw.values.join`, `rejectOversizedField2`.

SHA-256 of the source span: `5605a13a13c9ac20b77218296f08c02fd3ee2abf60245e33db79b30de3f959a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
