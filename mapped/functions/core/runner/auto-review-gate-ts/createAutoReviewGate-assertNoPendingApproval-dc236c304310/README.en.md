# `createAutoReviewGate/assertNoPendingApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/auto-review-gate.ts` · [Module README](../../../../../modules/core/runner/auto-review-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490152-490157](../../../../../../reference/runtime/sand-eval-runner.cjs#L490152-L490157) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490152-490157](../../../../../../reference/runtime/sand-eval-runner.cjs#L490152-L490157) | 1 | 0 | 0 | 0 | 1 | 0 |

### evaluation:490152

Calls written directly in this body: `.getPendingApprovals`, `deps.controller`, `new SandAutoReviewPendingApprovalError`.

Explicit throw targets: `SandAutoReviewPendingApprovalError`.

SHA-256 of the source span: `2156df4fcc099b6b924574cc646bf9d5bb85079131c0f10d116e0844c9d17bfd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
