# `ToolDecisionAudit.reviewedCommit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489858-489860](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489858-L489860) | `method` | no | `toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489858-489860](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489858-L489860) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489858

Calls written directly in this body: `this.reviewedCommits.get`.

SHA-256 of the source span: `c53ca67fd353fc1792e7db8d233edfd9cfd05578c1b39ec8915a95ad5c3aa354`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
