# `ToolDecisionAudit.autoReviewRoute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489869-489871](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489869-L489871) | `method` | no | `toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489869-489871](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489869-L489871) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489869

Calls written directly in this body: `this.autoReviewRoutes.get`.

SHA-256 of the source span: `178fba21c4a18f230301228fd7e0d23c313573f4bcb8e7972d049e5d25b11a65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
