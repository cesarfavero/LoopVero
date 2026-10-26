# `createSandShellApprovalProvider/requestApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-tool-escalations.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-tool-escalations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583543-583584](../../../../../../reference/runtime/sand-eval-runner.cjs#L583543-L583584) | `ArrowFunctionExpression` | yes | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583543-583584](../../../../../../reference/runtime/sand-eval-runner.cjs#L583543-L583584) | 8 | 0 | 2 | 2 | 0 | 0 |

### evaluation:583543

Calls written directly in this body: `appliedRulesOf`, `args.beforeApproval`, `args.controller.requestApproval`, `args.getExpiryPolicy`, `args.toolDecisionAudit.recordApproval`, `args.toolDecisionAudit.recordLocalToolAuthorization`, `cautionNoteOf`, `describeSandShellAutoReviewActionSource`, `request3.target.description.trim`.

SHA-256 of the source span: `a654ac7323276e29e8de2f69a3d3e8804891ce342679c22e3be6223a5b5b5925`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
