# `redactSandAutoReviewInlineSecrets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/auto-review/sand-auto-review-redact.ts` · [Module README](../../../../../modules/shared/auto-review/sand-auto-review-redact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693713-693726](../../../../../../reference/runtime/host-main.cjs#L693713-L693726) | `FunctionDeclaration` | no | `value` |
| [evaluation:490949-490962](../../../../../../reference/runtime/sand-eval-runner.cjs#L490949-L490962) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693713-693726](../../../../../../reference/runtime/host-main.cjs#L693713-L693726) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490949-490962](../../../../../../reference/runtime/sand-eval-runner.cjs#L490949-L490962) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:693713

Calls written directly in this body: `.replace`, `value.replace`.

SHA-256 of the source span: `6d221523e30ebe236323e76d1f7773854db7c76df0849900666d6f598c7bf13e`.

### evaluation:490949

Calls written directly in this body: `.replace`, `value.replace`.

SHA-256 of the source span: `6d221523e30ebe236323e76d1f7773854db7c76df0849900666d6f598c7bf13e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
