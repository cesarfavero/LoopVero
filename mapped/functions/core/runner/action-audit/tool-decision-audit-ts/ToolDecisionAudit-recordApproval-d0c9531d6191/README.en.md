# `ToolDecisionAudit.recordApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489824-489845](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489824-L489845) | `method` | no | `toolCallId, decision, approvalMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489824-489845](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489824-L489845) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489824

Calls written directly in this body: `.next`, `call.decisions.push`, `call.decisions.some`, `cardOutcome`, `this.cardsApprovedPastSettle.add`, `this.cardsApprovedPastSettle.delete`, `this.cardsApprovedPastSettle.values`, `this.recordHumanAnswer`, `this.touch`, `toolEscalationOf`.

SHA-256 of the source span: `2daa5fa8bc0b956d57066b3112afa6ac0937381491c53ef64985519b69152a8c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
