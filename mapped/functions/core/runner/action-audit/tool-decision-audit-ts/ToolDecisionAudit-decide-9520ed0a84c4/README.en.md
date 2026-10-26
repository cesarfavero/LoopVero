# `ToolDecisionAudit.decide`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489807-489816](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489807-L489816) | `method` | no | `toolCallId, verdict` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489807-489816](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489807-L489816) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:489807

Calls written directly in this body: `call.decisions.find`, `call.decisions.push`, `this.touch`.

SHA-256 of the source span: `8ec20b6871b3285f2f7e36c7d33ced21ccce0a7e0f488dbb43ad58aa3b74141a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
