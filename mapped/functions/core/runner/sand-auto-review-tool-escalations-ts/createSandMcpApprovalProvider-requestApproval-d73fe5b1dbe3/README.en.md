# `createSandMcpApprovalProvider/requestApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-tool-escalations.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-tool-escalations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583594-583632](../../../../../../reference/runtime/sand-eval-runner.cjs#L583594-L583632) | `ArrowFunctionExpression` | yes | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583594-583632](../../../../../../reference/runtime/sand-eval-runner.cjs#L583594-L583632) | 7 | 0 | 1 | 1 | 0 | 0 |

### evaluation:583594

Calls written directly in this body: `appliedRulesOf`, `args.controller.requestApproval`, `args.getExpiryPolicy`, `args.toolDecisionAudit.recordApproval`, `boundedConnectorTag`, `cautionNoteOf`, `describeSandMcpAutoReviewActionSource`, `mcpServerDisplayName`, `request3.target.description.trim`, `summarizeSandMcpAutoReviewAction`.

SHA-256 of the source span: `aeda2cb53b6ff10de37b3868275e0a4e78fe4dbbdbdee98fb3a4b36ac0d708ab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
