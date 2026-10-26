# `proposalOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-classifier-run.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-classifier-run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693635-693640](../../../../../../reference/runtime/host-main.cjs#L693635-L693640) | `FunctionDeclaration` | no | `success2` |
| [evaluation:490871-490876](../../../../../../reference/runtime/sand-eval-runner.cjs#L490871-L490876) | `FunctionDeclaration` | no | `success2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693635-693640](../../../../../../reference/runtime/host-main.cjs#L693635-L693640) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:490871-490876](../../../../../../reference/runtime/sand-eval-runner.cjs#L490871-L490876) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:693635

Calls written directly in this body: `success2.proposedAllowRule.trim`, `success2.proposedAllowRuleReplaces.trim`.

SHA-256 of the source span: `44a9cced88a519c17779cedd69ff28cc1162e9c2b9de38a8c3299f0bdfa38bf0`.

### evaluation:490871

Calls written directly in this body: `success2.proposedAllowRule.trim`, `success2.proposedAllowRuleReplaces.trim`.

SHA-256 of the source span: `44a9cced88a519c17779cedd69ff28cc1162e9c2b9de38a8c3299f0bdfa38bf0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
