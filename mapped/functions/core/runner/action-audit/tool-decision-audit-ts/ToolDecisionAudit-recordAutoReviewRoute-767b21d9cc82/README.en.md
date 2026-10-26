# `ToolDecisionAudit.recordAutoReviewRoute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489861-489868](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489861-L489868) | `method` | no | `toolCallId, route` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489861-489868](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489861-L489868) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:489861

Calls written directly in this body: `.next`, `this.autoReviewRoutes.delete`, `this.autoReviewRoutes.keys`, `this.autoReviewRoutes.set`.

SHA-256 of the source span: `f3a027e09c3020f96546b01e209df40552b34d7d9025f2af00600ecace706f69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
