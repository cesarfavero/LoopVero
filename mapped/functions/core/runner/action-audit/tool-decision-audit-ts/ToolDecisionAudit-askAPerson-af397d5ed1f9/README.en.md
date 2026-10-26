# `ToolDecisionAudit.askAPerson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489821-489823](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489821-L489823) | `method` | no | `toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489821-489823](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489821-L489823) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:489821

Calls written directly in this body: `this.touch`.

Assignment or increment targets: `.askedAPerson`.

SHA-256 of the source span: `33d82c782f01677f3e57f0bf5155107661316e5a71191278c41c5f2c6cd4599d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
