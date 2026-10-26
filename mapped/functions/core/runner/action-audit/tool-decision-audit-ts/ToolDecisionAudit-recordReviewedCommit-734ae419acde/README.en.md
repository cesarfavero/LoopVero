# `ToolDecisionAudit.recordReviewedCommit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489849-489857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489849-L489857) | `method` | no | `toolCallId, commit2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489849-489857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489849-L489857) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489849

Calls written directly in this body: `.next`, `countsAsOutboundAction`, `this.reviewedCommits.delete`, `this.reviewedCommits.keys`, `this.reviewedCommits.set`.

SHA-256 of the source span: `49efe8afe5486e173f373ca269c1dc8c9aef71f4ef27b6e917210a2d4d8c8986`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
